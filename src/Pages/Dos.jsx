import React, { useState } from 'react';
import { Bell, Users, GraduationCap, Calendar, BookOpen, Clock, TrendingUp, CheckCircle, XCircle, AlertTriangle, FileText, Send, LogOut, Menu, X, Download, BarChart3, PieChart, LineChart, Settings, ClipboardCheck, Beaker, Package, UserCheck, Home, Search, Filter, MoreVertical, ChevronRight } from 'lucide-react';

const HoSDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('today');

  const dashboardStats = {
    totalTeachers: 45,
    totalStudents: 850,
    totalClasses: 28,
    pendingApprovals: 12,
    teacherAttendance: 96,
    studentAttendance: 92,
    avgPerformance: 78
  };

  const pendingApprovals = [
    { id: 1, type: 'Teacher Leave', name: 'Mrs. Uwase', date: '2024-12-18', status: 'pending', priority: 'high' },
    { id: 2, type: 'Lab Booking', name: 'Mr. Kamanzi', resource: 'Chemistry Lab', date: '2024-12-16', status: 'pending', priority: 'medium' },
    { id: 3, type: 'Student Leave', name: 'Jean Claude', date: '2024-12-17', status: 'pending', priority: 'low' },
    { id: 4, type: 'Resource Request', name: 'Ms. Mutoni', item: 'Textbooks (20)', status: 'pending', priority: 'medium' }
  ];

  const teacherAttendance = [
    { name: 'Mr. Kamanzi', subject: 'Mathematics', morning: '07:45', evening: '16:30', status: 'present' },
    { name: 'Mrs. Uwase', subject: 'Physics', morning: '08:15', evening: '16:45', status: 'late' },
    { name: 'Dr. Niyonshuti', subject: 'Chemistry', morning: '07:50', evening: '16:35', status: 'present' },
    { name: 'Ms. Mutoni', subject: 'English', morning: '-', evening: '-', status: 'absent' },
    { name: 'Mr. Habimana', subject: 'Biology', morning: '07:40', evening: '16:25', status: 'present' }
  ];

  const classPerformance = [
    { class: 'S5 Science A', students: 32, attendance: 94, avgGrade: 82, trend: 'up' },
    { class: 'S5 Science B', students: 30, attendance: 89, avgGrade: 78, trend: 'up' },
    { class: 'S6 Arts', students: 28, attendance: 91, avgGrade: 85, trend: 'stable' },
    { class: 'S4 MCB', students: 35, attendance: 87, avgGrade: 74, trend: 'down' }
  ];

  const recentActivities = [
    { action: 'Approved lab booking', user: 'Chemistry Lab - Mr. Kamanzi', time: '10 mins ago' },
    { action: 'Rejected leave request', user: 'Mrs. Mukashema', time: '1 hour ago' },
    { action: 'Generated attendance report', user: 'S5 Science A', time: '2 hours ago' },
    { action: 'Scheduled exam', user: 'Mathematics Final Exam', time: '3 hours ago' }
  ];

  const upcomingEvents = [
    { title: 'Mid-term Exams', date: 'Dec 20-24', type: 'exam' },
    { title: 'Staff Meeting', date: 'Dec 17, 2:00 PM', type: 'meeting' },
    { title: 'Parent-Teacher Conference', date: 'Dec 22', type: 'event' },
    { title: 'Science Fair', date: 'Dec 27', type: 'event' }
  ];

  const TabButton = ({ icon: Icon, label, value, badge }) => (
    <button
      onClick={() => setActiveTab(value)}
      className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all ${
        activeTab === value
          ? 'bg-blue-600 text-white shadow-lg'
          : 'text-blue-900 hover:bg-blue-50'
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon size={20} />
        <span className="font-medium">{label}</span>
      </div>
      {badge && (
        <span className={`text-xs px-2 py-1 rounded-full ${
          activeTab === value ? 'bg-white/20' : 'bg-red-500 text-white'
        }`}>
          {badge}
        </span>
      )}
    </button>
  );

  const StatCard = ({ title, value, subtitle, icon: Icon, color, trend }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-sm font-medium ${
            trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600'
          }`}>
            <TrendingUp size={16} />
            {trend === 'up' ? '+5%' : trend === 'down' ? '-3%' : '0%'}
          </div>
        )}
      </div>
      <h3 className="text-3xl font-bold text-blue-900 mb-1">{value}</h3>
      <p className="text-sm text-blue-600 font-medium mb-1">{title}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  );

  const ApprovalCard = ({ approval }) => {
    const priorityColors = {
      high: 'bg-red-100 text-red-700 border-red-200',
      medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      low: 'bg-blue-100 text-blue-700 border-blue-200'
    };

    return (
      <div className="bg-white rounded-lg p-4 border border-blue-100 hover:shadow-md transition-all">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs px-2 py-1 rounded-full font-medium border ${priorityColors[approval.priority]}`}>
                {approval.priority.toUpperCase()}
              </span>
              <span className="text-xs text-gray-500">{approval.type}</span>
            </div>
            <h4 className="font-semibold text-blue-900">{approval.name}</h4>
            <p className="text-sm text-gray-600 mt-1">
              {approval.date && `Date: ${approval.date}`}
              {approval.resource && `Resource: ${approval.resource}`}
              {approval.item && `Item: ${approval.item}`}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
            <CheckCircle size={16} />
            Approve
          </button>
          <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
            <XCircle size={16} />
            Reject
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-72' : 'w-0'} bg-white shadow-xl transition-all duration-300 overflow-hidden`}>
        <div className="p-6 border-b border-blue-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
              <GraduationCap className="text-white" size={28} />
            </div>
            <div>
              <h2 className="font-bold text-blue-900 text-lg">Head of Studies</h2>
              <p className="text-xs text-gray-500">Administrative Portal</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-3 text-white mt-4">
            <p className="text-xs mb-1">Dr. Marie Mukamana</p>
            <p className="text-xs opacity-80">Academic Year 2024/2025</p>
          </div>
        </div>
        
        <nav className="p-4 space-y-2 overflow-y-auto" style={{maxHeight: 'calc(100vh - 240px)'}}>
          <TabButton icon={Home} label="Dashboard" value="dashboard" />
          <TabButton icon={UserCheck} label="Teacher Management" value="teachers" />
          <TabButton icon={Users} label="Student Management" value="students" />
          <TabButton icon={Calendar} label="Academic Planning" value="planning" />
          <TabButton icon={Beaker} label="Lab & Resources" value="resources" badge={pendingApprovals.filter(a => a.type.includes('Lab') || a.type.includes('Resource')).length} />
          <TabButton icon={ClipboardCheck} label="Approvals" value="approvals" badge={pendingApprovals.length} />
          <TabButton icon={BarChart3} label="Reports & Analytics" value="reports" />
          <TabButton icon={Bell} label="Notifications" value="notifications" />
          <TabButton icon={Settings} label="Settings" value="settings" />
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
              <div>
                <h1 className="text-2xl font-bold text-blue-900">Academic Management</h1>
                <p className="text-sm text-gray-600">Monday, December 15, 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent w-64"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
              <div className="relative">
                <Bell className="text-blue-600 cursor-pointer" size={24} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {pendingApprovals.length}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                  title="Total Teachers"
                  value={dashboardStats.totalTeachers}
                  subtitle="Active faculty members"
                  icon={UserCheck}
                  color="bg-blue-600"
                  trend="up"
                />
                <StatCard
                  title="Total Students"
                  value={dashboardStats.totalStudents}
                  subtitle="Enrolled this year"
                  icon={Users}
                  color="bg-green-600"
                  trend="up"
                />
                <StatCard
                  title="Total Classes"
                  value={dashboardStats.totalClasses}
                  subtitle="Active classes"
                  icon={BookOpen}
                  color="bg-purple-600"
                />
                <StatCard
                  title="Pending Approvals"
                  value={dashboardStats.pendingApprovals}
                  subtitle="Require your attention"
                  icon={AlertTriangle}
                  color="bg-red-600"
                />
              </div>

              {/* Attendance Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-blue-900">Today's Attendance</h3>
                    <select className="px-3 py-1 border border-blue-200 rounded-lg text-sm">
                      <option>Today</option>
                      <option>This Week</option>
                      <option>This Month</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-900">Teacher Attendance</span>
                        <span className="text-xl font-bold text-blue-600">{dashboardStats.teacherAttendance}%</span>
                      </div>
                      <div className="w-full bg-blue-100 rounded-full h-3">
                        <div className="bg-blue-600 h-3 rounded-full transition-all" style={{width: `${dashboardStats.teacherAttendance}%`}}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">43 of 45 teachers present</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-900">Student Attendance</span>
                        <span className="text-xl font-bold text-green-600">{dashboardStats.studentAttendance}%</span>
                      </div>
                      <div className="w-full bg-green-100 rounded-full h-3">
                        <div className="bg-green-600 h-3 rounded-full transition-all" style={{width: `${dashboardStats.studentAttendance}%`}}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">782 of 850 students present</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Upcoming Events</h3>
                  <div className="space-y-3">
                    {upcomingEvents.map((event, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Calendar className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-blue-900 text-sm">{event.title}</h4>
                          <p className="text-xs text-gray-600">{event.date}</p>
                        </div>
                        <ChevronRight className="text-blue-600" size={20} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pending Approvals & Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-blue-900">Pending Approvals</h3>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      View All
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pendingApprovals.slice(0, 4).map(approval => (
                      <ApprovalCard key={approval.id} approval={approval} />
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {recentActivities.map((activity, idx) => (
                      <div key={idx} className="flex gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="text-blue-600" size={16} />
                        </div>
                        <div>
                          <p className="text-sm text-blue-900 font-medium">{activity.action}</p>
                          <p className="text-xs text-gray-600">{activity.user}</p>
                          <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Class Performance Overview */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-blue-900">Class Performance Overview</h3>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 border border-blue-200 rounded-lg text-sm hover:bg-blue-50">
                      <Filter size={16} className="inline mr-1" />
                      Filter
                    </button>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                      <Download size={16} className="inline mr-1" />
                      Export
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-blue-900">Class</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-blue-900">Students</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-blue-900">Attendance</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-blue-900">Avg Grade</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-blue-900">Trend</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-blue-900">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classPerformance.map((classData, idx) => (
                        <tr key={idx} className="border-b border-blue-50 hover:bg-blue-50 transition-colors">
                          <td className="px-4 py-3 text-sm font-medium text-blue-900">{classData.class}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{classData.students}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-20 bg-gray-200 rounded-full h-2">
                                <div className="bg-green-600 h-2 rounded-full" style={{width: `${classData.attendance}%`}}></div>
                              </div>
                              <span className="text-sm text-gray-600">{classData.attendance}%</span>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              classData.avgGrade >= 80 ? 'bg-green-100 text-green-700' :
                              classData.avgGrade >= 70 ? 'bg-blue-100 text-blue-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {classData.avgGrade}%
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <TrendingUp className={`${
                              classData.trend === 'up' ? 'text-green-600' :
                              classData.trend === 'down' ? 'text-red-600 rotate-180' :
                              'text-gray-600'
                            }`} size={20} />
                          </td>
                          <td className="px-4 py-3">
                            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'teachers' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-blue-900">Teacher Management</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2">
                  <Send size={18} />
                  Send Announcement
                </button>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Today's Teacher Attendance</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Teacher Name</th>
                        <th className="px-6 py-4 text-left font-semibold">Subject</th>
                        <th className="px-6 py-4 text-left font-semibold">Morning Tap</th>
                        <th className="px-6 py-4 text-left font-semibold">Evening Tap</th>
                        <th className="px-6 py-4 text-left font-semibold">Status</th>
                        <th className="px-6 py-4 text-left font-semibold">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teacherAttendance.map((teacher, idx) => (
                        <tr key={idx} className="border-b border-blue-50 hover:bg-blue-50 transition-colors">
                          <td className="px-6 py-4 text-blue-900 font-medium">{teacher.name}</td>
                          <td className="px-6 py-4 text-gray-600">{teacher.subject}</td>
                          <td className="px-6 py-4 text-gray-600">{teacher.morning}</td>
                          <td className="px-6 py-4 text-gray-600">{teacher.evening}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              teacher.status === 'present' ? 'bg-green-100 text-green-700' :
                              teacher.status === 'late' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {teacher.status.toUpperCase()}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                              View Profile
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'students' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-blue-900">Student Management</h2>
                <div className="flex gap-2">
                  <button className="border border-blue-200 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 flex items-center gap-2">
                    <Filter size={18} />
                    Filter by Class
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2">
                    <Download size={18} />
                    Export Report
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                  title="Present Today"
                  value="782"
                  subtitle="92% of total students"
                  icon={CheckCircle}
                  color="bg-green-600"
                />
                <StatCard
                  title="Absent Today"
                  value="45"
                  subtitle="5% of total students"
                  icon={XCircle}
                  color="bg-red-600"
                />
                <StatCard
                  title="Late Arrivals"
                  value="23"
                  subtitle="3% of total students"
                  icon={Clock}
                  color="bg-yellow-600"
                />
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Chronic Absentees (Requires Intervention)</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Jean Paul Uwimana', class: 'S5 Science A', absences: 8, lastPresent: '2024-12-10' },
                    { name: 'Marie Claire Iradukunda', class: 'S4 MCB', absences: 6, lastPresent: '2024-12-12' },
                    { name: 'Patrick Ndayisaba', class: 'S6 Arts', absences: 7, lastPresent: '2024-12-11' }
                  ].map((student, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-blue-900">{student.name}</h4>
                        <p className="text-sm text-gray-600">{student.class} • {student.absences} absences this month</p>
                        <p className="text-xs text-gray-500 mt-1">Last present: {student.lastPresent}</p>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                        Contact Parent
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'planning' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-900">Academic Planning & Scheduling</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Class & Subject Assignment</h3>
                  <div className="space-y-3">
                    {[
                      { class: 'S5 Science A', subject: 'Mathematics', teacher: 'Mr. Kamanzi', status: 'assigned' },
                      { class: 'S5 Science B', subject: 'Physics', teacher: 'Mrs. Uwase', status: 'assigned' },
                      { class: 'S4 MCB', subject: 'Biology', teacher: 'Not Assigned', status: 'pending' },
                      { class: 'S6 Arts', subject: 'Literature', teacher: 'Ms. Mukandoli', status: 'assigned' }
                    ].map((assignment, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-blue-900 text-sm">{assignment.class} - {assignment.subject}</h4>
                          <p className="text-xs text-gray-600 mt-1">Teacher: {assignment.teacher}</p>
                        </div>
                        <button className={`px-3 py-1 rounded-lg text-xs font-medium ${
                          assignment.status === 'assigned' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {assignment.status === 'assigned' ? 'Assigned' : 'Assign Teacher'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Exam Schedule</h3>
                  <div className="space-y-3">
                    {[
                      { exam: 'Mathematics Mid-term', date: '2024-12-20', time: '08:00 AM', class: 'S5 Science' },
                      { exam: 'Physics Final', date: '2024-12-22', time: '10:00 AM', class: 'S5 Science' },
                      { exam: 'Chemistry Practical', date: '2024-12-23', time: '02:00 PM', class: 'S5 Science' }
                    ].map((exam, idx) => (
                      <div key={idx} className="p-3 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-blue-900 text-sm">{exam.exam}</h4>
                          <button className="text-blue-600 text-xs hover:text-blue-700">
                            <MoreVertical size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-gray-600">{exam.class}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {exam.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {exam.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                    Schedule New Exam
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                <h3 className="text-lg font-bold text-blue-900 mb-4">School Events & Activities</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: 'Science Fair', date: 'Dec 27, 2024', participants: 45, status: 'upcoming' },
                    { title: 'Sports Day', date: 'Jan 15, 2025', participants: 120, status: 'upcoming' },
                    { title: 'Parent-Teacher Meeting', date: 'Dec 22, 2024', participants: 85, status: 'confirmed' }
                  ].map((event, idx) => (
                    <div key={idx} className="p-4 border border-blue-200 rounded-lg hover:shadow-md transition-all">
                      <h4 className="font-semibold text-blue-900 mb-2">{event.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{event.date}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{event.participants} participants</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          event.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {event.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-900">Lab & Resource Management</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Lab Booking Requests</h3>
                  <div className="space-y-3">
                    {[
                      { teacher: 'Mr. Kamanzi', lab: 'Chemistry Lab', date: '2024-12-16', time: '10:00 AM', purpose: 'Organic Chemistry Practical' },
                      { teacher: 'Dr. Niyonshuti', lab: 'Physics Lab', date: '2024-12-17', time: '02:00 PM', purpose: 'Newton Laws Experiment' },
                      { teacher: 'Ms. Uwimana', lab: 'Computer Lab', date: '2024-12-18', time: '09:00 AM', purpose: 'Programming Class' }
                    ].map((booking, idx) => (
                      <div key={idx} className="p-4 border border-blue-200 rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-blue-900">{booking.teacher}</h4>
                            <p className="text-sm text-gray-600 mt-1">{booking.lab}</p>
                            <p className="text-xs text-gray-500 mt-1">{booking.purpose}</p>
                          </div>
                          <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Pending</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {booking.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {booking.time}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-sm font-medium">
                            Approve
                          </button>
                          <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-medium">
                            Reject
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Resource Requisitions</h3>
                  <div className="space-y-3">
                    {[
                      { teacher: 'Ms. Mutoni', item: 'English Textbooks', quantity: 30, priority: 'high', reason: 'New curriculum' },
                      { teacher: 'Mr. Habimana', item: 'Lab Equipment (Beakers)', quantity: 20, priority: 'medium', reason: 'Lab restocking' },
                      { teacher: 'Mrs. Mukamana', item: 'Whiteboard Markers', quantity: 50, priority: 'low', reason: 'Office supplies' }
                    ].map((request, idx) => (
                      <div key={idx} className="p-4 border border-blue-200 rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-blue-900">{request.item}</h4>
                            <p className="text-sm text-gray-600 mt-1">Requested by: {request.teacher}</p>
                            <p className="text-xs text-gray-500 mt-1">Quantity: {request.quantity} • {request.reason}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            request.priority === 'high' ? 'bg-red-100 text-red-700' :
                            request.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {request.priority.toUpperCase()}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-sm font-medium">
                            Approve
                          </button>
                          <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-medium">
                            Reject
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Resource Availability Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { resource: 'Chemistry Lab', available: true, nextBooking: 'Dec 16, 10:00 AM' },
                    { resource: 'Physics Lab', available: true, nextBooking: 'Dec 17, 02:00 PM' },
                    { resource: 'Computer Lab', available: false, currentUser: 'S5 Science A' },
                    { resource: 'Library Hall', available: true, nextBooking: 'Dec 20, 09:00 AM' }
                  ].map((resource, idx) => (
                    <div key={idx} className={`p-4 rounded-lg border ${
                      resource.available ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-3 h-3 rounded-full ${resource.available ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <span className="text-sm font-semibold text-blue-900">{resource.resource}</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        {resource.available ? `Next: ${resource.nextBooking}` : `In use: ${resource.currentUser}`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'approvals' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-blue-900">Pending Approvals</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600">
                    Approve All
                  </button>
                  <button className="px-4 py-2 border border-blue-200 text-blue-600 rounded-lg font-medium hover:bg-blue-50">
                    Filter
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {pendingApprovals.map(approval => (
                  <ApprovalCard key={approval.id} approval={approval} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-900">Reports & Analytics</h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 cursor-pointer hover:shadow-md transition-all">
                  <BarChart3 className="text-blue-600 mb-4" size={32} />
                  <h3 className="font-bold text-blue-900 mb-2">Attendance Reports</h3>
                  <p className="text-sm text-gray-600 mb-4">Teacher and student attendance analytics</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                    Generate Report
                  </button>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 cursor-pointer hover:shadow-md transition-all">
                  <PieChart className="text-green-600 mb-4" size={32} />
                  <h3 className="font-bold text-blue-900 mb-2">Performance Reports</h3>
                  <p className="text-sm text-gray-600 mb-4">Student grades and academic progress</p>
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-700">
                    Generate Report
                  </button>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 cursor-pointer hover:shadow-md transition-all">
                  <LineChart className="text-purple-600 mb-4" size={32} />
                  <h3 className="font-bold text-blue-900 mb-2">Resource Usage</h3>
                  <p className="text-sm text-gray-600 mb-4">Lab bookings and resource requisitions</p>
                  <button className="w-full bg-purple-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-purple-700">
                    Generate Report
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Quick Report Generation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">Report Type</label>
                    <select className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-600">
                      <option>Attendance Report</option>
                      <option>Performance Report</option>
                      <option>Teacher Report</option>
                      <option>Resource Usage</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">Time Period</label>
                    <select className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-600">
                      <option>Today</option>
                      <option>This Week</option>
                      <option>This Month</option>
                      <option>This Term</option>
                      <option>Custom Range</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">Class/Grade</label>
                    <select className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-600">
                      <option>All Classes</option>
                      <option>S5 Science A</option>
                      <option>S5 Science B</option>
                      <option>S6 Arts</option>
                      <option>S4 MCB</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">Format</label>
                    <select className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-600">
                      <option>PDF</option>
                      <option>Excel</option>
                      <option>CSV</option>
                    </select>
                  </div>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 flex items-center justify-center gap-2">
                  <Download size={20} />
                  Generate & Download Report
                </button>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-900">Notifications & Alerts</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="text-red-600" size={20} />
                    <span className="font-bold text-red-900">Urgent</span>
                  </div>
                  <p className="text-sm text-gray-700">3 teachers absent today without notice</p>
                  <button className="text-red-600 text-sm font-medium mt-2 hover:text-red-700">View Details</button>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="text-yellow-600" size={20} />
                    <span className="font-bold text-yellow-900">Pending</span>
                  </div>
                  <p className="text-sm text-gray-700">12 approvals awaiting your action</p>
                  <button className="text-yellow-600 text-sm font-medium mt-2 hover:text-yellow-700">Review Now</button>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Bell className="text-blue-600" size={20} />
                    <span className="font-bold text-blue-900">Info</span>
                  </div>
                  <p className="text-sm text-gray-700">Staff meeting scheduled for today at 2 PM</p>
                  <button className="text-blue-600 text-sm font-medium mt-2 hover:text-blue-700">Add to Calendar</button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                <h3 className="text-lg font-bold text-blue-900 mb-4">All Notifications</h3>
                <div className="space-y-3">
                  {[
                    { type: 'urgent', message: 'S4 MCB class attendance below 80% for 3 consecutive days', time: '5 mins ago' },
                    { type: 'info', message: 'New lab booking request from Mr. Kamanzi', time: '15 mins ago' },
                    { type: 'success', message: 'Monthly attendance report generated successfully', time: '1 hour ago' },
                    { type: 'warning', message: 'Chemistry Lab equipment maintenance due next week', time: '2 hours ago' },
                    { type: 'info', message: 'Parent-teacher conference scheduled for Dec 22', time: '3 hours ago' }
                  ].map((notif, idx) => (
                    <div key={idx} className={`p-4 rounded-lg border ${
                      notif.type === 'urgent' ? 'bg-red-50 border-red-200' :
                      notif.type === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                      notif.type === 'success' ? 'bg-green-50 border-green-200' :
                      'bg-blue-50 border-blue-200'
                    }`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm text-blue-900 font-medium">{notif.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700">
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-900">Settings</h2>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Account Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">Email Notifications</label>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm text-gray-700">Receive email alerts for pending approvals</span>
                      <input type="checkbox" className="w-5 h-5" defaultChecked />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">SMS Notifications</label>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm text-gray-700">Receive SMS for urgent alerts</span>
                      <input type="checkbox" className="w-5 h-5" defaultChecked />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                <h3 className="text-lg font-bold text-blue-900 mb-4">System Preferences</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">Default View</label>
                    <select className="w-full px-4 py-2 border border-blue-200 rounded-lg">
                      <option>Dashboard</option>
                      <option>Approvals</option>
                      <option>Teacher Management</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">Report Format</label>
                    <select className="w-full px-4 py-2 border border-blue-200 rounded-lg">
                      <option>PDF</option>
                      <option>Excel</option>
                      <option>CSV</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}