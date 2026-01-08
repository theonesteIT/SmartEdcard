import React, { useState } from 'react';
import { User, Calendar, TrendingUp, FileText, DollarSign, BarChart3, Shield, Plus, Search, Filter, X, Edit, Eye, AlertCircle, Check, Clock, Mail, Phone, Award, Briefcase, Menu, Home, LogOut, Settings, Bell } from 'lucide-react';

const StaffManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Sample data
  const staffData = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'HOD',
      department: 'Mathematics',
      email: 'sarah.j@school.com',
      phone: '+250 788 123 456',
      subjects: ['Calculus', 'Algebra'],
      attendance: 96,
      performance: 92,
      contractType: 'Permanent',
      status: 'active',
      lateDays: 2,
      absences: 3,
      leaveBalance: 15
    },
    {
      id: 2,
      name: 'Mr. James Wilson',
      role: 'Teacher',
      department: 'Science',
      email: 'james.w@school.com',
      phone: '+250 788 234 567',
      subjects: ['Physics', 'Chemistry'],
      attendance: 89,
      performance: 85,
      contractType: 'Contract',
      status: 'active',
      lateDays: 8,
      absences: 9,
      leaveBalance: 8
    },
    {
      id: 3,
      name: 'Ms. Emily Brown',
      role: 'Teacher',
      department: 'English',
      email: 'emily.b@school.com',
      phone: '+250 788 345 678',
      subjects: ['Literature', 'Grammar'],
      attendance: 98,
      performance: 94,
      contractType: 'Permanent',
      status: 'active',
      lateDays: 1,
      absences: 2,
      leaveBalance: 18
    },
    {
      id: 4,
      name: 'Mr. David Martinez',
      role: 'Admin',
      department: 'Administration',
      email: 'david.m@school.com',
      phone: '+250 788 456 789',
      subjects: [],
      attendance: 94,
      performance: 88,
      contractType: 'Permanent',
      status: 'active',
      lateDays: 3,
      absences: 5,
      leaveBalance: 12
    }
  ];

  const stats = {
    totalStaff: 45,
    activeStaff: 42,
    onLeave: 3,
    avgAttendance: 94,
    avgPerformance: 88,
    pendingLeaves: 5
  };

  const navigationItems = [
    { id: 'overview', label: 'Dashboard', icon: Home },
    { id: 'profiles', label: 'Staff Profiles', icon: User },
    { id: 'attendance', label: 'Attendance', icon: Calendar },
    { id: 'performance', label: 'Performance', icon: TrendingUp },
    { id: 'leave', label: 'Leave Management', icon: FileText },
    { id: 'payroll', label: 'Payroll', icon: DollarSign },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'security', label: 'Security & Roles', icon: Shield }
  ];

  const filteredStaff = staffData.filter(staff => {
    const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         staff.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || staff.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const StatCard = ({ title, value, subtitle, icon: Icon, trend }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <h3 className="text-3xl font-bold text-slate-800 mt-2">{value}</h3>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-blue-900" />
        </div>
      </div>
      {trend && (
        <div className="mt-4 flex items-center text-sm">
          <span className={trend > 0 ? 'text-green-600' : 'text-red-600'}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
          <span className="text-gray-500 ml-2">vs last month</span>
        </div>
      )}
    </div>
  );

  const StaffCard = ({ staff }) => (
    <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold text-lg">
            {staff.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 text-lg">{staff.name}</h4>
            <p className="text-sm text-gray-600">{staff.role} • {staff.department}</p>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
              <span className="flex items-center"><Mail className="w-3 h-3 mr-1" />{staff.email}</span>
              <span className="flex items-center"><Phone className="w-3 h-3 mr-1" />{staff.phone}</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button onClick={() => { setSelectedStaff(staff); setShowModal(true); }} className="p-2 hover:bg-gray-100 rounded-lg">
            <Eye className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Edit className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-100">
        <div>
          <p className="text-xs text-gray-500">Attendance</p>
          <p className="text-lg font-semibold text-slate-800">{staff.attendance}%</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Performance</p>
          <p className="text-lg font-semibold text-slate-800">{staff.performance}%</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Leave Balance</p>
          <p className="text-lg font-semibold text-slate-800">{staff.leaveBalance} days</p>
        </div>
      </div>
      {staff.lateDays > 5 && (
        <div className="mt-3 flex items-center text-xs text-amber-600 bg-amber-50 p-2 rounded">
          <AlertCircle className="w-4 h-4 mr-1" />
          Frequent lateness detected ({staff.lateDays} times this month)
        </div>
      )}
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-blue-900 text-white transition-all duration-300 flex flex-col`}>
        {/* Logo/Header */}
        <div className="p-6 border-b border-blue-800">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <div>
                <h2 className="text-xl font-bold">Staff Portal</h2>
                <p className="text-blue-200 text-sm">Head Master</p>
              </div>
            )}
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-blue-800 rounded-lg">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigationItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-white text-blue-900 font-semibold' 
                    : 'text-blue-100 hover:bg-blue-800'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-blue-800 space-y-2">
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-blue-100 hover:bg-blue-800 rounded-lg transition-colors">
            <Settings className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && <span>Settings</span>}
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-blue-100 hover:bg-blue-800 rounded-lg transition-colors">
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              {navigationItems.find(item => item.id === activeTab)?.label}
            </h1>
            <p className="text-sm text-gray-600">Thursday, January 08, 2026</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center">
              <Plus className="w-5 h-5 mr-2" />
              Add Staff
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard title="Total Staff" value={stats.totalStaff} subtitle="Active members" icon={User} trend={5} />
                <StatCard title="Average Attendance" value={`${stats.avgAttendance}%`} subtitle="This month" icon={Calendar} trend={2} />
                <StatCard title="Average Performance" value={`${stats.avgPerformance}%`} subtitle="Overall rating" icon={TrendingUp} trend={-1} />
                <StatCard title="Active Staff" value={stats.activeStaff} subtitle="Currently working" icon={Check} />
                <StatCard title="On Leave" value={stats.onLeave} subtitle="Today" icon={Clock} />
                <StatCard title="Pending Approvals" value={stats.pendingLeaves} subtitle="Leave requests" icon={AlertCircle} />
              </div>

              {/* Quick Alerts */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Alerts & Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-4 bg-red-50 rounded-lg border border-red-100">
                    <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800">2 staff members with consecutive absences</p>
                      <p className="text-sm text-gray-600">Review required for Mr. James Wilson and Ms. Jane Doe</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-amber-50 rounded-lg border border-amber-100">
                    <Clock className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800">5 leave requests pending approval</p>
                      <p className="text-sm text-gray-600">3 sick leaves, 2 annual leaves</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-green-50 rounded-lg border border-green-100">
                    <TrendingUp className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800">Performance improvement noted</p>
                      <p className="text-sm text-gray-600">Mathematics department showing 8% improvement</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Performers */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Top Performing Teachers</h3>
                <div className="space-y-3">
                  {staffData.sort((a, b) => b.performance - a.performance).slice(0, 3).map((staff, idx) => (
                    <div key={staff.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {idx + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800">{staff.name}</p>
                          <p className="text-sm text-gray-600">{staff.department}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-blue-900 text-lg">{staff.performance}%</p>
                        <p className="text-xs text-gray-500">Performance Score</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Staff Profiles Tab */}
          {activeTab === 'profiles' && (
            <div className="space-y-6">
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name or department..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>
                <select
                  value={filterRole}
                  onChange={(e) => setFilterRole(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                >
                  <option value="all">All Roles</option>
                  <option value="Teacher">Teacher</option>
                  <option value="HOD">Head of Department</option>
                  <option value="Admin">Admin</option>
                  <option value="Support Staff">Support Staff</option>
                </select>
              </div>

              {/* Staff Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredStaff.map(staff => (
                  <StaffCard key={staff.id} staff={staff} />
                ))}
              </div>
            </div>
          )}

          {/* Attendance Tab */}
          {activeTab === 'attendance' && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Attendance Overview - January 2026</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-slate-800">Staff Member</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-800">Department</th>
                        <th className="text-center py-3 px-4 font-semibold text-slate-800">Attendance %</th>
                        <th className="text-center py-3 px-4 font-semibold text-slate-800">Late Days</th>
                        <th className="text-center py-3 px-4 font-semibold text-slate-800">Absences</th>
                        <th className="text-center py-3 px-4 font-semibold text-slate-800">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {staffData.map(staff => (
                        <tr key={staff.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                                {staff.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <span className="font-medium text-slate-800">{staff.name}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{staff.department}</td>
                          <td className="py-4 px-4 text-center">
                            <span className={`font-semibold ${staff.attendance >= 95 ? 'text-green-600' : staff.attendance >= 90 ? 'text-blue-900' : 'text-amber-600'}`}>
                              {staff.attendance}%
                            </span>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <span className={`${staff.lateDays > 5 ? 'text-red-600 font-semibold' : 'text-gray-600'}`}>
                              {staff.lateDays}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-center text-gray-600">{staff.absences}</td>
                          <td className="py-4 px-4 text-center">
                            {staff.lateDays > 5 ? (
                              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                                Needs Review
                              </span>
                            ) : (
                              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                Good
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Performance Tab */}
          {activeTab === 'performance' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {staffData.map(staff => (
                  <div key={staff.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg">{staff.name}</h4>
                        <p className="text-sm text-gray-600">{staff.department}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-blue-900">{staff.performance}</div>
                        <p className="text-xs text-gray-500">Performance Score</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Teaching Quality</span>
                          <span className="font-semibold text-slate-800">{staff.performance - 2}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-900 h-2 rounded-full" style={{width: `${staff.performance - 2}%`}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Student Feedback</span>
                          <span className="font-semibold text-slate-800">{staff.performance + 1}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-900 h-2 rounded-full" style={{width: `${staff.performance + 1}%`}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Class Results</span>
                          <span className="font-semibold text-slate-800">{staff.performance - 5}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-900 h-2 rounded-full" style={{width: `${staff.performance - 5}%`}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Trend:</span> 
                        <span className="text-green-600 ml-2">↑ Improving</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Leave Management Tab */}
          {activeTab === 'leave' && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-800">Pending Leave Requests</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold">
                    {stats.pendingLeaves} Pending
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Mr. James Wilson', type: 'Sick Leave', duration: '2 days', date: 'Jan 10-11, 2026', reason: 'Medical appointment' },
                    { name: 'Dr. Sarah Johnson', type: 'Annual Leave', duration: '5 days', date: 'Jan 15-19, 2026', reason: 'Family vacation' },
                    { name: 'Ms. Emily Brown', type: 'Emergency Leave', duration: '1 day', date: 'Jan 9, 2026', reason: 'Family emergency' }
                  ].map((leave, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow gap-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold text-slate-800">{leave.name}</h4>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            leave.type === 'Sick Leave' ? 'bg-red-100 text-red-700' :
                            leave.type === 'Emergency Leave' ? 'bg-amber-100 text-amber-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {leave.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{leave.date} • {leave.duration}</p>
                        <p className="text-sm text-gray-500 mt-1">Reason: {leave.reason}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                          Approve
                        </button>
                        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Leave Balance Summary</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-slate-800">Staff Member</th>
                        <th className="text-center py-3 px-4 font-semibold text-slate-800">Annual Leave</th>
                        <th className="text-center py-3 px-4 font-semibold text-slate-800">Sick Leave</th>
                        <th className="text-center py-3 px-4 font-semibold text-slate-800">Used</th>
                        <th className="text-center py-3 px-4 font-semibold text-slate-800">Remaining</th>
                      </tr>
                    </thead>
                    <tbody>
                      {staffData.map(staff => (
                        <tr key={staff.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium text-slate-800">{staff.name}</td>
                          <td className="py-4 px-4 text-center text-gray-600">20 days</td>
                          <td className="py-4 px-4 text-center text-gray-600">10 days</td>
                          <td className="py-4 px-4 text-center text-gray-600">{30 - staff.leaveBalance} days</td>
                          <td className="py-4 px-4 text-center">
                            <span className="font-semibold text-blue-900">{staff.leaveBalance} days</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Payroll Tab */}
          {activeTab === 'payroll' && (
            <div className="space-y-6">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
                <AlertCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-amber-900">Read-Only Access</p>
                  <p className="text-sm text-amber-700">Payroll details are view-only. Contact HR department for modifications.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4">January 2026 Payroll Summary</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-slate-800">Staff Member</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-800">Role</th>
                        <th className="text-right py-3 px-4 font-semibold text-slate-800">Base Salary</th>
                        <th className="text-right py-3 px-4 font-semibold text-slate-800">Allowances</th>
                        <th className="text-right py-3 px-4 font-semibold text-slate-800">Deductions</th>
                        <th className="text-right py-3 px-4 font-semibold text-slate-800">Net Pay</th>
                      </tr>
                    </thead>
                    <tbody>
                      {staffData.map(staff => {
                        const baseSalary = staff.role === 'HOD' ? 850000 : staff.role === 'Teacher' ? 650000 : 550000;
                        const allowances = 50000;
                        const deductions = baseSalary * 0.1;
                        const netPay = baseSalary + allowances - deductions;
                        return (
                          <tr key={staff.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium text-slate-800">{staff.name}</td>
                            <td className="py-4 px-4 text-gray-600">{staff.role}</td>
                            <td className="py-4 px-4 text-right text-gray-600">RWF {baseSalary.toLocaleString()}</td>
                            <td className="py-4 px-4 text-right text-green-600">+RWF {allowances.toLocaleString()}</td>
                            <td className="py-4 px-4 text-right text-red-600">-RWF {deductions.toLocaleString()}</td>
                            <td className="py-4 px-4 text-right">
                              <span className="font-bold text-blue-900">RWF {netPay.toLocaleString()}</span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-slate-800 mb-4">Department Performance</h3>
                  <div className="space-y-4">
                    {[
                      { dept: 'Mathematics', score: 92, staff: 8 },
                      { dept: 'Science', score: 88, staff: 10 },
                      { dept: 'English', score: 95, staff: 7 },
                      { dept: 'Administration', score: 85, staff: 6 }
                    ].map((dept, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-slate-800">{dept.dept}</span>
                          <span className="text-sm text-gray-600">{dept.staff} staff</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-900 h-2 rounded-full" style={{width: `${dept.score}%`}}></div>
                          </div>
                          <span className="font-bold text-blue-900 text-sm">{dept.score}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-slate-800 mb-4">Staff Workload Analysis</h3>
                  <div className="space-y-3">
                    {staffData.map(staff => (
                      <div key={staff.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-slate-800">{staff.name}</p>
                          <p className="text-xs text-gray-600">{staff.subjects.length} subjects</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-blue-900">{staff.subjects.length * 20}h</p>
                          <p className="text-xs text-gray-500">per month</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Generate Reports</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-900 hover:bg-blue-50 transition-colors text-left">
                    <BarChart3 className="w-8 h-8 text-blue-900 mb-2" />
                    <h4 className="font-semibold text-slate-800">Attendance Report</h4>
                    <p className="text-sm text-gray-600 mt-1">Monthly staff attendance summary</p>
                  </button>
                  <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-900 hover:bg-blue-50 transition-colors text-left">
                    <TrendingUp className="w-8 h-8 text-blue-900 mb-2" />
                    <h4 className="font-semibold text-slate-800">Performance Report</h4>
                    <p className="text-sm text-gray-600 mt-1">Staff performance evaluation</p>
                  </button>
                  <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-900 hover:bg-blue-50 transition-colors text-left">
                    <FileText className="w-8 h-8 text-blue-900 mb-2" />
                    <h4 className="font-semibold text-slate-800">Leave Report</h4>
                    <p className="text-sm text-gray-600 mt-1">Leave usage and balance</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Security & Roles Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Role Management</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-slate-800">Staff Member</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-800">Current Role</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-800">Access Level</th>
                        <th className="text-center py-3 px-4 font-semibold text-slate-800">Account Status</th>
                        <th className="text-center py-3 px-4 font-semibold text-slate-800">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {staffData.map(staff => (
                        <tr key={staff.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                                {staff.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <span className="font-medium text-slate-800">{staff.name}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              staff.role === 'HOD' ? 'bg-purple-100 text-purple-700' :
                              staff.role === 'Teacher' ? 'bg-blue-100 text-blue-700' :
                              staff.role === 'Admin' ? 'bg-green-100 text-green-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {staff.role}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-gray-600">
                            {staff.role === 'HOD' ? 'Full Access' : 
                             staff.role === 'Admin' ? 'Administrative' : 
                             'Limited'}
                          </td>
                          <td className="py-4 px-4 text-center">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              staff.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                            }`}>
                              {staff.status === 'active' ? 'Active' : 'Inactive'}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center justify-center space-x-2">
                              <button className="px-3 py-1 text-sm bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors">
                                Edit Role
                              </button>
                              <button className={`px-3 py-1 text-sm rounded transition-colors ${
                                staff.status === 'active' 
                                  ? 'bg-red-600 text-white hover:bg-red-700' 
                                  : 'bg-green-600 text-white hover:bg-green-700'
                              }`}>
                                {staff.status === 'active' ? 'Deactivate' : 'Activate'}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-slate-800">Head of Department</h4>
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />Full system access</li>
                    <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />Manage department staff</li>
                    <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />Approve leave requests</li>
                    <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />View all reports</li>
                    <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />Performance evaluation</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-slate-800">Teacher</h4>
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />View own profile</li>
                    <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />Submit leave requests</li>
                    <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />Mark attendance</li>
                    <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />View class schedules</li>
                    <li className="flex items-center"><X className="w-4 h-4 mr-2 text-red-600 flex-shrink-0" />Limited reports access</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-slate-800">Admin Staff</h4>
                    <Briefcase className="w-5 h-5 text-green-600" />
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />Manage staff records</li>
                    <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />Process payroll</li>
                    <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />Handle leave approvals</li>
                    <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />Generate reports</li>
                    <li className="flex items-center"><X className="w-4 h-4 mr-2 text-red-600 flex-shrink-0" />No performance evaluation</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Staff Detail Modal */}
      {showModal && selectedStaff && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-blue-900 text-white p-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold">Staff Details</h3>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-blue-800 rounded-lg transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-3 flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-900" />
                  Personal Information
                </h4>
                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600">Full Name</p>
                    <p className="font-semibold text-slate-800">{selectedStaff.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Staff ID</p>
                    <p className="font-semibold text-slate-800">STF-{selectedStaff.id.toString().padStart(4, '0')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-slate-800">{selectedStaff.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-semibold text-slate-800">{selectedStaff.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Role</p>
                    <p className="font-semibold text-slate-800">{selectedStaff.role}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Department</p>
                    <p className="font-semibold text-slate-800">{selectedStaff.department}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Contract Type</p>
                    <p className="font-semibold text-slate-800">{selectedStaff.contractType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      selectedStaff.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {selectedStaff.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              </div>

              {selectedStaff.subjects.length > 0 && (
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-3">Subjects Taught</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedStaff.subjects.map((subject, idx) => (
                      <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-900 rounded-lg font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-900" />
                  Performance Metrics
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-blue-900">{selectedStaff.attendance}%</p>
                    <p className="text-sm text-gray-600 mt-1">Attendance</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-green-700">{selectedStaff.performance}%</p>
                    <p className="text-sm text-gray-600 mt-1">Performance</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-purple-700">{selectedStaff.leaveBalance}</p>
                    <p className="text-sm text-gray-600 mt-1">Leave Days Left</p>
                  </div>
                </div>
              </div>

              {selectedStaff.lateDays > 5 && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-900">Attendance Alert</p>
                    <p className="text-sm text-red-700">This staff member has been late {selectedStaff.lateDays} times this month.</p>
                  </div>
                </div>
              )}

              <div className="flex space-x-3 pt-4 border-t border-gray-200">
                <button className="flex-1 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold">
                  Edit Profile
                </button>
                <button className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold">
                  View Full History
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffManagement;