import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function LegalModal({ isOpen, initialTab = 'terms', onClose }) {
  const [activeTab, setActiveTab] = React.useState(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (typeof document === 'undefined') return null;

  const tabs = [
    { id: 'terms', label: 'Terms & Conditions' },
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'legal', label: 'Legal & Policies' },
  ];

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 font-sans">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-4xl max-h-[88vh] bg-[#121212] border border-white/15 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden text-white z-10"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 sm:px-8 border-b border-white/10 bg-[#161616]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs uppercase tracking-widest text-[#FD5800] font-bold">
                    scaloMATRIX
                  </span>
                  <span className="text-white/40 text-xs">•</span>
                  <span className="text-white/60 text-xs font-medium">
                    Powered by Kraffic Enterprises
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  Legal Documentation & Compliance
                </h3>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="self-end sm:self-auto p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors border border-white/10"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 px-6 sm:px-8 py-3 bg-[#141414] border-b border-white/10 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#FD5800] text-white shadow-[0_0_20px_rgba(253,88,0,0.4)]'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-sm text-gray-300 leading-relaxed custom-scrollbar">
              {activeTab === 'terms' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">1. Agreement to Terms</h4>
                    <p>
                      These Terms and Conditions constitute a legally binding agreement made between you ("Client", "User") and <strong className="text-white">Kraffic Enterprises</strong> (operating and representing <strong className="text-white">scaloMATRIX</strong>). By accessing our services, submitting inquiries, or engaging with our website and conversion rate optimization (CRO) deliverables, you agree to be bound by all of these Terms and Conditions.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">2. Scope of Services</h4>
                    <p>
                      Kraffic Enterprises / scaloMATRIX provides specialized digital services including, but not limited to, Shopify Conversion Rate Optimization (CRO), custom landing page design & development, performance engineering, split testing frameworks, and ecommerce brand consulting.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">3. Intellectual Property Rights</h4>
                    <p>
                      Unless otherwise indicated, all proprietary algorithms, source code, designs, and systems developed by Kraffic Enterprises remain the intellectual property of Kraffic Enterprises until complete payment settlement. Upon full payment of the project invoice, clients are granted a perpetual, non-exclusive license for the bespoke designs and code deployed to their designated Shopify store.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">4. Performance Guarantees & Deliverables</h4>
                    <p>
                      While our landing pages and strategic architectures are engineered according to stringent quantitative CRO metrics, real-world conversion metrics depend upon numerous external variables (traffic quality, seasonal demand, advertising strategy, product-market fit). Guarantees are provided solely as specified in individual client written service agreements.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">5. Confidentiality</h4>
                    <p>
                      Kraffic Enterprises respects the proprietary business data, store analytics, and revenue numbers of our partners. All analytical telemetry and commercial data shared with us remain strictly confidential and protected under standard commercial non-disclosure guidelines.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">1. Privacy Commitment</h4>
                    <p>
                      At <strong className="text-white">Kraffic Enterprises</strong> ("scaloMATRIX"), safeguarding your personal information and commercial integrity is paramount. This Privacy Policy details our practices regarding data collection, operational usage, and disclosure when utilizing our platforms.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">2. Data We Collect</h4>
                    <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-300">
                      <li><strong className="text-white">Personal & Contact Info:</strong> Name, work email address, company URL, and phone number when submitting contact forms or booking strategy audits.</li>
                      <li><strong className="text-white">Ecommerce Diagnostics:</strong> Shopify store URL, monthly revenue brackets, and conversion benchmarks voluntarily supplied for diagnostic calculators.</li>
                      <li><strong className="text-white">Technical Telemetry:</strong> Device type, browser environment, IP address, and interaction metrics used to enhance web performance and layout efficiency.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">3. How Your Information is Utilized</h4>
                    <p>
                      Data gathered is used exclusively to evaluate optimization opportunities, tailor client proposals, deliver agreed-upon technical services, and communicate project milestones. We do not sell, rent, or lease your store intelligence or contact details to third-party data brokers.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">4. Security Standards</h4>
                    <p>
                      We enforce modern encryption protocols, SSL/TLS data pipelines, and restricted access privileges to ensure maximum defense against unauthorized access, loss, or alteration of confidential store information.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">5. Updates & Inquiries</h4>
                    <p>
                      For privacy inquiries or data removal requests, contact the data compliance team of <strong className="text-white">Kraffic Enterprises</strong> via our official contact channels.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'legal' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">1. Legal Entity & Operations</h4>
                    <p>
                      <strong className="text-white">scaloMATRIX</strong> is an ecommerce conversion studio operated and managed by <strong className="text-white">Kraffic Enterprises</strong>, Surat, Gujarat, India. All contracts, service level agreements (SLAs), and financial operations are governed through Kraffic Enterprises.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">2. Disclaimer of Warranties</h4>
                    <p>
                      The website, calculators, case study estimations, and informational assets are delivered on an "as-is" and "as-available" basis. While scaloMATRIX and Kraffic Enterprises aim for peak performance (sub-second mobile loading, rigorous usability heuristics), results may vary depending on merchant operations.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">3. Refund & Revision Policy</h4>
                    <p>
                      Custom digital architecture, custom code integration, and strategic research involve committed expert engineering hours. Specific milestones, revision rounds, and money-back guarantees are governed directly by individual signed project statements of work (SOWs).
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">4. Governing Law & Jurisdiction</h4>
                    <p>
                      These terms, policies, and any associated dispute resolution procedures shall be interpreted and governed in accordance with the substantive laws of India, under the jurisdiction of competent courts in Gujarat, India.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">5. Brand Notice</h4>
                    <p>
                      Shopify is a registered trademark of Shopify Inc. scaloMATRIX / Kraffic Enterprises is an independent design, engineering, and conversion rate optimization agency and is not affiliated, sponsored, or endorsed by Shopify Inc. unless explicitly stated.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Bar */}
            <div className="p-4 sm:px-8 bg-[#161616] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FD5800]"></span>
                <span>Powered by <strong className="text-white">Kraffic Enterprises</strong></span>
              </div>
              <button
                onClick={onClose}
                className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
