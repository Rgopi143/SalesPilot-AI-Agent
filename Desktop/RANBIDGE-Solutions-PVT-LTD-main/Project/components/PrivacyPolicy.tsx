import React from 'react';
import { ArrowLeft, Shield, Lock, Database, Eye, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
              <Shield size={32} className="text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-brand">
              Privacy Policy for RANBIDGE Assistant
            </h1>
          </div>
          
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we handle your information when using our AI assistant.
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="bg-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-700/50 p-8 md:p-12">
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield size={24} className="text-blue-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Privacy Commitment</h2>
                  <p className="text-slate-300 leading-relaxed">
                    RANBIDGE Assistant respects user privacy and is committed to protecting it. This privacy policy outlines how we handle your information when you interact with our AI assistant.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Collection */}
            <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database size={24} className="text-green-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Data Collection & Storage</h2>
                  <div className="space-y-3 text-slate-300">
                    <p>• This assistant does not collect, store, or retain personal data.</p>
                    <p>• Conversations are used only to generate responses in real time.</p>
                    <p>• Users are not required to share personal information.</p>
                    <p>• The assistant does not access external databases or third-party systems.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* User Information */}
            <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock size={24} className="text-amber-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Voluntary Information Sharing</h2>
                  <div className="space-y-3 text-slate-300">
                    <p>• If users voluntarily share contact details for business or service inquiries, they are advised to use official RANBIDGE communication channels.</p>
                    <p>• The assistant does not guarantee confidentiality of information shared within the chat.</p>
                    <p>• All guidance provided is informational and advisory in nature.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* User Agreement */}
            <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye size={24} className="text-purple-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">User Agreement</h2>
                  <div className="space-y-3 text-slate-300">
                    <p>• By using this assistant, users acknowledge and agree to this privacy policy.</p>
                    <p>• Users understand that the AI assistant provides general guidance and should not be considered as professional advice.</p>
                    <p>• Users are responsible for the information they choose to share in conversations.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-amber-600/10 border border-amber-500/30 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle size={24} className="text-amber-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Important Notice</h2>
                  <div className="space-y-3 text-slate-300">
                    <p>• This privacy policy may be updated periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons.</p>
                    <p>• For official business inquiries, please use our established communication channels listed on our website.</p>
                    <p>• This policy is effective as of the date of last update and applies to all users of the RANBIDGE Assistant.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <div className="space-y-3 text-slate-300">
                <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="font-semibold text-white">Email:</p>
                    <p>info@ranbidge.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone:</p>
                    <p>+91 82473 92437</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-slate-700/50 text-center">
            <p className="text-slate-400 text-sm">
              This Privacy Policy is effective as of February 2024 and may be updated periodically.
            </p>
            <p className="text-slate-500 text-xs mt-2">
              © 2024 Ranbridge Solutions Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
