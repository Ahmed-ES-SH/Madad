import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCreditCard,
  FaPython,
  FaDocker,
  FaAws,
  FaEnvelope,
  FaFigma,
  FaLock,
  FaCode,
  FaSearch,
  FaChartLine,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiGoogleanalytics,
  SiTensorflow,
  SiKubernetes,
  SiTerraform,
  SiPostgresql,
  SiRaspberrypi,
  SiArduino,
  SiFlutter,
  SiMqtt,
  SiSolidity,
  SiWeb3Dotjs,
  SiEthereum,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiI18Next,
  SiGooglemaps,
  SiMeta,
  SiNextdotjs,
} from "react-icons/si";

interface SkillIconMapping {
  [key: string]: React.ComponentType<{ className?: string }>;
}

export const skillIcons: SkillIconMapping = {
  // Web Development
  React: FaReact,
  "React Native": FaReact,
  "Next.js": SiNextdotjs,
  "Node.js": FaNodeJs,
  "Tailwind CSS": SiTailwindcss,
  MongoDB: FaDatabase,
  PostgreSQL: SiPostgresql,
  "Stripe API": FaCreditCard,
  Firebase: FaDatabase,
  TypeScript: FaCode,
  Redux: FaCode,
  "Socket.io": FaCode,
  Redis: FaDatabase,

  // UI/UX
  Figma: FaFigma,
  Photoshop: SiAdobephotoshop,
  Illustrator: SiAdobeillustrator,

  // Marketing & Analytics
  SEO: FaSearch,
  "Google Analytics": SiGoogleanalytics,
  "Email Marketing": FaEnvelope,
  "Meta Ads": SiMeta,
  Instagram: FaChartLine,
  Analytics: FaChartLine,

  // AI / Data
  Python: FaPython,
  TensorFlow: SiTensorflow,
  "Natural Language Processing": FaCode,
  "D3.js": FaCode,
  "Power BI": FaChartLine,

  // DevOps / Cloud
  AWS: FaAws,
  Docker: FaDocker,
  Kubernetes: SiKubernetes,
  Terraform: SiTerraform,

  // Embedded / IoT
  Arduino: SiArduino,
  "Raspberry Pi": SiRaspberrypi,
  Flutter: SiFlutter,
  MQTT: SiMqtt,

  // Security
  "Penetration Testing": FaLock,
  "Network Security": FaLock,
  Encryption: FaLock,

  // Blockchain
  Solidity: SiSolidity,
  "Web3.js": SiWeb3Dotjs,
  Ethereum: SiEthereum,
  "Smart Contracts": FaCode,

  // Misc
  i18n: SiI18Next,
  "Google Maps API": SiGooglemaps,
};
