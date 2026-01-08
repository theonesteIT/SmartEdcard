import React, { useState } from 'react';
import { Menu, X, Search, Package, AlertCircle, Clock, Truck, TrendingUp, TrendingDown, BarChart3, Calendar, Plus, ChevronDown, Home, PackageOpen, PackageCheck, FileText, Settings, Bell, User } from 'lucide-react';

const StockManagerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [eventForm, setEventForm] = useState({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    audience: 'All',
    description: '',
    status: 'Upcoming'
  });

  const statsCards = [
    { title: 'Total Stock Items', value: '1,247', icon: Package, trend: 'up', gradient: 'from-blue-900 to-blue-700' },
    { title: 'Low Stock Alerts', value: '23', icon: AlertCircle, trend: 'down', gradient: 'from-blue-800 to-blue-600' },
    { title: 'Pending Requisitions', value: '15', icon: Clock, trend: 'neutral', gradient: 'from-blue-700 to-blue-500' },
    { title: 'Total Suppliers', value: '42', icon: Truck, trend: 'up', gradient: 'from-blue-600 to-blue-400' }
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard Overview', icon: Home, link: '#', active: true },
    { 
      id: 'stockIn', 
      label: 'Stock In', 
      icon: PackageOpen,
      submenu: [
        { label: 'New Stock In', link: '#' },
        { label: 'View All Received Items', link: '#' }
      ]
    },
    { 
      id: 'stockOut', 
      label: 'Stock Out', 
      icon: PackageCheck,
      submenu: [
        { label: 'Issue Stock', link: '#' },
        { label: 'Issued Stock History', link: '#' }
      ]
    },
    { 
      id: 'requisitions', 
      label: 'Material Requisitions', 
      icon: FileText,
      submenu: [
        { label: 'Pending Requests', link: '#' },
        { label: 'Approved Requests', link: '#' },
        { label: 'Rejected Requests', link: '#' }
      ]
    },
    { 
      id: 'suppliers', 
      label: 'Suppliers', 
      icon: Truck,
      submenu: [
        { label: 'Add Supplier', link: '#' },
        { label: 'All Suppliers List', link: '#' }
      ]
    },
    { id: 'inventory', label: 'Inventory Summary', icon: Package, link: '#' },
    { 
      id: 'reports', 
      label: 'Stock Reports', 
      icon: BarChart3,
      submenu: [
        { label: 'Daily Logs', link: '#' },
        { label: 'Monthly Overview', link: '#' },
        { label: 'Custom Reports', link: '#' }
      ]
    },
    { id: 'settings', label: 'Settings', icon: Settings, link: '#' }
  ];

  const stockInData = [1200, 1900, 1500, 2100, 1800, 2400];
  const stockOutData = [800, 1200, 1000, 1400, 1100, 1600];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const maxValue = Math.max(...stockInData, ...stockOutData);

  const categoryData = [
    { label: 'Textbooks', value: 35 },
    { label: 'Lab Equipment', value: 20 },
    { label: 'Office Supplies', value: 25 },
    { label: 'Sports Equipment', value: 15 },
    { label: 'Art Supplies', value: 5 }
  ];

  const [events, setEvents] = useState([
    { id: 1, title: 'Science Fair', date: '2026-01-15', status: 'Upcoming' },
    { id: 2, title: 'Sports Day', date: '2026-01-20', status: 'Upcoming' },
    { id: 3, title: 'Parent-Teacher Meeting', date: '2026-01-25', status: 'Ongoing' }
  ]);

  const toggleSubmenu = (id) => {
    setActiveSubmenu(activeSubmenu === id ? null : id);
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: events.length + 1,
      title: eventForm.title,
      date: eventForm.date,
      status: eventForm.status
    };
    setEvents([...events, newEvent]);
    setShowEventModal(false);
    setEventForm({
      title: '',
      date: '',
      startTime: '',
      endTime: '',
      location: '',
      audience: 'All',
      description: '',
      status: 'Upcoming'
    });
  };

  const EventModal = () => (
    <div className={`fixed inset-0 z-50 ${showEventModal ? 'flex' : 'hidden'} items-center justify-center bg-blue-950 bg-opacity-80 p-4 backdrop-blur-sm`}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-t-2xl">
          <h3 className="text-xl font-bold">Add School Event</h3>
          <button onClick={() => setShowEventModal(false)} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-blue-900 mb-2">Title <span className="text-blue-600">*</span></label>
              <input 
                type="text" 
                value={eventForm.title}
                onChange={(e) => setEventForm({...eventForm, title: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-900 outline-none transition"
                required 
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-blue-900 mb-2">Date <span className="text-blue-600">*</span></label>
              <input 
                type="date" 
                value={eventForm.date}
                onChange={(e) => setEventForm({...eventForm, date: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-900 outline-none transition"
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-900 mb-2">Start Time</label>
              <input 
                type="time" 
                value={eventForm.startTime}
                onChange={(e) => setEventForm({...eventForm, startTime: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-900 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-900 mb-2">End Time</label>
              <input 
                type="time" 
                value={eventForm.endTime}
                onChange={(e) => setEventForm({...eventForm, endTime: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-900 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-900 mb-2">Location</label>
              <input 
                type="text" 
                value={eventForm.location}
                onChange={(e) => setEventForm({...eventForm, location: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-900 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-900 mb-2">Target Audience</label>
              <select 
                value={eventForm.audience}
                onChange={(e) => setEventForm({...eventForm, audience: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-900 outline-none transition"
              >
                <option>All</option>
                <option>Students</option>
                <option>Teachers</option>
                <option>Parents</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-blue-900 mb-2">Description</label>
              <textarea 
                rows="3" 
                value={eventForm.description}
                onChange={(e) => setEventForm({...eventForm, description: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-900 outline-none transition"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-900 mb-2">Status</label>
              <select 
                value={eventForm.status}
                onChange={(e) => setEventForm({...eventForm, status: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-900 outline-none transition"
              >
                <option>Upcoming</option>
                <option>Ongoing</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button 
              onClick={handleEventSubmit}
              className="px-8 py-3 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg hover:from-blue-800 hover:to-blue-700 transition font-semibold shadow-lg"
            >
              Save Event
            </button>
            <button 
              onClick={() => setShowEventModal(false)}
              className="px-8 py-3 bg-white text-blue-900 border-2 border-blue-900 rounded-lg hover:bg-blue-50 transition font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 w-72 h-screen transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 shadow-2xl`}>
        <div className="flex items-center justify-center h-20 border-b border-white border-opacity-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white bg-opacity-10 rounded-xl">
              <Package className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-white block">Stock Manager</span>
              <span className="text-xs text-white text-opacity-70">Inventory System</span>
            </div>
          </div>
        </div>
        <nav className="h-[calc(100vh-5rem)] overflow-y-auto px-4 py-6 space-y-1">
          {menuItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => item.submenu && toggleSubmenu(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all ${
                  item.active
                    ? 'bg-white text-blue-800 font-semibold shadow-lg' 
                    : 'text-white hover:bg-white hover:text-blue-800  hover:bg-opacity-10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </div>
                {item.submenu && <ChevronDown className={`w-4 h-4 transition-transform ${activeSubmenu === item.id ? 'rotate-180' : ''}`} />}
              </button>
              {item.submenu && activeSubmenu === item.id && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.submenu.map((subitem, idx) => (
                    <a key={idx} href={subitem.link} className="block px-4 py-2.5 text-sm text-white text-opacity-90 hover:bg-white hover:text-blue-800 hover:bg-opacity-10 rounded-lg transition">
                      {subitem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-blue-950 bg-opacity-50 lg:hidden backdrop-blur-sm" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Main Content */}
      <div className="lg:ml-72">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center justify-between px-6 lg:px-8 h-20">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2 hover:bg-blue-50 rounded-lg transition">
                <Menu className="w-6 h-6 text-blue-900" />
              </button>
              <div className="hidden md:flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-100 border border-gray-200">
                <Search className="w-5 h-5 text-blue-900" />
                <input type="text" placeholder="Search anything..." className="bg-transparent outline-none w-64 text-blue-900 placeholder-gray-400" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-blue-50 rounded-lg transition">
                <Bell className="w-6 h-6 text-blue-900" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <img src="https://ui-avatars.com/api/?name=Stock+Manager&background=1e3a8a&color=fff" alt="Profile" className="w-11 h-11 rounded-full ring-2 ring-blue-900" />
                <div className="hidden md:block">
                  <span className="block font-semibold text-blue-900 text-sm">Stock Manager</span>
                  <span className="text-xs text-gray-500">Administrator</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-2">Dashboard Overview</h1>
            <p className="text-gray-600">Monitor your inventory performance and key metrics</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((stat, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${stat.gradient} rounded-2xl shadow-xl p-6 text-white hover:scale-105 transition-transform`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
                    <stat.icon className="w-7 h-7" />
                  </div>
                  {stat.trend === 'up' ? (
                    <TrendingUp className="w-6 h-6 text-white" />
                  ) : stat.trend === 'down' ? (
                    <TrendingDown className="w-6 h-6 text-white" />
                  ) : (
                    <Clock className="w-6 h-6 text-white" />
                  )}
                </div>
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-sm text-white text-opacity-90">{stat.title}</p>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Bar Chart */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-blue-950">Monthly Stock In vs Out</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
                    <span className="text-sm text-gray-600">Stock In</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Stock Out</span>
                  </div>
                </div>
              </div>
              <div className="space-y-5">
                {months.map((month, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="font-semibold text-blue-950">{month}</span>
                      <div className="flex gap-5 text-xs">
                        <span className="text-blue-900 font-medium">In: {stockInData[idx]}</span>
                        <span className="text-blue-600 font-medium">Out: {stockOutData[idx]}</span>
                      </div>
                    </div>
                    <div className="flex gap-1 h-10 bg-gray-100 rounded-lg overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded transition-all" style={{width: `${(stockInData[idx] / maxValue) * 100}%`}}></div>
                      <div className="bg-gradient-to-r from-blue-500 to-blue-400 rounded transition-all" style={{width: `${(stockOutData[idx] / maxValue) * 100}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category Distribution */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-blue-950 mb-6">Category Distribution</h3>
              <div className="space-y-4">
                {categoryData.map((cat, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="font-medium text-blue-950">{cat.label}</span>
                      <span className="font-bold text-blue-900">{cat.value}%</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-900 to-blue-700 rounded-full transition-all duration-700" 
                        style={{width: `${cat.value}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-blue-950">School Events Calendar</h3>
              <button onClick={() => setShowEventModal(true)} className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl hover:from-blue-800 hover:to-blue-700 transition font-semibold shadow-lg">
                <Plus className="w-5 h-5" />
                <span>Add Event</span>
              </button>
            </div>
            <div className="space-y-3">
              {events.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-blue-50 to-white hover:from-blue-100 hover:to-blue-50 transition-all border border-blue-100">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-950">{event.title}</h4>
                      <p className="text-sm text-gray-600">{event.date}</p>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-lg text-xs font-semibold ${
                    event.status === 'Upcoming' 
                      ? 'bg-blue-900 text-white' 
                      : 'bg-white text-blue-900 border-2 border-blue-900'
                  }`}>
                    {event.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-12 py-6 text-center text-sm text-gray-500 border-t border-gray-200">
          <p>© {new Date().getFullYear()} Smart Education System. Made with <span className="text-blue-900">❤️</span> by IT Team</p>
        </footer>
      </div>

      <EventModal />
    </div>
  );
};

export default StockManagerDashboard;