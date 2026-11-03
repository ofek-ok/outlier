export interface SiteConfig {
  brandName: string;
  brandTaglineEn: string;
  brandTaglineHe: string;
  businessCategoryEn: string;
  businessCategoryHe: string;
  contactEmail: string;
  linkedInUrl: string;
  locationEn: string;
  locationHe: string;
  meta: {
    titleEn: string;
    titleHe: string;
    descriptionEn: string;
    descriptionHe: string;
  };
}

export const siteConfig: SiteConfig = {
  brandName: "OUTLIER",
  brandTaglineEn: "WE CREATE WAYS IN.",
  brandTaglineHe: "אנחנו יוצרים דרכים פנימה.",
  businessCategoryEn: "Strategic Market Development & Creative Advisory",
  businessCategoryHe: "פיתוח שווקים אסטרטגי וייעוץ יצירתי",
  contactEmail: "advisory@outlier-advisory.com",
  linkedInUrl: "https://www.linkedin.com/company/outlier-advisory",
  locationEn: "Tel Aviv · International Reach",
  locationHe: "תל אביב · פעילות בינלאומית",
  meta: {
    titleEn: "OUTLIER | Strategic Market Development & Creative Advisory",
    titleHe: "OUTLIER | פיתוח שווקים אסטרטגי וייעוץ יצירתי",
    descriptionEn: "We Create Ways In. Strategic thinking and creative solutions to reach new markets, customers, and opportunities.",
    descriptionHe: "אנחנו יוצרים דרכים פנימה. חשיבה אסטרטגית ופתרונות יצירתיים לחדירה לשווקים, ללקוחות ולהזדמנויות חדשות.",
  },
};
