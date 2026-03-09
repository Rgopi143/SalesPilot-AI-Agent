import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';

interface VoiceAssistantProps {
  onTranscript: (text: string) => void;
  isListening?: boolean;
  apiKey?: string;
}

const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ 
  onTranscript, 
  isListening: externalIsListening = false,
  apiKey 
}) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState('');
  const [volume, setVolume] = useState(1);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    // Check if browser supports speech recognition
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      setIsSupported(true);
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        setError('');
      };

      recognition.onresult = (event: any) => {
        let finalTranscript = '';
        let interimTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          } else {
            interimTranscript += transcript;
          }
        }

        const fullTranscript = finalTranscript + interimTranscript;
        setTranscript(fullTranscript);
        
        if (finalTranscript.trim()) {
          onTranscript(finalTranscript.trim());
        }
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setError(`Error: ${event.error}`);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    } else {
      setIsSupported(false);
      setError('Speech recognition is not supported in your browser');
    }

    // Initialize speech synthesis
    synthRef.current = window.speechSynthesis;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, [onTranscript]);

  useEffect(() => {
    // Handle external listening state
    if (externalIsListening !== isListening) {
      if (externalIsListening) {
        startListening();
      } else {
        stopListening();
      }
    }
  }, [externalIsListening]);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      try {
        recognitionRef.current.start();
        setError('');
      } catch (error) {
        console.error('Failed to start recognition:', error);
        setError('Failed to start microphone');
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const speak = (text: string) => {
    if (synthRef.current && text.trim()) {
      // Cancel any ongoing speech
      synthRef.current.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = volume;
      
      // Try to use a female voice for assistant
      const voices = synthRef.current.getVoices();
      const femaleVoice = voices.find(voice => 
        voice.name.includes('Female') || 
        voice.name.includes('Samantha') ||
        voice.name.includes('Karen')
      );
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }
      
      synthRef.current.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
  };

  return (
    <div className="voice-assistant">
      {/* Microphone Button */}
      <button
        onClick={toggleListening}
        disabled={!isSupported}
        className={`
          relative p-3 rounded-full transition-all duration-300
          ${isListening 
            ? 'bg-red-500 text-white animate-pulse shadow-lg shadow-red-500/50' 
            : 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30'
          }
          ${!isSupported ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 active:scale-95'}
        `}
        title={isSupported ? (isListening ? 'Stop listening' : 'Start voice input') : 'Voice not supported'}
      >
        {isListening ? <MicOff size={20} /> : <Mic size={20} />}
        
        {/* Listening indicator */}
        {isListening && (
          <div className="absolute inset-0 rounded-full border-2 border-red-400 animate-ping" />
        )}
      </button>

      {/* Error Display */}
      {error && (
        <div className="mt-2 p-2 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-xs">
          {error}
        </div>
      )}

      {/* Current Transcript Display */}
      {transcript && (
        <div className="mt-2 p-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-xs">
          <div className="font-medium text-slate-400 mb-1">Listening:</div>
          <div>{transcript}</div>
        </div>
      )}

      {/* Voice Controls */}
      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={() => speak('Hello! I am your AI assistant. How can I help you today?')}
          className="p-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition-colors"
          title="Test voice output"
        >
          <Volume2 size={16} />
        </button>
        
        <button
          onClick={stopSpeaking}
          className="p-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition-colors"
          title="Stop speaking"
        >
          <VolumeX size={16} />
        </button>
      </div>

      {/* Support Notice */}
      {!isSupported && (
        <div className="mt-2 p-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-yellow-400 text-xs">
          Voice recognition requires Chrome, Edge, or Safari browsers
        </div>
      )}
    </div>
  );
};

export default VoiceAssistant;
