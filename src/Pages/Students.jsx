import React, { useState } from 'react';
import { Bell, Calendar, BookOpen, FileText, Clock, TrendingUp, Send, LogOut, Menu, X, CheckCircle, AlertCircle, Download, User, Home, ClipboardList, GraduationCap, MessageSquare, Library, Settings } from 'lucide-react';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'warning', message: 'Remember to mark attendance today', time: '10 mins ago' },
    { id: 2, type: 'info', message: 'Math exam scheduled for Friday', time: '2 hours ago' },
    { id: 3, type: 'success', message: 'Assignment submitted successfully', time: '1 day ago' }
  ]);

  const studentData = {
    name: 'Jean Claude Mugisha',
    studentId: 'STD2024001',
    class: 'Senior 5 - Science',
    todayAttendance: 'Present',
    monthlyStats: {
      present: 18,
      absent: 1,
      late: 2,
      total: 21
    }
  };

  const attendanceHistory = [
    { date: '2024-12-15', status: 'Present', time: '07:45 AM' },
    { date: '2024-12-14', status: 'Present', time: '07:50 AM' },
    { date: '2024-12-13', status: 'Late', time: '08:15 AM' },
    { date: '2024-12-12', status: 'Present', time: '07:42 AM' },
    { date: '2024-12-11', status: 'Absent', time: '-' }
  ];

  const schedule = [
    { time: '08:00 - 09:00', subject: 'Mathematics', teacher: 'Mr. Kamanzi', room: 'Room 101' },
    { time: '09:00 - 10:00', subject: 'Physics', teacher: 'Mrs. Uwase', room: 'Lab 2' },
    { time: '10:00 - 11:00', subject: 'Chemistry', teacher: 'Dr. Niyonshuti', room: 'Lab 1' },
    { time: '11:00 - 12:00', subject: 'English', teacher: 'Ms. Mutoni', room: 'Room 205' }
  ];

  const assignments = [
    { subject: 'Mathematics', title: 'Calculus Problem Set', due: '2024-12-18', status: 'pending' },
    { subject: 'Physics', title: 'Newton Laws Report', due: '2024-12-20', status: 'pending' },
    { subject: 'Chemistry', title: 'Organic Chemistry Lab', due: '2024-12-16', status: 'submitted' }
  ];

  const grades = [
    { subject: 'Mathematics', score: 85, grade: 'A' },
    { subject: 'Physics', score: 78, grade: 'B+' },
    { subject: 'Chemistry', score: 92, grade: 'A+' },
    { subject: 'English', score: 88, grade: 'A' }
  ];

  const TabButton = ({ icon: Icon, label, value }) => (
    <button
      onClick={() => setActiveTab(value)}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all ${
        activeTab === value
          ? 'bg-blue-600 text-white shadow-lg'
          : 'text-blue-900 hover:bg-blue-50'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  const StatCard = ({ title, value, subtitle, icon: Icon, color }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
      <h3 className="text-3xl font-bold text-blue-900 mb-1">{value}</h3>
      <p className="text-sm text-blue-600 font-medium mb-1">{title}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  );

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-white shadow-xl transition-all duration-300 overflow-hidden`}>
        <div className="p-6 border-b border-blue-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="text-white" size={24} />
            </div>
            <div>
              <h2 className="font-bold text-blue-900">{studentData.name}</h2>
              <p className="text-xs text-gray-500">{studentData.studentId}</p>
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg p-3">
            <p className="text-xs text-blue-600 font-medium">{studentData.class}</p>
          </div>
        </div>
        
        <nav className="p-4 space-y-2">
          <TabButton icon={Home} label="Dashboard" value="dashboard" />
          <TabButton icon={ClipboardList} label="Attendance" value="attendance" />
          <TabButton icon={Calendar} label="Schedule" value="schedule" />
          <TabButton icon={GraduationCap} label="Academics" value="academics" />
          <TabButton icon={MessageSquare} label="Announcements" value="announcements" />
          <TabButton icon={Library} label="Resources" value="resources" />
          <TabButton icon={FileText} label="Requests" value="requests" />
        </nav>
        
        <div className="absolute bottom-4 left-4 right-4">
          <button className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-blue-100 px-6 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-blue-50 rounded-lg">
                {sidebarOpen ? <X size={24} className="text-blue-900" /> : <Menu size={24} className="text-blue-900" />}
              </button>
              <h1 className="text-2xl font-bold text-blue-900">Student Portal</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell className="text-blue-600 cursor-pointer" size={24} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {notifications.length}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* RFID Attendance Section */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
                    <p className="text-blue-100 mb-6">Today is Monday, December 15, 2024</p>
                    <div className="flex items-center gap-3">
                      <CheckCircle size={32} className="text-green-300" />
                      <div>
                        <p className="text-lg font-semibold">Attendance Marked</p>
                        <p className="text-sm text-blue-100">Checked in at 07:45 AM</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                    <Clock size={48} className="mx-auto mb-2" />
                    <p className="text-sm">Tap your RFID card</p>
                    <p className="text-xs text-blue-100 mt-1">to mark attendance</p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                  title="Present Days"
                  value={studentData.monthlyStats.present}
                  subtitle="This month"
                  icon={CheckCircle}
                  color="bg-green-500"
                />
                <StatCard
                  title="Absent Days"
                  value={studentData.monthlyStats.absent}
                  subtitle="This month"
                  icon={AlertCircle}
                  color="bg-red-500"
                />
                <StatCard
                  title="Late Arrivals"
                  value={studentData.monthlyStats.late}
                  subtitle="This month"
                  icon={Clock}
                  color="bg-yellow-500"
                />
                <StatCard
                  title="Attendance Rate"
                  value={`${Math.round((studentData.monthlyStats.present / studentData.monthlyStats.total) * 100)}%`}
                  subtitle="Overall performance"
                  icon={TrendingUp}
                  color="bg-blue-600"
                />
              </div>

              {/* Quick Actions & Notifications */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Quick Actions */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-center transition-all">
                      <Calendar className="mx-auto mb-2 text-blue-600" size={24} />
                      <p className="text-sm font-medium text-blue-900">View Schedule</p>
                    </button>
                    <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-center transition-all">
                      <FileText className="mx-auto mb-2 text-blue-600" size={24} />
                      <p className="text-sm font-medium text-blue-900">Assignments</p>
                    </button>
                    <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-center transition-all">
                      <Send className="mx-auto mb-2 text-blue-600" size={24} />
                      <p className="text-sm font-medium text-blue-900">Request Leave</p>
                    </button>
                    <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-center transition-all">
                      <BookOpen className="mx-auto mb-2 text-blue-600" size={24} />
                      <p className="text-sm font-medium text-blue-900">Resources</p>
                    </button>
                  </div>
                </div>

                {/* Notifications */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Recent Notifications</h3>
                  <div className="space-y-3">
                    {notifications.map(notif => (
                      <div key={notif.id} className="flex gap-3 p-3 bg-blue-50 rounded-lg">
                        <Bell size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm text-blue-900">{notif.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-900">Attendance History</h2>
              <div className="bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Date</th>
                        <th className="px-6 py-4 text-left font-semibold">Status</th>
                        <th className="px-6 py-4 text-left font-semibold">Time</th>
                        <th className="px-6 py-4 text-left font-semibold">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendanceHistory.map((record, index) => (
                        <tr key={index} className="border-b border-blue-50 hover:bg-blue-50 transition-colors">
                          <td className="px-6 py-4 text-blue-900">{record.date}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              record.status === 'Present' ? 'bg-green-100 text-green-700' :
                              record.status === 'Late' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {record.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-blue-900">{record.time}</td>
                          <td className="px-6 py-4">
                            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-blue-50 border-t border-blue-100">
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                    <Download size={18} />
                    Download Report
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-900">Today's Schedule</h2>
              <div className="grid gap-4">
                {schedule.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                          {item.time}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-blue-900">{item.subject}</h3>
                          <p className="text-sm text-gray-600">{item.teacher} • {item.room}</p>
                        </div>
                      </div>
                      <BookOpen className="text-blue-600" size={24} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'academics' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-900">Academic Overview</h2>
              
              {/* Assignments */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Pending Assignments</h3>
                <div className="space-y-3">
                  {assignments.map((assignment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-blue-900">{assignment.title}</h4>
                        <p className="text-sm text-gray-600">{assignment.subject} • Due: {assignment.due}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        assignment.status === 'submitted' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {assignment.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grades */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Recent Grades</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {grades.map((grade, index) => (
                    <div key={index} className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-blue-900">{grade.subject}</h4>
                        <span className="text-2xl font-bold text-blue-600">{grade.grade}</span>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: `${grade.score}%`}}></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{grade.score}%</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'announcements' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-900">School Announcements</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bell className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-blue-900 mb-2">End of Term Examination Schedule</h3>
                      <p className="text-gray-600 mb-3">The final examinations will begin on December 20th. Please review the schedule and prepare accordingly.</p>
                      <p className="text-xs text-gray-500">Posted 2 hours ago</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bell className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-blue-900 mb-2">Holiday Break Notice</h3>
                      <p className="text-gray-600 mb-3">School will close for holiday break from December 23rd to January 6th. Classes resume on January 7th, 2025.</p>
                      <p className="text-xs text-gray-500">Posted 1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-900">Learning Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 hover:shadow-md transition-shadow cursor-pointer">
                  <BookOpen className="text-blue-600 mb-4" size={32} />
                  <h3 className="font-bold text-blue-900 mb-2">E-Books</h3>
                  <p className="text-sm text-gray-600">Access digital textbooks and study materials</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 hover:shadow-md transition-shadow cursor-pointer">
                  <FileText className="text-blue-600 mb-4" size={32} />
                  <h3 className="font-bold text-blue-900 mb-2">Lesson Notes</h3>
                  <p className="text-sm text-gray-600">Download class notes and presentations</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 hover:shadow-md transition-shadow cursor-pointer">
                  <Library className="text-blue-600 mb-4" size={32} />
                  <h3 className="font-bold text-blue-900 mb-2">Library</h3>
                  <p className="text-sm text-gray-600">Browse library catalog and borrowed books</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'requests' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-900">Requests & Permissions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Request Leave</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-blue-900 mb-2">Leave Date</label>
                      <input type="date" className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-900 mb-2">Reason</label>
                      <textarea className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" rows="3" placeholder="Explain your reason..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Submit Request
                    </button>
                  </form>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Request Status</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-green-900">Leave Request - Dec 10</span>
                        <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">Approved</span>
                      </div>
                      <p className="text-sm text-gray-600">Medical appointment</p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-yellow-900">Event Participation</span>
                        <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">Pending</span>
                      </div>
                      <p className="text-sm text-gray-600">Science fair competition</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;