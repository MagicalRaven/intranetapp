// Este es un archivo de ejemplo que luego puedes adaptar cuando integres Firebase
export const fetchOrders = async (clienteId) => {
    // Aquí harías la llamada a Firebase para obtener los pedidos
    // Simulación de datos por ahora
    return mockOrders.filter(order => order.clienteId === clienteId);
  };
  
  export const fetchSupportTickets = async (clienteId) => {
    // Aquí harías la llamada a Firebase para obtener los tickets de soporte
    // Simulación de datos por ahora
    return mockSupportTickets.filter(ticket => ticket.clienteId === clienteId);
  };
  