import './App.css'
import Card from './card'

const users = [
  {
    id: 1,
    name: 'Aarav Mehta',
    role: 'Frontend Developer',
    experience: '2 years 4 months 12 days',
    address: 'Bengaluru, Karnataka, India',
    description:
      'Specializes in React, TypeScript, and responsive UI development with a strong focus on accessibility.',
  },
  {
    id: 2,
    name: 'Sophia Carter',
    role: 'Backend Engineer',
    experience: '5 years 8 months 3 days',
    address: 'Austin, Texas, USA',
    description: 'Builds scalable REST APIs using Node.js, Express, PostgreSQL, and Docker.',
  },
  {
    id: 3,
    name: 'Liam Anderson',
    role: 'DevOps Engineer',
    experience: '4 years 2 months 18 days',
    address: 'Toronto, Ontario, Canada',
    description:
      'Experienced in Kubernetes, AWS, Terraform, CI/CD pipelines, and infrastructure automation.',
  },
  {
    id: 4,
    name: 'Priya Sharma',
    role: 'UI/UX Designer',
    experience: '3 years 11 months 9 days',
    address: 'Pune, Maharashtra, India',
    description:
      'Designs intuitive user interfaces with Figma, Adobe XD, and user-centered design principles.',
  },
  {
    id: 5,
    name: 'Noah Wilson',
    role: 'Full Stack Developer',
    experience: '6 years 1 month 21 days',
    address: 'Seattle, Washington, USA',
    description:
      'Works across React, Node.js, MongoDB, and GraphQL to deliver end-to-end web applications.',
  },
  {
    id: 6,
    name: 'Emily Johnson',
    role: 'Data Scientist',
    experience: '2 years 9 months 14 days',
    address: 'London, England, UK',
    description:
      'Develops machine learning models using Python, Pandas, Scikit-learn, and TensorFlow.',
  },
  {
    id: 7,
    name: 'Rohan Patel',
    role: 'Mobile App Developer',
    experience: '4 years 7 months 6 days',
    address: 'Ahmedabad, Gujarat, India',
    description: 'Creates cross-platform mobile applications using Flutter, Dart, and Firebase.',
  },
  {
    id: 8,
    name: 'Olivia Brown',
    role: 'Cloud Engineer',
    experience: '7 years 3 months 28 days',
    address: 'Sydney, New South Wales, Australia',
    description:
      'Designs cloud-native solutions on Azure and AWS with a focus on security and scalability.',
  },
  {
    id: 9,
    name: 'Ethan Martinez',
    role: 'QA Automation Engineer',
    experience: '3 years 5 months 17 days',
    address: 'Chicago, Illinois, USA',
    description: 'Automates testing using Selenium, Cypress, Playwright, and Jenkins.',
  },
  {
    id: 10,
    name: 'Ananya Verma',
    role: 'AI Engineer',
    experience: '1 year 10 months 25 days',
    address: 'Hyderabad, Telangana, India',
    description:
      'Develops AI-powered applications using Python, LangChain, OpenAI APIs, and vector databases.',
  },
  {
    id: 11,
    name: 'Daniel Kim',
    role: 'Cybersecurity Analyst',
    experience: '5 years 6 months 11 days',
    address: 'Seoul, South Korea',
    description:
      'Focuses on vulnerability assessments, penetration testing, SIEM, and incident response.',
  },
  {
    id: 12,
    name: 'Mia Rodriguez',
    role: 'Site Reliability Engineer',
    experience: '8 years 2 months 4 days',
    address: 'Madrid, Spain',
    description:
      'Maintains highly available distributed systems with expertise in monitoring, observability, and automation.',
  },
]

function App() {
  return (
    <div className="container">
      {users.map((user) => (
        <Card
          key={user.id}
          name={user.name}
          role={user.role}
          experience={user.experience}
          address={user.address}
          description={user.description}
        />
      ))}
    </div>
  )
}

export default App
