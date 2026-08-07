import { useEffect, useState } from 'react'

const users = [
  {
    id: 1,
    name: 'Aarav Patel',
    email: 'aarav.patel@example.com',
    role: 'Frontend Developer',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    role: 'UI/UX Designer',
  },
  {
    id: 3,
    name: 'Rahul Mehta',
    email: 'rahul.mehta@example.com',
    role: 'Backend Developer',
  },
  {
    id: 4,
    name: 'Neha Shah',
    email: 'neha.shah@example.com',
    role: 'Product Manager',
  },
  {
    id: 5,
    name: 'Arjun Desai',
    email: 'arjun.desai@example.com',
    role: 'Full Stack Developer',
  },
  {
    id: 6,
    name: 'Riya Patel',
    email: 'riya.patel@example.com',
    role: 'Frontend Developer',
  },
  {
    id: 7,
    name: 'Karan Joshi',
    email: 'karan.joshi@example.com',
    role: 'DevOps Engineer',
  },
  {
    id: 8,
    name: 'Ananya Mehta',
    email: 'ananya.mehta@example.com',
    role: 'Software Engineer',
  },
  {
    id: 9,
    name: 'Vivek Shah',
    email: 'vivek.shah@example.com',
    role: 'QA Engineer',
  },
  {
    id: 10,
    name: 'Ishita Desai',
    email: 'ishita.desai@example.com',
    role: 'Data Analyst',
  },
  {
    id: 11,
    name: 'Devansh Kapoor',
    email: 'devansh.kapoor@example.com',
    role: 'React Developer',
  },
  {
    id: 12,
    name: 'Meera Iyer',
    email: 'meera.iyer@example.com',
    role: 'Product Designer',
  },
  {
    id: 13,
    name: 'Yash Thakkar',
    email: 'yash.thakkar@example.com',
    role: 'Node.js Developer',
  },
  {
    id: 14,
    name: 'Simran Kaur',
    email: 'simran.kaur@example.com',
    role: 'Frontend Engineer',
  },
  {
    id: 15,
    name: 'Aditya Nair',
    email: 'aditya.nair@example.com',
    role: 'Full Stack Developer',
  },
  {
    id: 16,
    name: 'Kavya Joshi',
    email: 'kavya.joshi@example.com',
    role: 'UI Developer',
  },
  {
    id: 17,
    name: 'Manav Trivedi',
    email: 'manav.trivedi@example.com',
    role: 'Software Engineer',
  },
  {
    id: 18,
    name: 'Aisha Khan',
    email: 'aisha.khan@example.com',
    role: 'UX Researcher',
  },
  {
    id: 19,
    name: 'Dhruv Bhatt',
    email: 'dhruv.bhatt@example.com',
    role: 'Backend Engineer',
  },
  {
    id: 20,
    name: 'Tanvi Shah',
    email: 'tanvi.shah@example.com',
    role: 'QA Engineer',
  },
]

const LiveSearch = () => {
  const [name, setName] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(users)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filteredData = users.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase())
      )
      setFilteredUsers(filteredData)
      console.log('Filtered Users:', filteredData)
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [name])

  return (
    <div className="card-container">
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name..."
      />
      <div className="cards-section">
        {filteredUsers.map((user) => {
          return (
            <div className="card" key={user.id}>
              <br />
              <h2 className="name">{user.name}</h2>
              <p className="email">Email: {user.email}</p>
              <p className="role">Role: {user.role}</p>
              <br />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LiveSearch
