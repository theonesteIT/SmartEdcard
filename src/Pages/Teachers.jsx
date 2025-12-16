import React, { useState } from 'react';
import { Calendar, Users, CheckCircle, XCircle, Clock, BookOpen, Award, Bell, Search, Menu, X, ChevronLeft, ChevronRight, LogIn, LogOut, FileText, Package, Beaker, Download, Moon, Sun, AlertCircle, TrendingUp, BarChart3, PieChart, Settings, Edit } from 'lucide-react';

// Sidebar Component
const Sidebar = ({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BookOpen },
    { id: 'attendance', label: 'My Attendance', icon: Clock },
    { id: 'leave', label: 'Leave Requests', icon: FileText },
    { id: 'resources', label: 'Resource Requests', icon: Package },
    { id: 'lab', label: 'Lab Booking', icon: Beaker },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 }
  ];

  return (
    <>
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      
      <div className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-indigo-900 to-indigo-800 text-white transform transition-transform duration-300 ease-in-out ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-indigo-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">SmartEdcard</span>
            </div>
            <button 
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden text-white hover:bg-indigo-700 p-2 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-white text-indigo-900 shadow-lg'
                      : 'text-indigo-100 hover:bg-indigo-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-indigo-700">
            <div className="flex items-center space-x-3 p-3 bg-indigo-700 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
                JD
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">John Doe</p>
                <p className="text-xs text-indigo-300 truncate">Math Teacher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-600 text-sm">
              © 2024 SmartEdcard Education System. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition">Terms of Service</a>
            <a href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Dashboard Component
const Dashboard = ({ darkMode }) => {
  const [tapStatus, setTapStatus] = useState({ tapIn: null, tapOut: null });
  
  const handleTapIn = () => {
    setTapStatus({ ...tapStatus, tapIn: new Date().toLocaleTimeString() });
  };
  
  const handleTapOut = () => {
    setTapStatus({ ...tapStatus, tapOut: new Date().toLocaleTimeString() });
  };

  const todayStatus = tapStatus.tapIn && !tapStatus.tapOut ? 'Present' : 
                      tapStatus.tapIn && tapStatus.tapOut ? 'Completed' : 'Not Tapped In';

  const stats = [
    { label: 'Today Status', value: todayStatus, icon: CheckCircle, color: 'from-green-500 to-green-600' },
    { label: 'Hours Today', value: '7.5h', icon: Clock, color: 'from-blue-500 to-blue-600' },
    { label: 'This Week', value: '38h', icon: TrendingUp, color: 'from-purple-500 to-purple-600' },
    { label: 'Leaves Left', value: '12', icon: Calendar, color: 'from-orange-500 to-orange-600' }
  ];

  const notifications = [
    { type: 'warning', message: 'Remember to tap out before leaving', time: '5 mins ago' },
    { type: 'success', message: 'Leave request approved for Dec 20-22', time: '2 hours ago' },
    { type: 'info', message: 'Lab booking confirmed for Computer Lab A', time: '1 day ago' },
    { type: 'alert', message: 'Stock request pending approval', time: '2 days ago' }
  ];

  const quickActions = [
    { label: 'Tap In', icon: LogIn, color: 'bg-green-500 hover:bg-green-600', action: handleTapIn, disabled: !!tapStatus.tapIn },
    { label: 'Tap Out', icon: LogOut, color: 'bg-red-500 hover:bg-red-600', action: handleTapOut, disabled: !tapStatus.tapIn || !!tapStatus.tapOut },
    { label: 'Request Leave', icon: FileText, color: 'bg-blue-500 hover:bg-blue-600' },
    { label: 'Book Lab', icon: Beaker, color: 'bg-purple-500 hover:bg-purple-600' }
  ];

  return (
    <div className="space-y-6">
      {/* RFID Tap Status */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6 border-2 ${tapStatus.tapIn ? 'border-green-500' : 'border-orange-500'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>RFID Attendance Today</h3>
          <div className={`px-4 py-2 rounded-full font-semibold ${
            todayStatus === 'Present' ? 'bg-green-100 text-green-700' :
            todayStatus === 'Completed' ? 'bg-blue-100 text-blue-700' :
            'bg-orange-100 text-orange-700'
          }`}>
            {todayStatus}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>Morning Tap-In</p>
            <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {tapStatus.tapIn || '--:--:--'}
            </p>
          </div>
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>Evening Tap-Out</p>
            <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {tapStatus.tapOut || '--:--:--'}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action, idx) => {
          const Icon = action.icon;
          return (
            <button
              key={idx}
              onClick={action.action}
              disabled={action.disabled}
              className={`${action.color} text-white p-6 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
            >
              <Icon className="w-8 h-8 mx-auto mb-2" />
              <span className="text-sm font-semibold">{action.label}</span>
            </button>
          );
        })}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg overflow-hidden`}>
              <div className={`bg-gradient-to-r ${stat.color} p-6`}>
                <Icon className="w-8 h-8 text-white opacity-80" />
              </div>
              <div className="p-6">
                <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</p>
                <p className={`text-3xl font-bold mt-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Notifications */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Notifications & Alerts</h3>
          <Bell className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
        </div>
        <div className="space-y-3">
          {notifications.map((notif, idx) => (
            <div key={idx} className={`p-4 rounded-xl ${
              darkMode ? 'bg-gray-700' : 
              notif.type === 'warning' ? 'bg-orange-50' :
              notif.type === 'success' ? 'bg-green-50' :
              notif.type === 'alert' ? 'bg-red-50' : 'bg-blue-50'
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <AlertCircle className={`w-5 h-5 mt-0.5 ${
                    notif.type === 'warning' ? 'text-orange-500' :
                    notif.type === 'success' ? 'text-green-500' :
                    notif.type === 'alert' ? 'text-red-500' : 'text-blue-500'
                  }`} />
                  <div>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{notif.message}</p>
                    <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{notif.time}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// My Attendance Component
const MyAttendance = ({ darkMode }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAdjustModal, setShowAdjustModal] = useState(false);

  const attendanceHistory = [
    { date: 'Dec 15, 2024', tapIn: '07:45 AM', tapOut: '04:30 PM', hours: '8.75h', status: 'Present' },
    { date: 'Dec 14, 2024', tapIn: '08:15 AM', tapOut: '04:45 PM', hours: '8.5h', status: 'Late' },
    { date: 'Dec 13, 2024', tapIn: '07:30 AM', tapOut: '03:30 PM', hours: '8h', status: 'Early Leave' },
    { date: 'Dec 12, 2024', tapIn: '07:50 AM', tapOut: '04:40 PM', hours: '8.83h', status: 'Present' },
    { date: 'Dec 11, 2024', tapIn: '--', tapOut: '--', hours: '0h', status: 'Absent' }
  ];

  const handleViewDetails = (record) => {
    setSelectedDate(record);
    setShowModal(true);
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6`}>
          <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>This Week</h4>
          <p className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>38 hours</p>
          <p className="text-green-500 text-sm mt-2">↑ 5% from last week</p>
        </div>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6`}>
          <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>This Month</h4>
          <p className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>156 hours</p>
          <p className="text-blue-500 text-sm mt-2">22 days present</p>
        </div>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6`}>
          <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Late Arrivals</h4>
          <p className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>2 times</p>
          <p className="text-orange-500 text-sm mt-2">This month</p>
        </div>
      </div>

      {/* Attendance History */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Attendance History</h3>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              <Download className="w-4 h-4 inline mr-2" />
              Export
            </button>
            <button 
              onClick={() => setShowAdjustModal(true)}
              className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
            >
              <Edit className="w-4 h-4 inline mr-2" />
              Request Adjustment
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <th className={`px-6 py-3 text-left text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Date</th>
                <th className={`px-6 py-3 text-left text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Tap In</th>
                <th className={`px-6 py-3 text-left text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Tap Out</th>
                <th className={`px-6 py-3 text-left text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Hours</th>
                <th className={`px-6 py-3 text-left text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Status</th>
                <th className={`px-6 py-3 text-left text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {attendanceHistory.map((record, idx) => (
                <tr key={idx} className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}>
                  <td className={`px-6 py-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{record.date}</td>
                  <td className={`px-6 py-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{record.tapIn}</td>
                  <td className={`px-6 py-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{record.tapOut}</td>
                  <td className={`px-6 py-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{record.hours}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      record.status === 'Present' ? 'bg-green-100 text-green-700' :
                      record.status === 'Late' ? 'bg-orange-100 text-orange-700' :
                      record.status === 'Early Leave' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => handleViewDetails(record)}
                      className="text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {showModal && selectedDate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-md w-full p-6`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Attendance Details</h3>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3">
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Date</p>
                <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{selectedDate.date}</p>
              </div>
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Tap In</p>
                <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{selectedDate.tapIn}</p>
              </div>
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Tap Out</p>
                <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{selectedDate.tapOut}</p>
              </div>
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Hours</p>
                <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{selectedDate.hours}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Adjustment Modal */}
      {showAdjustModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-md w-full p-6`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Request Adjustment</h3>
              <button onClick={() => setShowAdjustModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Date</label>
                <input type="date" className={`w-full px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Reason</label>
                <textarea className={`w-full px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} rows="3" placeholder="Explain the adjustment needed..."></textarea>
              </div>
              <button className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Leave Requests Component
const LeaveRequests = ({ darkMode }) => {
  const [showModal, setShowModal] = useState(false);

  const leaveHistory = [
    { type: 'Sick Leave', from: 'Dec 20', to: 'Dec 22', days: 3, status: 'Approved', color: 'green' },
    { type: 'Personal Leave', from: 'Dec 10', to: 'Dec 11', days: 2, status: 'Approved', color: 'green' },
    { type: 'Training', from: 'Jan 5', to: 'Jan 7', days: 3, status: 'Pending', color: 'orange' },
    { type: 'Official Duty', from: 'Nov 28', to: 'Nov 28', days: 1, status: 'Approved', color: 'green' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Leave Management</h2>
        <button 
          onClick={() => setShowModal(true)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Request New Leave
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6`}>
          <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Leave Days</h4>
          <p className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>20</p>
        </div>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6`}>
          <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Used</h4>
          <p className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>8</p>
        </div>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6`}>
          <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Remaining</h4>
          <p className={`text-3xl font-bold text-green-500`}>12</p>
        </div>
      </div>

      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6`}>
        <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Leave History</h3>
        <div className="space-y-4">
          {leaveHistory.map((leave, idx) => (
            <div key={idx} className={`p-4 rounded-xl border-l-4 ${
              leave.color === 'green' ? 'border-green-500 bg-green-50' :
              leave.color === 'orange' ? 'border-orange-500 bg-orange-50' :
              'border-red-500 bg-red-50'
            } ${darkMode && 'bg-opacity-10'}`}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <FileText className={`w-5 h-5 ${leave.color === 'green' ? 'text-green-600' : leave.color === 'orange' ? 'text-orange-600' : 'text-red-600'}`} />
                    <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{leave.type}</span>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{leave.from} - {leave.to} ({leave.days} days)</p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  leave.status === 'Approved' ? 'bg-green-100 text-green-700' :
                  leave.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {leave.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-md w-full p-6`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Request Leave</h3>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Leave Type</label>
                <select className={`w-full px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}>
                  <option>Sick Leave</option>
                  <option>Personal Leave</option>
                  <option>Official Duty</option>
                  <option>Training</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>From</label>
                  <input type="date" className={`w-full px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>To</label>
                  <input type="date" className={`w-full px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
                </div>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Reason</label>
                <textarea className={`w-full px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} rows="3" placeholder="Explain your reason..."></textarea>
              </div>
              <button className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Resource Requests Component
const ResourceRequests = ({ darkMode }) => {
  const [showModal, setShowModal] = useState(false);

  const resources = [
    { item: 'Whiteboard Markers', quantity: 20, status: 'Delivered', date: 'Dec 14', color: 'green' },
    { item: 'Math Textbooks', quantity: 30, status: 'Pending', date: 'Dec 15', color: 'orange' },
    { item: 'Lab Equipment', quantity: 5, status: 'Approved', date: 'Dec 13', color: 'blue' },
    { item: 'Stationery Set', quantity: 15, status: 'Delivered', date: 'Dec 10', color: 'green' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Resource Management</h2>
        <button 
          onClick={() => setShowModal(true)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          New Request
        </button>
      </div>

      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6`}>
        <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Request History</h3>
        <div className="space-y-4">
          {resources.map((resource, idx) => (
            <div key={idx} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    resource.color === 'green' ? 'bg-green-100' :
                    resource.color === 'orange' ? 'bg-orange-100' :
                    resource.color === 'blue' ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <Package className={`w-6 h-6 ${
                      resource.color === 'green' ? 'text-green-600' :
                      resource.color === 'orange' ? 'text-orange-600' :
                      resource.color === 'blue' ? 'text-blue-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <div>
                    <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{resource.item}</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Quantity: {resource.quantity} | {resource.date}</p>
                  </div>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  resource.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                  resource.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                  resource.status === 'Approved' ? 'bg-blue-100 text-blue-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {resource.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-md w-full p-6`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Request Resources</h3>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Item Name</label>
                <input type="text" className={`w-full px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} placeholder="e.g., Whiteboard Markers" />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Quantity</label>
                <input type="number" className={`w-full px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} placeholder="Enter quantity" />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Category</label>
                <select className={`w-full px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}>
                  <option>Stationery</option>
                  <option>Books</option>
                  <option>Lab Equipment</option>
                  <option>Teaching Materials</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Purpose</label>
                <textarea className={`w-full px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} rows="3" placeholder="Explain the purpose..."></textarea>
              </div>
              <button className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Lab Booking Component
const LabBooking = ({ darkMode }) => {
  const [showModal, setShowModal] = useState(false);

  const bookings = [
    { lab: 'Computer Lab A', date: 'Dec 18', time: '09:00 - 11:00', status: 'Confirmed', color: 'green' },
    { lab: 'Science Lab', date: 'Dec 20', time: '14:00 - 16:00', status: 'Pending', color: 'orange' },
    { lab: 'Workshop B', date: 'Dec 22', time: '10:00 - 12:00', status: 'Confirmed', color: 'green' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Lab & Workshop Booking</h2>
        <button 
          onClick={() => setShowModal(true)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Book New Lab
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6`}>
          <Beaker className="w-8 h-8 text-blue-500 mb-3" />
          <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Available Labs</h4>
          <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>8</p>
        </div>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6`}>
          <Calendar className="w-8 h-8 text-green-500 mb-3" />
          <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Your Bookings</h4>
          <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>3</p>
        </div>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6`}>
          <Clock className="w-8 h-8 text-orange-500 mb-3" />
          <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Pending</h4>
          <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>1</p>
        </div>
      </div>

      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6`}>
        <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Upcoming Bookings</h3>
        <div className="space-y-4">
          {bookings.map((booking, idx) => (
            <div key={idx} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    booking.color === 'green' ? 'bg-green-100' : 'bg-orange-100'
                  }`}>
                    <Beaker className={`w-6 h-6 ${
                      booking.color === 'green' ? 'text-green-600' : 'text-orange-600'
                    }`} />
                  </div>
                  <div>
                    <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{booking.lab}</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{booking.date} | {booking.time}</p>
                  </div>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                }`}>
                  {booking.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-md w-full p-6`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Book Lab/Workshop</h3>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Lab/Workshop</label>
                <select className={`w-full px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}>
                  <option>Computer Lab A</option>
                  <option>Computer Lab B</option>
                  <option>Science Lab</option>
                  <option>Physics Lab</option>
                  <option>Workshop A</option>
                  <option>Workshop B</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Date</label>
                <input type="date" className={`w-full px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Start Time</label>
                  <input type="time" className={`w-full px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>End Time</label>
                  <input type="time" className={`w-full px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
                </div>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Purpose</label>
                <textarea className={`w-full px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} rows="3" placeholder="Describe the purpose..."></textarea>
              </div>
              <button className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700">
                Submit Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Analytics Component
const Analytics = ({ darkMode }) => {
  return (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Analytics & Reports</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6`}>
          <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Weekly Attendance Trend</h3>
          <div className="h-64 flex items-end justify-between space-x-2">
            {[85, 92, 88, 95, 90].map((height, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center">
                <div className={`w-full bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t-lg transition-all duration-500`} style={{height: `${height}%`}}></div>
                <span className={`text-xs mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][idx]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6`}>
          <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Leave Types Distribution</h3>
          <div className="h-64 flex items-center justify-center">
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="20" strokeDasharray="75.4 251.2" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" strokeWidth="20" strokeDasharray="50.3 251.2" strokeDashoffset="-75.4" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="20" strokeDasharray="37.7 251.2" strokeDashoffset="-125.7" />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="text-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-1"></div>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Sick</p>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full mx-auto mb-1"></div>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Personal</p>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-1"></div>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Official</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Export Reports</h3>
          <Download className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition text-left">
            <p className="font-semibold text-indigo-900">Monthly Report</p>
            <p className="text-sm text-indigo-600 mt-1">Export to PDF</p>
          </button>
          <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition text-left">
            <p className="font-semibold text-green-900">Attendance History</p>
            <p className="text-sm text-green-600 mt-1">Export to Excel</p>
          </button>
          <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition text-left">
            <p className="font-semibold text-purple-900">Leave Summary</p>
            <p className="text-sm text-purple-600 mt-1">Export to PDF</p>
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Teacher Dashboard
const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm border-b`}>
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsMobileOpen(true)}
                className={`lg:hidden p-2 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'} rounded-lg`}
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Teacher Portal</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-500' : 'text-gray-400'} w-5 h-5`} />
                <input
                  type="text"
                  placeholder="Search..."
                  className={`pl-10 pr-4 py-2 border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                />
              </div>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'} rounded-lg`}
              >
                {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
              <button className={`relative p-2 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'} rounded-lg`}>
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'dashboard' && <Dashboard darkMode={darkMode} />}
            {activeTab === 'attendance' && <MyAttendance darkMode={darkMode} />}
            {activeTab === 'leave' && <LeaveRequests darkMode={darkMode} />}
            {activeTab === 'resources' && <ResourceRequests darkMode={darkMode} />}
            {activeTab === 'lab' && <LabBooking darkMode={darkMode} />}
            {activeTab === 'analytics' && <Analytics darkMode={darkMode} />}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default TeacherDashboard;