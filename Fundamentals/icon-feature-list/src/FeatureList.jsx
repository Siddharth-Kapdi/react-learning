import FeatureItem from './FeatureItem'

const features = [
  {
    id: 1,
    icon: '⚡',
    label: 'Fast Performance',
    description: 'Lightning-fast loading and smooth interactions.',
  },
  {
    id: 2,
    icon: '🔒',
    label: 'Secure',
    description: 'Your data is protected with modern security practices.',
  },
  {
    id: 3,
    icon: '📊',
    label: 'Analytics',
    description: 'Track your progress with simple and useful analytics.',
  },
  {
    id: 4,
    icon: '🎨',
    label: 'Customizable',
    description: 'Customize your experience to match your needs.',
  },
  {
    id: 5,
    icon: '☁️',
    label: 'Cloud Sync',
    description: 'Access your data from anywhere, anytime.',
  },
  {
    id: 6,
    icon: '💬',
    label: '24/7 Support',
    description: 'Get help whenever you need it from our support team.',
  },
]

const FeatureList = () => {
  return (
    <div className="feature-list">
      {features.map((feature) => (
        <FeatureItem key={feature.id} feature={feature} />
      ))}
    </div>
  )
}

export default FeatureList
