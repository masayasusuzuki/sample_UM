interface PageHeaderProps {
  title: string;
  subTitle: string;
  description?: string;
}

export default function PageHeader({ title, subTitle, description }: PageHeaderProps) {
  return (
    <div className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline gap-4 mb-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
          <span className="text-sm text-gray-500">{subTitle}</span>
        </div>
        {description && (
          <p className="text-gray-600 max-w-2xl">{description}</p>
        )}
      </div>
    </div>
  );
}
