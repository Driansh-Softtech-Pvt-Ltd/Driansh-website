import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * Cookie-less daily aggregates for the admin dashboard.
 * One document per (date, kind, key) with a running count:
 *  - kind "page":     key = path,            count = page views
 *  - kind "referrer": key = referring domain, count = page views
 *  - kind "visitor":  key = daily visitor hash (no personal data), count = page views
 */
export interface AnalyticsDaily extends Document {
  date: string; // YYYY-MM-DD (UTC)
  kind: "page" | "referrer" | "visitor";
  key: string;
  count: number;
}

const AnalyticsDailySchema = new Schema<AnalyticsDaily>(
  {
    date: { type: String, required: true },
    kind: { type: String, enum: ["page", "referrer", "visitor"], required: true },
    key: { type: String, required: true },
    count: { type: Number, default: 0 },
  },
  { versionKey: false }
);

AnalyticsDailySchema.index({ date: 1, kind: 1, key: 1 }, { unique: true });
AnalyticsDailySchema.index({ kind: 1, date: 1 });

const AnalyticsDailyModel: Model<AnalyticsDaily> =
  mongoose.models.AnalyticsDaily ||
  mongoose.model<AnalyticsDaily>("AnalyticsDaily", AnalyticsDailySchema, "analytics_daily");

export default AnalyticsDailyModel;
