import React, { useState } from 'react';
import { 
  GraduationCap, Users, UserCheck, AlertTriangle, 
  Heart, Mail, FileText, TrendingUp, Search,
  Filter, Download, Plus, X, Phone, MapPin,
  Calendar, Award, Activity, Shield, Bell,
  ChevronDown, ChevronRight, Eye, Edit, Trash2
} from 'lucide-react';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: GraduationCap },
    { id: 'records', label: 'Student Records', icon: Users },
    { id: 'attendance', label: 'Attendance Tracking', icon: UserCheck },
    { id: 'academic', label: 'Academic Records', icon: Award },
    { id: 'discipline', label: 'Discipline & Behavior', icon: AlertTriangle },
    { id: 'welfare', label: 'Welfare & Support', icon: Heart },
    { id: 'communication', label: 'Parent Communication', icon: Mail },
    { id: 'reports', label: 'Reports & Analytics', icon: FileText }
  ];

  const StatCard = ({ title, value, change, icon: Icon, trend, color = 'blue' }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <h3 className="text-3xl font-bold text-blue-900 mt-2">{value}</h3>
          {change && (
            <p className={`text-sm mt-2 flex items-center gap-1 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              <span>{change}</span>
              <span className="text-gray-500">vs last month</span>
            </p>
          )}
        </div>
        <div className={`bg-${color}-50 p-3 rounded-lg`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
      </div>
    </div>
  );

  const StudentModal = ({ student, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-blue-900 text-white p-6 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold text-xl">
              {student.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{student.name}</h2>
              <p className="text-blue-200">ID: {student.id} • {student.grade}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-blue-800 rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Personal Information
              </h3>
              <div className="space-y-3 bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date of Birth:</span>
                  <span className="font-medium">{student.dob}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gender:</span>
                  <span className="font-medium">{student.gender}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    student.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>{student.status}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Parent Information
              </h3>
              <div className="space-y-3 bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Parent Name:</span>
                  <span className="font-medium">{student.parent}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone:</span>
                  <span className="font-medium">{student.parentPhone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium text-sm">{student.parentEmail}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Academic Performance
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Overall Average</p>
                <p className="text-2xl font-bold text-blue-900">{student.average}%</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Attendance</p>
                <p className="text-2xl font-bold text-blue-900">{student.attendance}%</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Rank</p>
                <p className="text-2xl font-bold text-blue-900">{student.rank}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Conduct</p>
                <p className="text-2xl font-bold text-blue-900">{student.conduct}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 px-4 py-3 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800">
              View Full Profile
            </button>
            <button className="px-4 py-3 border border-blue-900 text-blue-900 rounded-lg font-medium hover:bg-blue-50">
              <Edit className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Student Management Overview</h1>
          <p className="text-gray-600 mt-1">Comprehensive student data and insights</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </button>
          <button className="px-4 py-2 bg-blue-900 text-white rounded-lg text-sm font-medium hover:bg-blue-800 flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Enroll Student
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Students" value="1,245" change="+28" trend="up" icon={Users} />
        <StatCard title="Present Today" value="1,173" change="+15" trend="up" icon={UserCheck} />
        <StatCard title="Average Attendance" value="94.2%" change="+2.3%" trend="up" icon={Activity} />
        <StatCard title="At Risk Students" value="23" change="-5" trend="up" icon={AlertTriangle} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-blue-900">Enrollment by Grade</h2>
            <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">
              <option>2025-2026</option>
              <option>2024-2025</option>
            </select>
          </div>
          <div className="space-y-4">
            {[
              { grade: 'Senior 6', boys: 82, girls: 74, total: 156, percentage: 46 },
              { grade: 'Senior 5', boys: 88, girls: 80, total: 168, percentage: 50 },
              { grade: 'Senior 4', boys: 95, girls: 87, total: 182, percentage: 54 },
              { grade: 'Senior 3', boys: 102, girls: 93, total: 195, percentage: 58 },
              { grade: 'Senior 2', boys: 108, girls: 100, total: 208, percentage: 62 },
              { grade: 'Senior 1', boys: 175, girls: 161, total: 336, percentage: 100 },
            ].map((item) => (
              <div key={item.grade} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{item.grade}</span>
                  <span className="text-sm font-bold text-blue-900">{item.total} students</span>
                </div>
                <div className="flex gap-1 h-8 rounded-lg overflow-hidden">
                  <div 
                    className="bg-blue-900 flex items-center justify-center text-white text-xs font-medium"
                    style={{ width: `${(item.boys / item.total) * 100}%` }}
                  >
                    {item.boys}
                  </div>
                  <div 
                    className="bg-blue-300 flex items-center justify-center text-blue-900 text-xs font-medium"
                    style={{ width: `${(item.girls / item.total) * 100}%` }}
                  >
                    {item.girls}
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Boys: {item.boys}</span>
                  <span>Girls: {item.girls}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Gender Distribution</h2>
            <div className="space-y-4">
              <div className="text-center py-6">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="transform -rotate-90 w-32 h-32">
                    <circle cx="64" cy="64" r="56" stroke="#DBEAFE" strokeWidth="16" fill="none" />
                    <circle cx="64" cy="64" r="56" stroke="#1E3A8A" strokeWidth="16" fill="none"
                      strokeDasharray={`${(649/1245) * 352} 352`} />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-900">52%</p>
                      <p className="text-xs text-gray-500">Boys</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
                    <span className="font-medium">Boys: 649</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                    <span className="font-medium">Girls: 596</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-6 text-white">
            <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full p-3 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg text-left font-medium transition-all">
                Mark Attendance
              </button>
              <button className="w-full p-3 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg text-left font-medium transition-all">
                Record Discipline
              </button>
              <button className="w-full p-3 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg text-left font-medium transition-all">
                Send Notification
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-red-100 p-2 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <h3 className="font-bold text-blue-900">Critical Alerts</h3>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded">
              <p className="font-medium text-sm text-gray-900">15 students absent 3+ days</p>
              <p className="text-xs text-gray-600 mt-1">Requires immediate follow-up</p>
            </div>
            <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <p className="font-medium text-sm text-gray-900">8 students failing 2+ subjects</p>
              <p className="text-xs text-gray-600 mt-1">Academic intervention needed</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Award className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-blue-900">Top Performers</h3>
          </div>
          <div className="space-y-2">
            {[
              { name: 'Sarah M.', grade: 'S6', avg: '94.8%' },
              { name: 'Emmanuel N.', grade: 'S5', avg: '93.2%' },
              { name: 'Divine U.', grade: 'S6', avg: '91.7%' }
            ].map((student, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{student.name}</p>
                    <p className="text-xs text-gray-600">{student.grade}</p>
                  </div>
                </div>
                <span className="font-bold text-blue-900">{student.avg}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-bold text-blue-900">Recent Activity</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-900 rounded-full mt-1.5"></div>
              <div>
                <p className="font-medium">28 new enrollments</p>
                <p className="text-xs text-gray-500">This week</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-900 rounded-full mt-1.5"></div>
              <div>
                <p className="font-medium">156 students promoted</p>
                <p className="text-xs text-gray-500">Last month</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-900 rounded-full mt-1.5"></div>
              <div>
                <p className="font-medium">3 transfers processed</p>
                <p className="text-xs text-gray-500">2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRecords = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Student Records</h1>
          <p className="text-gray-600 mt-1">Manage student profiles and information</p>
        </div>
        <button className="px-4 py-2 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Student
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, ID, or parent..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Grades</option>
            <option>Senior 6</option>
            <option>Senior 5</option>
            <option>Senior 4</option>
            <option>Senior 3</option>
            <option>Senior 2</option>
            <option>Senior 1</option>
          </select>
          <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Status</option>
            <option>Active</option>
            <option>Suspended</option>
            <option>Transferred</option>
          </select>
          <button className="px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-50 border-b border-blue-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-900 uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-900 uppercase">Student Name</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-900 uppercase">Grade</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-900 uppercase">Parent/Guardian</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-900 uppercase">Attendance</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-900 uppercase">Average</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-900 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-900 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { id: 'STD-2024-001', name: 'Alice Kayitesi', grade: 'Senior 6A', parent: 'Jean Kayitesi', parentPhone: '+250 788 123 456', parentEmail: 'jean.k@email.com', attendance: '96%', average: '87.5%', status: 'Active', dob: 'Mar 15, 2007', gender: 'Female', rank: '12/156', conduct: 'Excellent' },
                { id: 'STD-2024-002', name: 'Bob Nkusi', grade: 'Senior 5B', parent: 'Marie Nkusi', parentPhone: '+250 788 234 567', parentEmail: 'marie.n@email.com', attendance: '92%', average: '78.3%', status: 'Active', dob: 'Jul 22, 2008', gender: 'Male', rank: '45/168', conduct: 'Good' },
                { id: 'STD-2024-003', name: 'Claire Umutoni', grade: 'Senior 4C', parent: 'Paul Umutoni', parentPhone: '+250 788 345 678', parentEmail: 'paul.u@email.com', attendance: '98%', average: '91.2%', status: 'Active', dob: 'Jan 5, 2009', gender: 'Female', rank: '3/182', conduct: 'Excellent' },
                { id: 'STD-2024-004', name: 'David Ishimwe', grade: 'Senior 3A', parent: 'Grace Ishimwe', parentPhone: '+250 788 456 789', parentEmail: 'grace.i@email.com', attendance: '88%', average: '65.8%', status: 'Active', dob: 'Nov 12, 2009', gender: 'Male', rank: '120/195', conduct: 'Fair' },
                { id: 'STD-2024-005', name: 'Emma Mukamana', grade: 'Senior 2B', parent: 'John Mukamana', parentPhone: '+250 788 567 890', parentEmail: 'john.m@email.com', attendance: '94%', average: '83.7%', status: 'Active', dob: 'Apr 8, 2010', gender: 'Female', rank: '23/208', conduct: 'Very Good' },
              ].map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-blue-900">{student.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-900">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-medium text-gray-900">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{student.grade}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{student.parent}</td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${
                      parseFloat(student.attendance) >= 95 ? 'text-green-600' :
                      parseFloat(student.attendance) >= 90 ? 'text-blue-600' :
                      'text-red-600'
                    }`}>{student.attendance}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${
                      parseFloat(student.average) >= 85 ? 'text-green-600' :
                      parseFloat(student.average) >= 70 ? 'text-blue-600' :
                      'text-red-600'
                    }`}>{student.average}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => {
                        setSelectedStudent(student);
                        setShowModal(true);
                      }}
                      className="text-blue-900 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">Showing 1-5 of 1,245 students</p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">Previous</button>
            <button className="px-3 py-1.5 bg-blue-900 text-white rounded-lg text-sm">1</button>
            <button className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">2</button>
            <button className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">3</button>
            <button className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">Next</button>
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
          <p className="text-gray-600 mt-1">Daily attendance monitoring and chronic absentee detection</p>
        </div>
        <button className="px-4 py-2 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800">
          Mark Today's Attendance
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Overall Rate" value="94.2%" change="+2.3%" trend="up" icon={UserCheck} />
        <StatCard title="Present Today" value="1,173" icon={Users} />
        <StatCard title="Absent" value="72" change="-15" trend="up" icon={AlertTriangle} />
        <StatCard title="Chronic Absent" value="23" icon={Bell} />
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
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-gray-900">{item.grade}</span>
                  <span className="text-sm font-bold text-blue-900">{item.percentage}%</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-900 h-3 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-600 font-medium">Present: {item.present}</span>
                  <span className="text-red-600 font-medium">Absent: {item.absent}</span>
                  <span className="text-gray-600">Total: {item.total}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Chronic Absentees</h3>
            <p className="text-sm text-gray-600 mb-4">Students absent 3+ days this week</p>
            <div className="space-y-3">
              {[
                { name: 'Alice M.', grade: 'S6A', days: 4, reason: 'Illness' },
                { name: 'Bob H.', grade: 'S4B', days: 3, reason: 'Family' },
                { name: 'Claire U.', grade: 'S5C', days: 5, reason: 'Unknown' },
                { name: 'David N.', grade: 'S3A', days: 3, reason: 'Medical' },
              ].map((student, idx) => (
                <div key={idx} className="p-3 bg-red-50 border-l-4 border-red-500 rounded">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-gray-900">{student.name}</p>
                    <span className="text-xs font-bold text-red-600">{student.days} days</span>
                  </div>
                  <p className="text-xs text-gray-600">{student.grade} • {student.reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-6 text-white">
            <h3 className="text-lg font-bold mb-2">Notification Status</h3>
            <p className="text-blue-200 text-sm mb-4">Parents notified for absences</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>SMS Sent:</span>
                <span className="font-bold">45 today</span>
              </div>
              <div className="flex justify-between">
                <span>Emails Sent:</span>
                <span className="font-bold">32 today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview();
      case 'records': return renderRecords();
      case 'attendance': return renderAttendance();
      default: 
        const module = menuItems.find(item => item.id === activeTab);
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-blue-900">{module?.label}</h1>
              <p className="text-gray-600 mt-1">Module under development</p>
            </div>
            <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-100">
              <div className="text-center max-w-md mx-auto">
                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {module && <module.icon className="w-10 h-10 text-blue-900" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{module?.label}</h3>
                <p className="text-gray-600 mb-6">This module is coming soon with comprehensive features</p>
                <button className="px-6 py-3 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-lg">
                <GraduationCap className="w-8 h-8 text-blue-900" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Student Management System</h1>
                <p className="text-blue-200 text-sm">Head Master Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-blue-800 rounded-lg">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
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
                      ? 'bg-blue-900 text-white shadow-md'
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

        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>

      {showModal && selectedStudent && (
        <StudentModal student={selectedStudent} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default StudentDashboard;