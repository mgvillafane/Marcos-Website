import RatImg from '../public/models/nudgeURway-rat.jpg'
import HelmetImg from '../public/models/nudgeURway-helmet.jpg'

const nudgeurway = {
  title: 'NudgeURway',
  desc: 'Built at Cal Hacks 13.0: a connected cycling helmet with hands-free navigation, directional haptics, and turn and brake lights.',
  tech: 'React Native, TypeScript, ESP32-S3, C++, Bluetooth LE, Convex',
  image: RatImg,
  imageAlt: 'A black-and-white rat riding on a cycling helmet, the NudgeURway mascot',
  imageFit: 'contain',
  prototypeImage: HelmetImg,
  prototypeImageAlt: 'The NudgeURway helmet prototype with LED strips, wiring, and mounted electronics',
  categories: ['Automation', 'Electronics', 'Signal Processing'],
  github: 'https://github.com/mgvillafane/Calhacks-13.0-Smart-Helmet',
  devpost: 'https://devpost.com/software/waymind',
  youtube: 'https://www.youtube.com/shorts/xx7yp2TTfwE',
  team: [
    { name: 'Marcos Gómez Villafañe', url: 'https://github.com/mgvillafane' },
    { name: 'Pablo Davila', url: 'https://github.com/Pablo-Davila' },
    { name: 'Tyler Chen', url: 'https://github.com/Tylerch18' },
    { name: 'Marta David Nunes', url: 'https://devpost.com/marta_nunes' },
  ],
  overview: 'NudgeURway connects a cycling helmet to a mobile navigation app. The phone plans the route and sends turn cues over Bluetooth LE; three vibration motors communicate left, straight, and right without requiring the rider to look at a screen. Built as a team project at Cal Hacks 13.0, the prototype brings together embedded electronics, mobile software, and motion sensing.',
  features: [
    'GPS navigation with directional vibration cues',
    'Bluetooth LE communication between the phone and helmet',
    'LED turn indicators and motion-based brake lighting',
    'Voice commands for hands-free interaction',
    'Ride telemetry stored with Convex',
  ],
  outcomes: [
    'Built an integrated mobile app and ESP32-S3 helmet prototype at Cal Hacks 13.0',
    'Connected route guidance to haptic feedback and LED turn signals',
    'Implemented IMU-based motion detection for brake lighting',
  ],
}

export default nudgeurway
