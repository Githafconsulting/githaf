
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Bot, Globe, MapPin } from 'lucide-react';
import EmailCapture from './EmailCapture';
import { toast } from 'sonner';

export const generateResponse = (query: string, setMessages: React.Dispatch<React.SetStateAction<any[]>>, email: string, setEmail: React.Dispatch<React.SetStateAction<string>>, setLeadCapture: React.Dispatch<React.SetStateAction<boolean>>) => {
  const lowerQuery = query.toLowerCase();

  // Greetings
  if (/^(hello|hi|hey|good morning|good afternoon|good evening|howdy|hiya|greetings)/i.test(lowerQuery.trim())) {
    return (
      <div className="space-y-2">
        <p>Hello! 👋 Welcome to Githaf Consulting! I'm the Githaf Assistant — happy to help you with anything.</p>
        <p>Here are some things I can help with:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Our services — AI Consulting, Web Development, Digital Marketing & more</li>
          <li>Industries we work with</li>
          <li>How to get a free consultation</li>
          <li>Contact details & office hours</li>
        </ul>
        <p className="mt-2">What would you like to know? 😊</p>
      </div>
    );
  }

  // About Githaf
  if (lowerQuery.includes('about') || lowerQuery.includes('who are you') || lowerQuery.includes('what is githaf') ||
      lowerQuery.includes('tell me about') || lowerQuery.includes('company')) {
    return (
      <div className="space-y-2">
        <p><strong>Githaf Consulting</strong> bridges the gap between AI innovation and business transformation. We don't just implement technology — we architect intelligent solutions that fundamentally change how businesses operate, compete, and grow.</p>
        <p>With operations spanning the <strong>UK and UAE</strong>, our specialists have delivered transformative solutions across Finance, Healthcare, Retail, Manufacturing, and Technology sectors.</p>
        <p>Our approach combines strategic AI consulting with hands-on implementation — from identifying where AI creates the most impact to designing custom solutions that integrate seamlessly with your existing workflows.</p>
        <p className="mt-2">Would you like to know more about our services or how we can help your business?</p>
      </div>
    );
  }

  // Services overview
  if (lowerQuery.includes('service') || lowerQuery.includes('offer') || lowerQuery.includes('what do you do') ||
      lowerQuery.includes('solution') || lowerQuery.includes('help me')) {
    return (
      <div className="space-y-2">
        <p>We offer a comprehensive range of services across four key areas:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>🤖 AI Consulting & Strategy</strong> — AI readiness assessments, roadmaps, and implementation planning</li>
          <li><strong>🌐 Web & App Development</strong> — Custom websites, web applications, and AI-integrated platforms</li>
          <li><strong>📈 Digital Marketing</strong> — SEO, Google & Facebook Ads, email campaigns, and funnel building</li>
          <li><strong>⚙️ AI Agents & Automation</strong> — Custom AI agents, chatbots, workflow automation, and process optimisation</li>
        </ul>
        <p className="mt-2">We also provide <strong>Governance</strong> services covering regulatory compliance, industry standards, and execution frameworks.</p>
        <p>Which area interests you most? I'd love to share more details! 😊</p>
      </div>
    );
  }

  // AI Consulting specifically
  if (lowerQuery.includes('ai consult') || lowerQuery.includes('ai strategy') || lowerQuery.includes('consulting')) {
    return (
      <div className="space-y-2">
        <p>Our <strong>AI Consulting</strong> service helps businesses navigate the AI landscape with confidence:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>AI readiness assessments & maturity evaluations</li>
          <li>Custom AI strategy & implementation roadmaps</li>
          <li>Technology selection & vendor evaluation</li>
          <li>Change management & team upskilling</li>
          <li>Ongoing optimisation & performance monitoring</li>
        </ul>
        <p className="mt-2">We offer AI consulting for businesses of all sizes, including startups and enterprises, with operations in <strong>London</strong> and the <strong>UAE</strong>.</p>
        <p>Would you like to book a free consultation to discuss your needs?</p>
      </div>
    );
  }

  // AI Agents & Automation
  if (lowerQuery.includes('ai agent') || lowerQuery.includes('chatbot') || lowerQuery.includes('automation') ||
      lowerQuery.includes('virtual assistant') || lowerQuery.includes('bot') || lowerQuery.includes('workflow')) {
    return (
      <div className="space-y-2">
        <p>Our <strong>AI Agents & Automation</strong> solutions help businesses work smarter:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Custom AI chatbots for 24/7 customer support</li>
          <li>Workflow automation to eliminate repetitive tasks</li>
          <li>Intelligent document processing & data extraction</li>
          <li>AI-powered content generation & recommendations</li>
          <li>Integration with your existing business systems (CRM, ERP, etc.)</li>
        </ul>
        <p className="mt-2">Our clients have seen up to <strong>40% reduction</strong> in operational costs and <strong>30+ hours</strong> saved weekly through automation.</p>
        <p>Interested in exploring what automation could do for you? 🚀</p>
      </div>
    );
  }

  // Web Development
  if (lowerQuery.includes('web dev') || lowerQuery.includes('website') || lowerQuery.includes('app dev') ||
      lowerQuery.includes('application') || lowerQuery.includes('saas') || lowerQuery.includes('platform')) {
    return (
      <div className="space-y-2">
        <p>Our <strong>Web & App Development</strong> team builds modern, high-performance digital platforms:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Custom business websites & landing pages</li>
          <li>AI-integrated web applications</li>
          <li>SaaS product development</li>
          <li>E-commerce & marketplace platforms</li>
          <li>Progressive web apps (PWAs)</li>
        </ul>
        <p className="mt-2">We use cutting-edge technologies and ensure every project is mobile-responsive, fast, and SEO-optimised.</p>
        <p>Would you like to discuss a project? 😊</p>
      </div>
    );
  }

  // Digital Marketing
  if (lowerQuery.includes('marketing') || lowerQuery.includes('seo') || lowerQuery.includes('ads') ||
      lowerQuery.includes('advertising') || lowerQuery.includes('social media') || lowerQuery.includes('google ads') ||
      lowerQuery.includes('facebook ads')) {
    return (
      <div className="space-y-2">
        <p>Our <strong>Digital Marketing</strong> services use AI to maximise your marketing ROI:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>SEO optimisation & content strategy</li>
          <li>Google Ads & Facebook/Meta Ads management</li>
          <li>Email marketing campaigns & automation</li>
          <li>Conversion-focused funnel building</li>
          <li>Analytics, reporting & performance tracking</li>
        </ul>
        <p className="mt-2">We combine data-driven strategies with AI tools to help you reach the right audience and convert more leads.</p>
        <p>Want to learn how we can grow your online presence?</p>
      </div>
    );
  }

  // Governance
  if (lowerQuery.includes('governance') || lowerQuery.includes('regulation') || lowerQuery.includes('compliance') ||
      lowerQuery.includes('framework') || lowerQuery.includes('standards') || lowerQuery.includes('programme management')) {
    return (
      <div className="space-y-2">
        <p>Our <strong>Governance</strong> services ensure your projects and operations meet the highest standards:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Regulatory compliance & risk management</li>
          <li>Industry standards alignment (ISO, GDPR, etc.)</li>
          <li>Programme governance & execution frameworks</li>
          <li>Quality assurance & audit readiness</li>
          <li>Strategic oversight & stakeholder management</li>
        </ul>
        <p className="mt-2">We help businesses navigate complex regulatory landscapes while maintaining operational excellence.</p>
      </div>
    );
  }

  // Industries
  if (lowerQuery.includes('industr') || lowerQuery.includes('sector') || lowerQuery.includes('finance') ||
      lowerQuery.includes('healthcare') || lowerQuery.includes('retail') || lowerQuery.includes('manufacturing') ||
      lowerQuery.includes('technology') || lowerQuery.includes('fintech')) {
    return (
      <div className="space-y-2">
        <p>We work across a range of industries, delivering tailored AI and digital solutions:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Finance & Fintech</strong> — Trading systems, risk analytics, payment solutions</li>
          <li><strong>Healthcare</strong> — Patient engagement, predictive diagnostics, scheduling</li>
          <li><strong>Retail & E-commerce</strong> — Personalisation engines, inventory optimisation</li>
          <li><strong>Manufacturing</strong> — Predictive maintenance, quality control, supply chain AI</li>
          <li><strong>Technology</strong> — SaaS platforms, AI integrations, data analytics</li>
        </ul>
        <p className="mt-2">Which industry are you in? I can share more relevant examples! 😊</p>
      </div>
    );
  }

  // Pricing / Cost
  if (lowerQuery.includes('pricing') || lowerQuery.includes('cost') || lowerQuery.includes('how much') ||
      lowerQuery.includes('investment') || lowerQuery.includes('package') || lowerQuery.includes('budget') ||
      lowerQuery.includes('quote')) {
    return (
      <div className="space-y-2">
        <p>Our solutions are custom-priced based on your specific needs, scope, and objectives. We focus on delivering measurable ROI.</p>
        <p>Typical project ranges:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Small automation & consulting projects — from ~$5,000</li>
          <li>Mid-size AI integrations — $10,000–$30,000</li>
          <li>Enterprise-scale transformations — $30,000+</li>
        </ul>
        <p className="mt-2">The best way to get an accurate quote is through a <strong>free consultation</strong>. Would you like to get in touch? 😊</p>
        <div className="flex flex-col gap-2 mt-2">
          <Button variant="outline" size="sm" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Request a free consultation
            </a>
          </Button>
        </div>
      </div>
    );
  }

  // Contact info
  if (lowerQuery.includes('contact') || lowerQuery.includes('phone') || lowerQuery.includes('call') ||
      lowerQuery.includes('email') || lowerQuery.includes('reach') || lowerQuery.includes('whatsapp')) {
    return (
      <div className="space-y-2">
        <p>You can reach our team through any of these channels:</p>
        <div className="space-y-2">
          <p className="flex items-center">
            <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
            <a href="mailto:info@githafconsulting.com" className="text-primary hover:underline">info@githafconsulting.com</a>
          </p>
          <p className="flex items-center">
            <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
            <a href="tel:+971562078508" className="text-primary hover:underline">+971 56 207 8508</a> (UAE)
          </p>
          <p className="flex items-center">
            <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
            <a href="tel:+447530551944" className="text-primary hover:underline">+44 7530 551 944</a> (UK)
          </p>
          <p className="flex items-center">
            <Globe className="h-4 w-4 mr-2 flex-shrink-0" />
            <a href="https://wa.me/971562078508" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WhatsApp us</a>
          </p>
        </div>
        <p className="mt-2"><strong>Office hours:</strong> Mon–Fri, 9:00 AM – 5:00 PM (UK & UAE time zones)</p>
        <p>We also offer a <strong>free 30-minute consultation</strong> — just scroll down to our contact form or click below! 😊</p>
        <div className="flex flex-col gap-2 mt-2">
          <Button variant="outline" size="sm" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Go to contact form
            </a>
          </Button>
        </div>
      </div>
    );
  }

  // Location
  if (lowerQuery.includes('location') || lowerQuery.includes('where') || lowerQuery.includes('office') ||
      lowerQuery.includes('based') || lowerQuery.includes('uk') || lowerQuery.includes('uae') || lowerQuery.includes('london') || lowerQuery.includes('dubai')) {
    return (
      <div className="space-y-2">
        <p>Githaf Consulting has a global presence with operations in:</p>
        <div className="space-y-2">
          <p className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> <strong>United Kingdom</strong> — London</p>
          <p className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> <strong>United Arab Emirates</strong> — Dubai</p>
        </div>
        <p className="mt-2">We work with clients globally and can engage remotely or on-site depending on your needs.</p>
      </div>
    );
  }

  // Consultation / booking
  if (lowerQuery.includes('book') || lowerQuery.includes('appointment') || lowerQuery.includes('schedule') ||
      lowerQuery.includes('consultation') || lowerQuery.includes('meeting') || lowerQuery.includes('free')) {
    return (
      <div className="space-y-2">
        <p>We'd love to chat with you! We offer a <strong>free 30-minute consultation</strong> to discuss your business needs and explore how AI and digital transformation can help.</p>
        <p>During the consultation, we typically cover:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Assessment of your current processes & challenges</li>
          <li>Identification of AI & digital opportunities</li>
          <li>Discussion of potential solutions & approaches</li>
          <li>Preliminary timeline & investment estimates</li>
        </ul>
        <div className="flex flex-col gap-2 mt-2">
          <Button variant="outline" size="sm" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Book a free consultation
            </a>
          </Button>
        </div>
      </div>
    );
  }

  // Case studies / portfolio
  if (lowerQuery.includes('case study') || lowerQuery.includes('example') || lowerQuery.includes('success') ||
      lowerQuery.includes('portfolio') || lowerQuery.includes('previous work') || lowerQuery.includes('project')) {
    return (
      <div className="space-y-2">
        <p>We've delivered impactful solutions across multiple industries. Here are some highlights:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Financial Services:</strong> AI-powered customer service reducing response times by 80%</li>
          <li><strong>Retail:</strong> Personalisation engine increasing average order value by 22%</li>
          <li><strong>Healthcare:</strong> Automated scheduling reducing no-shows by 40%</li>
          <li><strong>Manufacturing:</strong> Predictive maintenance reducing downtime by 30%</li>
        </ul>
        <p className="mt-2">You can also explore our portfolio on the website! Would you like to discuss a specific industry?</p>
      </div>
    );
  }

  // ROI
  if (lowerQuery.includes('roi') || lowerQuery.includes('return on investment') || lowerQuery.includes('benefits') ||
      lowerQuery.includes('value') || lowerQuery.includes('worth')) {
    return (
      <div className="space-y-2">
        <p>AI implementations deliver strong ROI across several areas:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Cost Reduction:</strong> 20–40% decrease in operational costs</li>
          <li><strong>Revenue Growth:</strong> 10–30% increase through personalisation</li>
          <li><strong>Time Savings:</strong> 50–70% reduction in routine tasks</li>
          <li><strong>Error Reduction:</strong> 30–60% fewer process errors</li>
          <li><strong>Customer Satisfaction:</strong> 15–40% improvement in scores</li>
        </ul>
        <p className="mt-2">We also have an <strong>AI ROI Calculator</strong> tool on our site that can help you estimate potential returns. Would you like to explore it?</p>
      </div>
    );
  }

  // Thank you / goodbye
  if (lowerQuery.includes('thank') || lowerQuery.includes('thanks') || lowerQuery.includes('bye') ||
      lowerQuery.includes('goodbye') || lowerQuery.includes('cheers')) {
    return (
      <div className="space-y-2">
        <p>You're welcome! 😊 It was great chatting with you. If you ever need anything else, don't hesitate to come back.</p>
        <p>Remember, you can always reach us at <a href="mailto:info@githafconsulting.com" className="text-primary hover:underline">info@githafconsulting.com</a> or via <a href="https://wa.me/971562078508" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WhatsApp</a>.</p>
        <p>Have a wonderful day! 🌟</p>
      </div>
    );
  }

  // Lead capture intent
  if (lowerQuery.includes('contact me') || lowerQuery.includes('get in touch') ||
      lowerQuery.includes('talk to someone') || lowerQuery.includes('speak to a human') ||
      lowerQuery.includes('real person')) {
    return (
      <div className="space-y-3">
        <p>Absolutely! I'd be happy to connect you with one of our team members. Could you share your email so we can reach out?</p>
        <EmailCapture
          email={email}
          setEmail={setEmail}
          onSubmit={(emailValue) => {
            toast.success("Thank you! Our team will contact you shortly.");
            setLeadCapture(true);
            setMessages(prev => [...prev, {
              id: prev.length + 1,
              content: <p>Thanks! One of our specialists will reach out to you at <strong>{emailValue}</strong> within 24 hours. We look forward to helping you! 😊</p>,
              isBot: true
            }]);
          }}
        />
      </div>
    );
  }

  // Startups
  if (lowerQuery.includes('startup') || lowerQuery.includes('small business') || lowerQuery.includes('sme') ||
      lowerQuery.includes('early stage')) {
    return (
      <div className="space-y-2">
        <p>We have a dedicated <strong>AI for Startups</strong> programme designed to help early-stage businesses leverage AI without breaking the bank:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Affordable AI strategy sessions</li>
          <li>MVP development with AI integration</li>
          <li>Scalable architecture planning</li>
          <li>Growth-focused digital marketing</li>
        </ul>
        <p className="mt-2">Whether you're pre-seed or scaling up, we can tailor our approach to your stage and budget. Would you like to learn more?</p>
      </div>
    );
  }

  // Friendly fallback
  return (
    <div className="space-y-2">
      <p>Thanks for your question! While I may not have the exact answer for that right now, I can help with information about our services, industries, pricing, or how to get in touch.</p>
      <p>Here are some popular topics I can help with:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Our AI Consulting, Web Development & Marketing services</li>
        <li>Industries we work with</li>
        <li>Getting a free consultation</li>
        <li>Contact details & office hours</li>
      </ul>
      <p className="mt-2">Or if you'd like to speak to someone directly:</p>
      <div className="flex flex-col gap-2 mt-2">
        <Button variant="outline" size="sm" asChild>
          <a href="#contact">
            <Mail className="mr-2 h-4 w-4" />
            Contact our team
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a href="https://wa.me/971562078508" target="_blank" rel="noopener noreferrer">
            <Phone className="mr-2 h-4 w-4" />
            WhatsApp us
          </a>
        </Button>
      </div>
    </div>
  );
};
