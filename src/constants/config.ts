type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Nabeel Javed — Portfolio",
    fullName: "Nabeel Javed",
    email: "nabeeljaved944@gmail.com",
  },
  hero: {
    name: "Nabeel Javed",
    p: ["I audit interfaces, blockchain application", "and make sure they are secure"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I am an experienced Smart Contract Auditor, proficient in Solidity and blockchain technology. I specialize in
      identifying vulnerabilities, enhancing security, and ensuring compliance with industry standards. My
      commitment lies in fortifying decentralized applications through meticulous audits and contributing to secure
      blockchain innovation.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Private Audits.",
      content: `Following project audits showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code or website. It reflects my
    ability to audit complex protocols, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
