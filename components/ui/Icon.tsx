import type { IconType } from "react-icons";
import {
  FaCoins,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaQuoteLeft,
  FaRegCircle,
  FaShieldAlt,
  FaStar,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";
import {
  LuArrowLeft,
  LuArrowRight,
  LuAward,
  LuBrickWall,
  LuBuilding2,
  LuCalendar,
  LuCheck,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuClipboardList,
  LuClock,
  LuConstruction,
  LuDraftingCompass,
  LuFactory,
  LuFileText,
  LuHardHat,
  LuHeadset,
  LuHouse,
  LuLeaf,
  LuMail,
  LuMenu,
  LuMoveLeft,
  LuMoveRight,
  LuPhone,
  LuPresentation,
  LuSettings,
  LuShieldCheck,
  LuSofa,
  LuUsers,
  LuWrench,
  LuX,
} from "react-icons/lu";

// Every icon the site can use, by the name templates.json stores. A new icon is added here once.
const icons: Record<string, IconType> = {
  FaCoins,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaQuoteLeft,
  FaShieldAlt,
  FaStar,
  FaUsers,
  FaYoutube,
  LuArrowLeft,
  LuArrowRight,
  LuAward,
  LuBrickWall,
  LuBuilding2,
  LuCalendar,
  LuCheck,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuClipboardList,
  LuClock,
  LuConstruction,
  LuDraftingCompass,
  LuFactory,
  LuFileText,
  LuHardHat,
  LuHeadset,
  LuHouse,
  LuLeaf,
  LuMail,
  LuMenu,
  LuMoveLeft,
  LuMoveRight,
  LuPhone,
  LuPresentation,
  LuSettings,
  LuShieldCheck,
  LuSofa,
  LuUsers,
  LuWrench,
  LuX,
};

type Props = {
  name: string;
  className?: string;
  /** line thickness of the outline (Lu) icons */
  strokeWidth?: number;
};

export const Icon = ({ name, className = "", strokeWidth }: Props) => {
  const Glyph = icons[name];
  if (!Glyph) {
    if (process.env.NODE_ENV !== "production") console.warn(`Icon "${name}" is not in components/ui/Icon.tsx`);
    return <FaRegCircle aria-hidden="true" className={className} />;
  }
  // only override the line thickness when one is given, so each icon set keeps its own default
  return <Glyph aria-hidden="true" className={className} {...(strokeWidth === undefined ? {} : { strokeWidth })} />;
};
