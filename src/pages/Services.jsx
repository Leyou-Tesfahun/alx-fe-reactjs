function Services() {
  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'Cloud Solutions'
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ color: '#333', borderBottom: '2px solid #333' }}>Our Services</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {services.map((service, index) => (
          <li key={index} style={{ padding: '0.5rem 0', fontSize: '1.1rem' }}>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
