import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, GraduationCap, DollarSign, 
  AlertTriangle, Bell, TrendingUp, Settings, Shield,
  Clock, UserCheck, BookOpen, Activity, FileText,
  Wifi, WifiOff, Database, Globe, Lock, Palette
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const menuItems = [
    { id: 'overview', label: 'Executive Overview', icon: LayoutDashboard },

    { id: 'staff', label: 'Staff Management', icon: Users },
    { id: 'students', label: 'Student Management', icon: GraduationCap },
    { id: 'academic', label: 'Academic Performance', icon: BookOpen },
    { id: 'finance', label: 'Finance & Transparency', icon: DollarSign },
    { id: 'discipline', label: 'Discipline & Welfare', icon: AlertTriangle },
    {id : 'attendance', label: 'Attendance Tracking', icon: UserCheck },
    { id: 'events', label: 'Events & Calendar', icon: Bell },
    { id: 'settings', label: 'System Settings', icon: Settings },
    
   
  ];

  const StatCard = ({ title, value, change, icon: Icon, trend }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <h3 className="text-3xl font-bold text-blue-900 mt-2">{value}</h3>
          {change && (
            <p className={`text-sm mt-2 flex items-center gap-1 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              <span>{change}</span>
              <span className="text-gray-500">vs last week</span>
            </p>
          )}
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
      </div>
    </div>
  );

  const AlertCard = ({ type, message, time }) => (
    <div className={`flex items-start gap-3 p-4 rounded-lg border-l-4 ${
      type === 'critical' ? 'bg-red-50 border-red-500' : 
      type === 'warning' ? 'bg-yellow-50 border-yellow-500' : 
      'bg-blue-50 border-blue-500'
    }`}>
      <AlertTriangle className={`w-5 h-5 mt-0.5 ${
        type === 'critical' ? 'text-red-500' : 
        type === 'warning' ? 'text-yellow-500' : 
        'text-blue-500'
      }`} />
      <div className="flex-1">
        <p className="font-medium text-gray-900">{message}</p>
        <p className="text-sm text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Executive Overview</h1>
          <p className="text-gray-500 mt-1">Real-time school performance at a glance</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            Export Report
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            Generate Insights
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Student Attendance" 
          value="94.2%" 
          change="+2.3%" 
          trend="up"
          icon={UserCheck} 
        />
        <StatCard 
          title="Teacher Attendance" 
          value="97.8%" 
          change="+1.1%" 
          trend="up"
          icon={Users} 
        />
        <StatCard 
          title="Fee Collection" 
          value="87.5%" 
          change="-3.2%" 
          trend="down"
          icon={DollarSign} 
        />
        <StatCard 
          title="Academic Average" 
          value="78.3%" 
          change="+4.7%" 
          trend="up"
          icon={BookOpen} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-blue-900">Performance Trends</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg">Daily</button>
              <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">Weekly</button>
              <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">Monthly</button>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-white rounded-lg">
            <div className="text-center">
              <TrendingUp className="w-16 h-16 text-blue-300 mx-auto mb-3" />
              <p className="text-gray-400 font-medium">Interactive Chart Visualization</p>
              <p className="text-sm text-gray-400 mt-1">Real-time data updates every 5 minutes</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-blue-900">Critical Alerts</h2>
            <Bell className="w-5 h-5 text-blue-600" />
          </div>
          <div className="space-y-3">
            <AlertCard 
              type="critical"
              message="15 students absent without notice"
              time="10 minutes ago"
            />
            <AlertCard 
              type="warning"
              message="Grade 6A exam results below average"
              time="1 hour ago"
            />
            <AlertCard 
              type="info"
              message="Parent-teacher meeting scheduled"
              time="3 hours ago"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
          <Clock className="w-8 h-8 mb-3 opacity-90" />
          <h3 className="text-2xl font-bold">345</h3>
          <p className="text-blue-100 text-sm mt-1">Active Sessions Today</p>
        </div>
        <div className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl p-6 text-white">
          <FileText className="w-8 h-8 mb-3 opacity-90" />
          <h3 className="text-2xl font-bold">28</h3>
          <p className="text-blue-100 text-sm mt-1">Pending Approvals</p>
        </div>
        <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl p-6 text-white">
          <Database className="w-8 h-8 mb-3 opacity-90" />
          <h3 className="text-2xl font-bold">99.9%</h3>
          <p className="text-blue-100 text-sm mt-1">System Uptime</p>
        </div>
        <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-xl p-6 text-white">
          <Activity className="w-8 h-8 mb-3 opacity-90" />
          <h3 className="text-2xl font-bold">Live</h3>
          <p className="text-blue-100 text-sm mt-1">All Systems Operational</p>
        </div>
      </div>
    </div>
  );

  const renderModulePlaceholder = (title, description) => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-blue-900">{title}</h1>
        <p className="text-gray-500 mt-1">{description}</p>
      </div>
      <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-100">
        <div className="text-center max-w-md mx-auto">
          <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-500 mb-6">{description}</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
            Configure Module
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    if (activeTab === 'overview') return renderOverview();
    
    const module = menuItems.find(item => item.id === activeTab);
    if (!module) return null;
    
    return renderModulePlaceholder(
      module.label,
      `Advanced ${module.label.toLowerCase()} tools and insights`,
      module.icon
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-lg">
                <GraduationCap className="w-8 h-8 text-blue-900" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Head Master Dashboard</h1>
                <p className="text-blue-200 text-sm"> School Management System</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium">Dr. Jean Mukama</p>
                <p className="text-xs text-blue-200">Head Master</p>
              </div>
              <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center font-bold">
                JM
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 bg-white border-r border-gray-200 min-h-[calc(100vh-73px)] sticky top-[73px] overflow-y-auto">
          <nav className="p-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                    activeTab === item.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

const renderStaff = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Staff Management</h1>
          <p className="text-gray-500 mt-1">Manage teachers, admin staff, and HR operations</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          + Add Staff Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Staff" value="87" icon={Users} />
        <StatCard title="Teaching Staff" value="62" icon={GraduationCap} />
        <StatCard title="Admin Staff" value="25" icon={Users} />
        <StatCard title="On Leave" value="3" icon={Clock} />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <input 
              type="text" 
              placeholder="Search staff by name, ID, or department..."
              className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Departments</option>
              <option>Mathematics</option>
              <option>Science</option>
              <option>Languages</option>
              <option>Administration</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Staff ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Attendance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { id: 'STF001', name: 'Marie Uwase', dept: 'Mathematics', role: 'Head of Dept', attendance: '98%', status: 'Active' },
                { id: 'STF002', name: 'John Mugisha', dept: 'Science', role: 'Teacher', attendance: '95%', status: 'Active' },
                { id: 'STF003', name: 'Grace Mutoni', dept: 'Languages', role: 'Teacher', attendance: '100%', status: 'Active' },
                { id: 'STF004', name: 'Peter Habimana', dept: 'Administration', role: 'Admin Officer', attendance: '97%', status: 'Active' },
              ].map((staff) => (
                <tr key={staff.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{staff.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{staff.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{staff.dept}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{staff.role}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{staff.attendance}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                      {staff.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-600 hover:text-blue-800 font-medium">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Student Management</h1>
          <p className="text-gray-500 mt-1">Track enrollment, attendance, and student records</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          + Enroll Student
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Students" value="1,245" icon={GraduationCap} />
        <StatCard title="Present Today" value="1,173" icon={UserCheck} />
        <StatCard title="New Admissions" value="28" icon={Users} />
        <StatCard title="Graduates (2025)" value="156" icon={GraduationCap} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Students by Grade</h3>
          <div className="space-y-3">
            {[
              { grade: 'Senior 6', count: 156, color: 'bg-blue-600' },
              { grade: 'Senior 5', count: 168, color: 'bg-blue-500' },
              { grade: 'Senior 4', count: 182, color: 'bg-blue-400' },
              { grade: 'Senior 3', count: 195, color: 'bg-blue-300' },
              { grade: 'Senior 2', count: 208, color: 'bg-blue-200' },
              { grade: 'Senior 1', count: 336, color: 'bg-blue-100' },
            ].map((item) => (
              <div key={item.grade} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{item.grade}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-gray-100 rounded-full h-2">
                    <div className={`${item.color} h-2 rounded-full`} style={{ width: `${(item.count / 336) * 100}%` }}></div>
                  </div>
                  <span className="text-sm font-bold text-gray-900 w-12 text-right">{item.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-bold text-blue-900">Recent Enrollments</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                { name: 'Alice Kayitesi', grade: 'Senior 1', date: '2 days ago', status: 'Completed' },
                { name: 'Bob Nkusi', grade: 'Senior 3', date: '3 days ago', status: 'Pending' },
                { name: 'Claire Umutoni', grade: 'Senior 2', date: '5 days ago', status: 'Completed' },
                { name: 'David Ishimwe', grade: 'Senior 1', date: '1 week ago', status: 'Completed' },
              ].map((student, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{student.name}</p>
                      <p className="text-sm text-gray-500">{student.grade} • {student.date}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    student.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {student.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAcademic = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Academic Performance</h1>
          <p className="text-gray-500 mt-1">Monitor exam results, grades, and learning outcomes</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="School Average" value="78.3%" change="+4.7%" trend="up" icon={BookOpen} />
        <StatCard title="Pass Rate" value="92.1%" change="+2.1%" trend="up" icon={TrendingUp} />
        <StatCard title="Exams Completed" value="156" icon={FileText} />
        <StatCard title="Top Performers" value="47" icon={GraduationCap} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Performance by Subject</h3>
          <div className="space-y-4">
            {[
              { subject: 'Mathematics', average: 85.2, trend: 'up', change: '+3.2%' },
              { subject: 'English', average: 78.5, trend: 'up', change: '+1.8%' },
              { subject: 'Physics', average: 74.8, trend: 'down', change: '-2.1%' },
              { subject: 'Chemistry', average: 79.3, trend: 'up', change: '+4.5%' },
              { subject: 'Biology', average: 81.7, trend: 'up', change: '+2.7%' },
            ].map((item) => (
              <div key={item.subject} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{item.subject}</span>
                    <span className="text-sm font-bold text-blue-600">{item.average}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${item.average}%` }}></div>
                    </div>
                    <span className={`text-xs font-medium ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {item.change}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Top Performing Students</h3>
          <div className="space-y-3">
            {[
              { name: 'Sarah Mukamana', grade: 'Senior 6', average: 94.8, rank: 1 },
              { name: 'Emmanuel Niyonzima', grade: 'Senior 5', average: 93.2, rank: 2 },
              { name: 'Divine Uwera', grade: 'Senior 6', average: 91.7, rank: 3 },
              { name: 'Patrick Mugabo', grade: 'Senior 4', average: 90.5, rank: 4 },
              { name: 'Grace Igihozo', grade: 'Senior 5', average: 89.8, rank: 5 },
            ].map((student) => (
              <div key={student.rank} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                  student.rank === 1 ? 'bg-yellow-500' : student.rank === 2 ? 'bg-gray-400' : student.rank === 3 ? 'bg-orange-500' : 'bg-blue-500'
                }`}>
                  {student.rank}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{student.name}</p>
                  <p className="text-sm text-gray-500">{student.grade}</p>
                </div>
                <span className="text-lg font-bold text-blue-600">{student.average}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderFinance = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Finance & Transparency</h1>
          <p className="text-gray-500 mt-1">Track fees, expenses, and financial health</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          Financial Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Fee Collection" value="87.5%" change="-3.2%" trend="down" icon={DollarSign} />
        <StatCard title="Revenue (Month)" value="RWF 45M" change="+8.1%" trend="up" icon={TrendingUp} />
        <StatCard title="Pending Fees" value="RWF 12M" icon={Clock} />
        <StatCard title="Expenses" value="RWF 38M" icon={FileText} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Monthly Revenue vs Expenses</h3>
          <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-white rounded-lg">
            <div className="text-center">
              <DollarSign className="w-16 h-16 text-blue-300 mx-auto mb-3" />
              <p className="text-gray-400 font-medium">Financial Chart</p>
              <p className="text-sm text-gray-400 mt-1">Revenue trends and expense breakdown</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Fee Collection Status</h3>
          <div className="space-y-4">
            {[
              { grade: 'Senior 6', collected: 95, total: 156 },
              { grade: 'Senior 5', collected: 89, total: 168 },
              { grade: 'Senior 4', collected: 85, total: 182 },
              { grade: 'Senior 3', collected: 88, total: 195 },
              { grade: 'Senior 2', collected: 82, total: 208 },
              { grade: 'Senior 1', collected: 87, total: 336 },
            ].map((item) => {
              const percentage = Math.round((item.collected / item.total) * 100);
              return (
                <div key={item.grade}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{item.grade}</span>
                    <span className="text-sm font-bold text-blue-600">{percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{item.collected} of {item.total} paid</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  const renderDiscipline = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Discipline & Welfare</h1>
          <p className="text-gray-500 mt-1">Monitor student behavior and wellbeing</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          + New Incident
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Incidents (Month)" value="12" change="-25%" trend="up" icon={AlertTriangle} />
        <StatCard title="Counseling Sessions" value="34" icon={Users} />
        <StatCard title="Resolved Cases" value="89%" icon={UserCheck} />
        <StatCard title="Active Cases" value="4" icon={Clock} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Recent Incidents</h3>
          <div className="space-y-3">
            {[
              { type: 'Minor', incident: 'Late arrival to class', student: 'John Doe', grade: 'S3A', date: '2 hours ago', status: 'Resolved' },
              { type: 'Moderate', incident: 'Uniform violation', student: 'Jane Smith', grade: 'S2B', date: '5 hours ago', status: 'Pending' },
              { type: 'Major', incident: 'Fighting', student: 'Mike Johnson', grade: 'S4C', date: '1 day ago', status: 'Under Review' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      item.type === 'Major' ? 'bg-red-100 text-red-700' :
                      item.type === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {item.type}
                    </span>
                    <span className="font-medium text-gray-900">{item.incident}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{item.student} • {item.grade}</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-gray-500">{item.date}</p>
                  <span className="text-xs font-medium text-blue-600">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Welfare Programs</h3>
          <div className="space-y-4">
            {[
              { program: 'Mental Health Support', participants: 45, status: 'Active' },
              { program: 'Peer Mentorship', participants: 120, status: 'Active' },
              { program: 'Anti-Bullying Campaign', participants: 580, status: 'Active' },
              { program: 'Study Skills Workshop', participants: 200, status: 'Upcoming' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{item.program}</h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    item.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{item.participants} participants</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAttendance = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Attendance Tracking</h1>
          <p className="text-gray-500 mt-1">Real-time attendance monitoring for students and staff</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          Mark Attendance
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Student Attendance" value="94.2%" change="+2.3%" trend="up" icon={UserCheck} />
        <StatCard title="Staff Attendance" value="97.8%" change="+1.1%" trend="up" icon={Users} />
        <StatCard title="Absent Today" value="72" icon={AlertTriangle} />
        <StatCard title="Late Arrivals" value="18" icon={Clock} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Attendance by Grade (Today)</h3>
          <div className="space-y-4">
            {[
              { grade: 'Senior 6', present: 148, absent: 8, total: 156, percentage: 94.9 },
              { grade: 'Senior 5', present: 162, absent: 6, total: 168, percentage: 96.4 },
              { grade: 'Senior 4', present: 170, absent: 12, total: 182, percentage: 93.4 },
              { grade: 'Senior 3', present: 183, absent: 12, total: 195, percentage: 93.8 },
              { grade: 'Senior 2', present: 195, absent: 13, total: 208, percentage: 93.8 },
              { grade: 'Senior 1', present: 315, absent: 21, total: 336, percentage: 93.8 },
            ].map((item) => (
              <div key={item.grade} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{item.grade}</span>
                  <span className="text-sm font-bold text-blue-600">{item.percentage}%</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>Present: {item.present}</span>
                  <span>Absent: {item.absent}</span>
                  <span>Total: {item.total}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Absence Alerts</h3>
          <div className="space-y-3">
            {[
              { name: 'Alice Mukamana', grade: 'S6A', days: 3, reason: 'Illness' },
              { name: 'Bob Habimana', grade: 'S4B', days: 2, reason: 'Family Emergency' },
              { name: 'Claire Uwase', grade: 'S5C', days: 1, reason: 'Unknown' },
              { name: 'David Nkusi', grade: 'S3A', days: 4, reason: 'Medical' },
            ].map((item, idx) => (
              <div key={idx} className={`p-3 rounded-lg border-l-4 ${
                item.days >= 3 ? 'bg-red-50 border-red-500' : 'bg-yellow-50 border-yellow-500'
              }`}>
                <p className="font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-600">{item.grade} • {item.days} days</p>
                <p className="text-xs text-gray-500 mt-1">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Events & Calendar</h1>
          <p className="text-gray-500 mt-1">Manage school events, meetings, and important dates</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          + Create Event
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Upcoming Events" value="12" icon={Bell} />
        <StatCard title="This Week" value="5" icon={Clock} />
        <StatCard title="This Month" value="18" icon={FileText} />
        <StatCard title="Participants" value="890" icon={Users} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            {[
              { title: 'Parent-Teacher Meeting', date: 'Jan 10, 2026', time: '2:00 PM', attendees: 250, type: 'Meeting' },
              { title: 'Science Fair', date: 'Jan 15, 2026', time: '9:00 AM', attendees: 400, type: 'Academic' },
              { title: 'Sports Day', date: 'Jan 20, 2026', time: '8:00 AM', attendees: 1200, type: 'Sports' },
              { title: 'Mid-Term Exams', date: 'Jan 25, 2026', time: 'All Day', attendees: 1245, type: 'Academic' },
              { title: 'Cultural Festival', date: 'Feb 1, 2026', time: '10:00 AM', attendees: 800, type: 'Cultural' },
            ].map((event, idx) => (
              <div key={idx} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">{event.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{event.date} • {event.time}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    event.type === 'Academic' ? 'bg-blue-100 text-blue-700' :
                    event.type === 'Sports' ? 'bg-green-100 text-green-700' :
                    event.type === 'Cultural' ? 'bg-purple-100 text-purple-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {event.type}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  <span>{event.attendees} expected attendees</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-blue-900 mb-4">January 2026</h3>
          <div className="grid grid-cols-7 gap-2 text-center mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-xs font-medium text-gray-500">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {[...Array(31)].map((_, i) => {
              const day = i + 1;
              const hasEvent = [10, 15, 20, 25].includes(day);
              return (
                <div
                  key={i}
                  className={`aspect-square flex items-center justify-center text-sm rounded-lg ${
                    day === 5 ? 'bg-blue-600 text-white font-bold' :
                    hasEvent ? 'bg-blue-100 text-blue-600 font-medium' :
                    'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-blue-600 rounded"></div>
              <span className="text-gray-600">Today</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-2">
              <div className="w-3 h-3 bg-blue-100 rounded"></div>
              <span className="text-gray-600">Event Day</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-blue-900">System Settings</h1>
        <p className="text-gray-500 mt-1">Configure system preferences and security settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-50 p-3 rounded-lg">
              <Settings className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-blue-900">General Settings</h2>
          </div>
          <div className="space-y-4">
            {[
              { label: 'School Name', value: 'Kigali Secondary School', type: 'text' },
              { label: 'Academic Year', value: '2025-2026', type: 'text' },
              { label: 'Time Zone', value: 'CAT (UTC+2)', type: 'select' },
              { label: 'Language', value: 'English', type: 'select' },
            ].map((setting, idx) => (
              <div key={idx}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{setting.label}</label>
                <input
                  type={setting.type}
                  value={setting.value}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-50 p-3 rounded-lg">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-blue-900">Security Settings</h2>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Two-Factor Authentication', enabled: true },
              { label: 'Session Timeout', enabled: true },
              { label: 'IP Whitelist', enabled: false },
              { label: 'Audit Logging', enabled: true },
            ].map((setting, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">{setting.label}</span>
                <div className={`w-12 h-6 rounded-full transition-colors ${
                  setting.enabled ? 'bg-blue-600' : 'bg-gray-300'
                }`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                    setting.enabled ? 'translate-x-6' : 'translate-x-1'
                  } mt-0.5`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-50 p-3 rounded-lg">
              <Bell className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-blue-900">Notification Preferences</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: 'Email Notifications', enabled: true },
              { label: 'SMS Alerts', enabled: true },
              { label: 'Push Notifications', enabled: false },
              { label: 'Daily Reports', enabled: true },
              { label: 'Critical Alerts Only', enabled: false },
            ].map((setting, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">{setting.label}</span>
                <div className={`w-10 h-5 rounded-full transition-colors ${
                  setting.enabled ? 'bg-blue-600' : 'bg-gray-300'
                }`}>
                  <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    setting.enabled ? 'translate-x-5' : 'translate-x-0.5'
                  } mt-0.5`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-50 p-3 rounded-lg">
              <Database className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-blue-900">System Information</h2>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Version', value: 'v2.5.1' },
              { label: 'Last Backup', value: '2 hours ago' },
              { label: 'Database Size', value: '4.2 GB' },
              { label: 'Active Users', value: '247' },
              { label: 'System Status', value: 'Operational', status: 'success' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
                <span className={`text-sm font-bold ${
                  item.status === 'success' ? 'text-green-600' : 'text-gray-900'
                }`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview();
      case 'staff': return renderStaff();
      case 'students': return renderStudents();
      case 'academic': return renderAcademic();
      case 'finance': return renderFinance();
      case 'discipline': return renderDiscipline();
      case 'attendance': return renderAttendance();
      case 'events': return renderEvents();
      case 'settings': return renderSettings();
      default: return renderOverview();
    }
  };

export default Dashboard;