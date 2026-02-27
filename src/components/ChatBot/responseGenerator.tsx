
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';
import EmailCapture from './EmailCapture';
import { toast } from 'sonner';

// Score-based intent matching for smarter responses
function matchIntent(query: string): string {
  const q = query.toLowerCase().trim();
  
  const intents: { key: string; patterns: RegExp[] }[] = [
    { key: 'greeting', patterns: [/^(hi|hello|hey|howdy|hiya|greetings|good\s*(morning|afternoon|evening)|yo)\b/i] },
    { key: 'thanks', patterns: [/\b(thank|thanks|cheers|appreciate|thx)\b/i, /^(bye|goodbye|see you|later)\b/i] },
    { key: 'about', patterns: [/\b(about|who\s*(are|is)\s*(you|githaf)|what\s*is\s*githaf|tell\s*me\s*about|your\s*company)\b/i] },
    { key: 'contact', patterns: [/\b(contact|email|phone|call|reach|whatsapp|number)\b/i] },
    { key: 'lead', patterns: [/\b(contact\s*me|get\s*in\s*touch|talk\s*to\s*(someone|human|person)|speak\s*to|real\s*person)\b/i] },
    { key: 'consultation', patterns: [/\b(book|appoint|schedul|consult|meeting|free\s*(session|call|consult))\b/i] },
    { key: 'pricing', patterns: [/\b(pric|cost|how\s*much|invest|budget|quote|afford|pay|fee|rate)\b/i] },
    { key: 'ai_agents', patterns: [/\b(ai\s*agent|chatbot|automat|virtual\s*assistant|bot|workflow\s*auto)\b/i] },
    { key: 'ai_consulting', patterns: [/\b(ai\s*consult|ai\s*strateg|consult(ing|ant)|readiness|roadmap)\b/i] },
    { key: 'web_dev', patterns: [/\b(web\s*(dev|site|app)|app\s*dev|saas|platform|build\s*(a|my)\s*(site|app|website))\b/i] },
    { key: 'marketing', patterns: [/\b(market|seo|ads|advertis|social\s*media|google\s*ads|facebook|content\s*market|funnel)\b/i] },
    { key: 'governance', patterns: [/\b(governance|regulat|compliance|framework|standards|audit|iso|gdpr)\b/i] },
    { key: 'industries', patterns: [/\b(industr|sector|financ|health|retail|manufactur|technolog|fintech|banking|insur)\b/i] },
    { key: 'cases', patterns: [/\b(case\s*stud|example|success|portfolio|previous\s*work|client|project|result)\b/i] },
    { key: 'roi', patterns: [/\b(roi|return\s*on|benefit|value|worth|impact|save|efficien)\b/i] },
    { key: 'startup', patterns: [/\b(startup|start-up|small\s*business|sme|early\s*stage|new\s*business)\b/i] },
    { key: 'location', patterns: [/\b(locat|where|office|based|uk|uae|london|dubai|address)\b/i] },
    { key: 'services', patterns: [/\b(service|offer|solution|help|what\s*(do|can)\s*you\s*do|capabilit)\b/i] },
  ];

  // Priority order: lead > consultation > specific intents > general
  for (const { key, patterns } of intents) {
    if (patterns.some(p => p.test(q))) return key;
  }
  return 'fallback';
}

export const generateResponse = (
  query: string,
  setMessages: React.Dispatch<React.SetStateAction<any[]>>,
  email: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setLeadCapture: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const intent = matchIntent(query);

  const contactBlock = (
    <div className="flex flex-col gap-2 mt-3">
      <Button variant="outline" size="sm" className="text-slate-800 border-slate-300 hover:bg-slate-50 justify-start" asChild>
        <a href="#contact"><Mail className="mr-2 h-4 w-4" />Get a free consultation</a>
      </Button>
      <Button variant="outline" size="sm" className="text-slate-800 border-slate-300 hover:bg-slate-50 justify-start" onClick={() => window.open('https://api.whatsapp.com/send?phone=971562078508', '_blank')}>
        <Phone className="mr-2 h-4 w-4" />WhatsApp us
      </Button>
    </div>
  );

  switch (intent) {
    case 'greeting':
      return (
        <div className="space-y-2">
          <p>Hello! 👋 Great to have you here. I'm the Githaf Assistant.</p>
          <p>I can help you with:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Understanding our services (AI, Web Dev, Marketing)</li>
            <li>Getting pricing or booking a free consultation</li>
            <li>Learning about our work and industries we serve</li>
            <li>Getting our contact details</li>
          </ul>
          <p>What are you looking for today?</p>
        </div>
      );

    case 'thanks':
      return (
        <div className="space-y-2">
          <p>You're welcome! 😊 Glad I could help.</p>
          <p>If you need anything else, I'm right here. You can also reach us at <a href="mailto:info@githafconsulting.com" className="text-purple-700 underline font-medium">info@githafconsulting.com</a> or on <span className="text-purple-700 underline font-medium cursor-pointer" onClick={() => window.open('https://api.whatsapp.com/send?phone=971562078508', '_blank')}>WhatsApp</span>.</p>
        </div>
      );

    case 'about':
      return (
        <div className="space-y-2">
          <p><strong>Githaf Consulting</strong> helps businesses transform through AI and digital technology. We're not just implementers — we architect solutions that change how businesses operate and grow.</p>
          <p>We operate from the <strong>UK and UAE</strong>, serving clients across Finance, Healthcare, Retail, Manufacturing, and Tech.</p>
          <p>Our approach: understand your challenges → design the right solution → implement it → optimise over time.</p>
          <p>Want to know more about a specific service, or would you like to chat with our team?</p>
        </div>
      );

    case 'lead':
      return (
        <div className="space-y-3">
          <p>Of course! I'll connect you with our team. Just share your email and we'll reach out within 24 hours:</p>
          <EmailCapture
            email={email}
            setEmail={setEmail}
            onSubmit={(emailValue) => {
              toast.success("Thank you! Our team will be in touch soon.");
              setLeadCapture(true);
              setMessages(prev => [...prev, {
                id: prev.length + 1,
                content: <p>Got it! We'll contact you at <strong>{emailValue}</strong> shortly. Looking forward to it! 😊</p>,
                isBot: true
              }]);
            }}
          />
          <p className="text-xs text-slate-500">Or reach us directly: <a href="mailto:info@githafconsulting.com" className="text-purple-700 underline">info@githafconsulting.com</a></p>
        </div>
      );

    case 'contact':
      return (
        <div className="space-y-2">
          <p>Here's how to reach us:</p>
          <div className="space-y-1.5">
            <p>📧 <a href="mailto:info@githafconsulting.com" className="text-purple-700 underline font-medium">info@githafconsulting.com</a></p>
            <p>📱 <a href="tel:+971562078508" className="text-purple-700 underline">+971 56 207 8508</a> (UAE)</p>
            <p>📱 <a href="tel:+447530551944" className="text-purple-700 underline">+44 7530 551 944</a> (UK)</p>
            <p>💬 <span className="text-purple-700 underline cursor-pointer" onClick={() => window.open('https://api.whatsapp.com/send?phone=971562078508', '_blank')}>WhatsApp us</span></p>
          </div>
          <p><strong>Hours:</strong> Mon–Fri, 9 AM – 5 PM (UK & UAE)</p>
          <p>We also offer a free 30-min consultation — want me to help you set one up?</p>
        </div>
      );

    case 'consultation':
      return (
        <div className="space-y-2">
          <p>We offer a <strong>free 30-minute consultation</strong> where we'll:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Understand your current challenges</li>
            <li>Identify where AI or digital solutions can help</li>
            <li>Outline a potential approach and timeline</li>
          </ul>
          <p>No obligations — just a useful conversation to see if we're a good fit.</p>
          {contactBlock}
        </div>
      );

    case 'pricing':
      return (
        <div className="space-y-2">
          <p>Pricing depends on what you need, but here's a rough guide:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Small projects</strong> (automation, consulting) — from ~$5,000</li>
            <li><strong>Mid-size</strong> (AI integrations, web apps) — $10K–$30K</li>
            <li><strong>Enterprise</strong> (full transformation) — $30K+</li>
          </ul>
          <p>Every project is different, so the best next step is a quick chat to understand your needs and give you an accurate estimate.</p>
          {contactBlock}
        </div>
      );

    case 'services':
      return (
        <div className="space-y-2">
          <p>We offer four core service areas:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>AI Consulting & Strategy</strong> — readiness assessments, roadmaps, implementation</li>
            <li><strong>Web & App Development</strong> — custom sites, AI-integrated platforms, SaaS</li>
            <li><strong>Digital Marketing</strong> — SEO, paid ads, email campaigns, funnels</li>
            <li><strong>AI Agents & Automation</strong> — chatbots, workflow automation, process optimisation</li>
          </ul>
          <p>Plus <strong>Governance</strong> services for regulatory compliance and programme management.</p>
          <p>Which one are you most interested in? I can go deeper on any of these.</p>
        </div>
      );

    case 'ai_consulting':
      return (
        <div className="space-y-2">
          <p>Our <strong>AI Consulting</strong> service covers:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>AI readiness & maturity assessment</li>
            <li>Custom strategy & implementation roadmap</li>
            <li>Technology selection & vendor evaluation</li>
            <li>Team upskilling & change management</li>
          </ul>
          <p>We work with businesses of all sizes — from startups to enterprises — in the UK and UAE.</p>
          <p>Would you like to discuss your specific situation? A free consultation is a great place to start.</p>
          {contactBlock}
        </div>
      );

    case 'ai_agents':
      return (
        <div className="space-y-2">
          <p>Our <strong>AI Agents & Automation</strong> solutions include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Custom AI chatbots for customer support</li>
            <li>Workflow automation (eliminate repetitive manual tasks)</li>
            <li>Intelligent document processing</li>
            <li>CRM/ERP integrations with AI</li>
          </ul>
          <p>Clients typically see <strong>40% cost reduction</strong> and <strong>30+ hours saved weekly</strong>.</p>
          <p>What kind of processes are you looking to automate? I can give more specific guidance.</p>
        </div>
      );

    case 'web_dev':
      return (
        <div className="space-y-2">
          <p>Our <strong>Web & App Development</strong> team builds:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Custom business websites & landing pages</li>
            <li>AI-integrated web applications</li>
            <li>SaaS platforms & MVPs</li>
            <li>E-commerce & marketplace solutions</li>
          </ul>
          <p>Everything is mobile-responsive, fast, and SEO-optimised. We use modern tech stacks.</p>
          <p>Are you looking to build something new or improve an existing site?</p>
        </div>
      );

    case 'marketing':
      return (
        <div className="space-y-2">
          <p>Our <strong>Digital Marketing</strong> services include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>SEO optimisation & content strategy</li>
            <li>Google Ads & Facebook/Meta Ads</li>
            <li>Email marketing & automation</li>
            <li>Conversion-focused funnel building</li>
            <li>Analytics & performance tracking</li>
          </ul>
          <p>We use AI-powered tools to maximise your ROI and target the right audience.</p>
          <p>What's your main marketing goal right now? More traffic, more leads, or better conversions?</p>
        </div>
      );

    case 'governance':
      return (
        <div className="space-y-2">
          <p>Our <strong>Governance</strong> services help you stay compliant and well-managed:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Regulatory compliance (GDPR, FCA, industry-specific)</li>
            <li>Industry standards alignment (ISO, SOC2)</li>
            <li>Programme governance & execution frameworks</li>
            <li>Audit readiness & quality assurance</li>
          </ul>
          <p>This is especially relevant for Finance, Healthcare, and any regulated industry.</p>
          <p>Is there a specific compliance area you need help with?</p>
        </div>
      );

    case 'industries':
      return (
        <div className="space-y-2">
          <p>We've delivered AI and digital solutions across:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Finance & Fintech</strong> — trading systems, risk analytics, payments</li>
            <li><strong>Healthcare</strong> — patient engagement, predictive diagnostics</li>
            <li><strong>Retail & E-commerce</strong> — personalisation, inventory AI</li>
            <li><strong>Manufacturing</strong> — predictive maintenance, quality control</li>
            <li><strong>Technology</strong> — SaaS, data platforms, AI integrations</li>
          </ul>
          <p>Which industry are you in? I can share more relevant examples.</p>
        </div>
      );

    case 'cases':
      return (
        <div className="space-y-2">
          <p>Here are some results we've delivered:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Finance:</strong> AI customer service → 80% faster response times</li>
            <li><strong>Retail:</strong> Personalisation engine → 22% higher order value</li>
            <li><strong>Healthcare:</strong> Smart scheduling → 40% fewer no-shows</li>
            <li><strong>Manufacturing:</strong> Predictive maintenance → 30% less downtime</li>
          </ul>
          <p>Want to discuss how we could achieve similar results for your business?</p>
          {contactBlock}
        </div>
      );

    case 'roi':
      return (
        <div className="space-y-2">
          <p>Businesses using AI typically see:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>20–40%</strong> lower operational costs</li>
            <li><strong>10–30%</strong> revenue growth through personalisation</li>
            <li><strong>50–70%</strong> less time on routine tasks</li>
            <li><strong>30–60%</strong> fewer process errors</li>
          </ul>
          <p>We also have an <strong>AI ROI Calculator</strong> on our site if you'd like to estimate potential returns for your business.</p>
          <p>Want help calculating ROI for your specific use case?</p>
        </div>
      );

    case 'startup':
      return (
        <div className="space-y-2">
          <p>We have an <strong>AI for Startups</strong> programme designed for early-stage businesses:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Affordable AI strategy sessions</li>
            <li>MVP development with AI built in</li>
            <li>Scalable architecture planning</li>
            <li>Growth-focused digital marketing</li>
          </ul>
          <p>Whether you're pre-seed or scaling, we tailor our approach to your stage and budget.</p>
          {contactBlock}
        </div>
      );

    case 'location':
      return (
        <div className="space-y-2">
          <p>We have a presence in:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>🇬🇧 <strong>United Kingdom</strong> — London</li>
            <li>🇦🇪 <strong>United Arab Emirates</strong> — Dubai</li>
          </ul>
          <p>We work with clients globally and can engage remotely or on-site.</p>
          <p>Where are you based? Happy to discuss how we can work together.</p>
        </div>
      );

    default:
      return (
        <div className="space-y-2">
          <p>Good question! Let me point you in the right direction.</p>
          <p>I can help you with:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Our services</strong> — AI consulting, web development, marketing, automation</li>
            <li><strong>Pricing</strong> — get a rough idea or request a quote</li>
            <li><strong>Free consultation</strong> — book a 30-min call with our team</li>
            <li><strong>Contact info</strong> — email, phone, WhatsApp</li>
          </ul>
          <p>Or if you'd prefer to talk to a person:</p>
          {contactBlock}
        </div>
      );
  }
};
