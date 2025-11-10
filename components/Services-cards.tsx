"use client";
 
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}
 
interface FeatureCardsProps {
  title?: string;
  subtitle?: string;
  data: Feature[];
}
 
export default function ServicesCards({
  title,
  subtitle,
  data,
}: FeatureCardsProps) {
  return (
    <section className=" px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          {title}
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
          {subtitle}
        </p>
 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-blue-200 group"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}