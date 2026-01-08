import React, { useState } from 'react';
import { 
  DollarSign, TrendingUp, TrendingDown, AlertTriangle, 
  CheckCircle, Clock, Users, FileText, Download,
  Shield, Eye, Filter, Search, Calendar, BarChart3,
  PieChart, Wallet, CreditCard, Receipt, BookOpen,
  Zap, Target, AlertCircle, Activity, Settings,
  ArrowUpRight, ArrowDownRight, MoreVertical, X,
  CheckSquare, XCircle, Mail, Phone, User,Bell
} from 'lucide-react';

const FinanceDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPeriod, setSelectedPeriod] = useState('term');
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const menuItems = [
    { id: 'overview', label: 'Financial Overview', icon: BarChart3 },
    { id: 'fees', label: 'Fee Management', icon: DollarSign },
    { id: 'expenses', label: 'Expense Tracking', icon: Receipt },
    { id: 'budget', label: 'Budget Planning', icon: Target },
    { id: 'payroll', label: 'Payroll Summary', icon: Users },
    { id: 'audit', label: 'Audit & Transparency', icon: Shield },
    { id: 'reports', label: 'Reports & Exports', icon: FileText },
   
  ];

  const StatCard = ({ title, value, subtitle, icon: Icon, trend, trendValue, status = 'default' }) => {
    const statusColors = {
      success: 'bg-green-50 border-green-200',
      warning: 'bg-yellow-50 border-yellow-200',
      danger: 'bg-red-50 border-red-200',
      default: 'bg-white border-gray-100'
    };

    const iconColors = {
      success: 'bg-green-100 text-green-600',
      warning: 'bg-yellow-100 text-yellow-600',
      danger: 'bg-red-100 text-red-600',
      default: 'bg-blue-100 text-blue-900'
    };

    return (
      <div className={`rounded-xl p-6 shadow-sm border ${statusColors[status]} hover:shadow-md transition-shadow`}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-gray-600 text-sm font-medium mb-2">{title}</p>
            <h3 className="text-3xl font-bold text-blue-900 mb-2">{value}</h3>
            {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
            {trend && (
              <div className={`flex items-center gap-1 mt-2 text-sm font-medium ${
                trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                <span>{trendValue}</span>
              </div>
            )}
          </div>
          <div className={`p-3 rounded-lg ${iconColors[status]}`}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </div>
    );
  };

  const ApprovalModal = ({ request, onClose, onApprove, onReject }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full">
        <div className="bg-blue-900 text-white p-6 rounded-t-2xl flex items-center justify-between">
          <h2 className="text-xl font-bold">Fee Adjustment Request</h2>
          <button onClick={onClose} className="p-2 hover:bg-blue-800 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Student Name</p>
              <p className="font-bold text-gray-900">{request?.studentName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Student ID</p>
              <p className="font-bold text-gray-900">{request?.studentId}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Grade</p>
              <p className="font-bold text-gray-900">{request?.grade}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Request Date</p>
              <p className="font-bold text-gray-900">{request?.date}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-600 mb-1">Request Type</p>
            <p className="font-bold text-gray-900 mb-4">{request?.type}</p>
            
            <p className="text-sm text-gray-600 mb-1">Current Fee Amount</p>
            <p className="text-2xl font-bold text-blue-900 mb-4">RWF {request?.currentAmount?.toLocaleString()}</p>
            
            <p className="text-sm text-gray-600 mb-1">Requested Amount</p>
            <p className="text-2xl font-bold text-green-600 mb-4">RWF {request?.requestedAmount?.toLocaleString()}</p>
            
            <p className="text-sm text-gray-600 mb-1">Reason</p>
            <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{request?.reason}</p>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={() => onApprove(request)}
              className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              Approve Request
            </button>
            <button 
              onClick={() => onReject(request)}
              className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 flex items-center justify-center gap-2"
            >
              <XCircle className="w-5 h-5" />
              Reject Request
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
          <h1 className="text-3xl font-bold text-blue-900">Financial Overview</h1>
          <p className="text-gray-600 mt-1">Comprehensive financial health and performance metrics</p>
        </div>
        <div className="flex gap-3">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="term">Current Term</option>
            <option value="year">Academic Year</option>
            <option value="month">This Month</option>
          </select>
          <button className="px-4 py-2 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Financial Health Indicator */}
      {/* <div className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-300 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-green-500 p-4 rounded-full">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-900">Financial Health: GOOD</h2>
              <p className="text-green-700 mt-1">All indicators within healthy range • Budget on track</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-green-700">Health Score</p>
            <p className="text-4xl font-bold text-green-900">87/100</p>
          </div>
        </div>
      </div> */}

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Revenue" 
          value="RWF 145M" 
          subtitle="Current Term"
          icon={TrendingUp}
          trend="up"
          trendValue="+12.5%"
          status="success"
        />
        <StatCard 
          title="Total Expenses" 
          value="RWF 112M" 
          subtitle="77% of revenue"
          icon={Receipt}
          trend="down"
          trendValue="-5.2%"
          status="success"
        />
        <StatCard 
          title="Fee Collection" 
          value="87.5%" 
          subtitle="Target: 90%"
          icon={DollarSign}
          trend="down"
          trendValue="-2.3%"
          status="warning"
        />
        <StatCard 
          title="Outstanding Balance" 
          value="RWF 18M" 
          subtitle="From 156 students"
          icon={AlertTriangle}
          status="warning"
        />
      </div>

      {/* Revenue vs Expenses Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-blue-900">Revenue vs Expenses Trend</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 text-sm font-medium bg-blue-900 text-white rounded-lg">Monthly</button>
              <button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">Quarterly</button>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { month: 'January', revenue: 48, expenses: 38 },
              { month: 'February', revenue: 45, expenses: 35 },
              { month: 'March', revenue: 52, expenses: 39 },
              { month: 'April', revenue: 0, expenses: 0, future: true }
            ].map((item, idx) => (
              <div key={idx} className={item.future ? 'opacity-40' : ''}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{item.month}</span>
                  <div className="flex gap-4 text-sm">
                    <span className="text-green-600 font-medium">Revenue: RWF {item.revenue}M</span>
                    <span className="text-red-600 font-medium">Expenses: RWF {item.expenses}M</span>
                  </div>
                </div>
                <div className="flex gap-1 h-8 rounded-lg overflow-hidden">
                  <div className="bg-green-500 flex items-center justify-center text-white text-xs font-medium" style={{ width: `${(item.revenue / 60) * 100}%` }}>
                    {item.revenue > 0 && `${item.revenue}M`}
                  </div>
                  <div className="bg-red-500 flex items-center justify-center text-white text-xs font-medium" style={{ width: `${(item.expenses / 60) * 100}%` }}>
                    {item.expenses > 0 && `${item.expenses}M`}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-gray-600">Total Revenue: <span className="font-bold text-gray-900">RWF 145M</span></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="text-gray-600">Total Expenses: <span className="font-bold text-gray-900">RWF 112M</span></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Net: <span className="font-bold text-green-600">+RWF 33M</span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Budget Utilization</h3>
            <div className="relative w-40 h-40 mx-auto mb-4">
              <svg className="transform -rotate-90 w-40 h-40">
                <circle cx="80" cy="80" r="70" stroke="#DBEAFE" strokeWidth="20" fill="none" />
                <circle cx="80" cy="80" r="70" stroke="#1E3A8A" strokeWidth="20" fill="none"
                  strokeDasharray={`${(78.3 / 100) * 440} 440`} />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-900">78.3%</p>
                  <p className="text-sm text-gray-600">Used</p>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Allocated:</span>
                <span className="font-bold text-gray-900">RWF 180M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Spent:</span>
                <span className="font-bold text-blue-900">RWF 141M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Remaining:</span>
                <span className="font-bold text-green-600">RWF 39M</span>
              </div>
            </div>
          </div>

        </div>
      </div>

     
    </div>
  );

  const renderFees = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Fee Management</h1>
          <p className="text-gray-600 mt-1">Monitor fee collection, arrears, and approve adjustments</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="px-4 py-2 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 flex items-center gap-2">
            <Eye className="w-4 h-4" />
            View Details
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Collection Rate" value="87.5%" icon={DollarSign} status="warning" />
        <StatCard title="Total Collected" value="RWF 126M" icon={CheckCircle} status="success" />
        <StatCard title="Outstanding" value="RWF 18M" icon={Clock} status="warning" />
        <StatCard title="Arrears Cases" value="156" icon={AlertTriangle} status="danger" />
      </div>

      {/* Fee Structure by Grade */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-blue-900 mb-4">Fee Structure & Collection by Grade</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-50 border-b border-blue-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-900 uppercase">Grade</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-900 uppercase">Fee Amount</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-900 uppercase">Students</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-900 uppercase">Collected</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-900 uppercase">Pending</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-900 uppercase">Collection %</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-900 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { grade: 'Senior 6', fee: 450000, students: 156, collected: 148, pending: 8, percentage: 94.9 },
                { grade: 'Senior 5', fee: 450000, students: 168, collected: 150, pending: 18, percentage: 89.3 },
                { grade: 'Senior 4', fee: 420000, students: 182, collected: 158, pending: 24, percentage: 86.8 },
                { grade: 'Senior 3', fee: 420000, students: 195, collected: 165, pending: 30, percentage: 84.6 },
                { grade: 'Senior 2', fee: 400000, students: 208, collected: 180, pending: 28, percentage: 86.5 },
                { grade: 'Senior 1', fee: 400000, students: 336, collected: 288, pending: 48, percentage: 85.7 },
              ].map((item) => (
                <tr key={item.grade} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{item.grade}</td>
                  <td className="px-6 py-4 text-gray-700">RWF {item.fee.toLocaleString()}</td>
                  <td className="px-6 py-4 text-gray-700">{item.students}</td>
                  <td className="px-6 py-4 text-green-600 font-medium">{item.collected}</td>
                  <td className="px-6 py-4 text-red-600 font-medium">{item.pending}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                        <div className={`h-2 rounded-full ${
                          item.percentage >= 90 ? 'bg-green-500' : 
                          item.percentage >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                        }`} style={{ width: `${item.percentage}%` }}></div>
                      </div>
                      <span className="font-bold text-sm text-blue-900">{item.percentage}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      item.percentage >= 90 ? 'bg-green-100 text-green-700' :
                      item.percentage >= 85 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {item.percentage >= 90 ? 'Good' : item.percentage >= 85 ? 'Fair' : 'Poor'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pending Approvals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-blue-900">Pending Fee Adjustments</h3>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-bold">5 Pending</span>
          </div>
          <div className="space-y-3">
            {[
              { id: 1, studentName: 'Alice Mukamana', studentId: 'STD-2024-001', grade: 'Senior 6A', type: 'Fee Waiver', currentAmount: 450000, requestedAmount: 0, reason: 'Financial hardship - Parent unemployed', date: '2 hours ago' },
              { id: 2, studentName: 'Bob Nkusi', studentId: 'STD-2024-045', grade: 'Senior 5B', type: 'Partial Waiver', currentAmount: 450000, requestedAmount: 225000, reason: 'Single parent household - 50% reduction requested', date: '5 hours ago' },
              { id: 3, studentName: 'Claire Uwase', studentId: 'STD-2024-089', grade: 'Senior 4A', type: 'Payment Plan', currentAmount: 420000, requestedAmount: 420000, reason: 'Request for installment payment (3 months)', date: '1 day ago' }
            ].map((request) => (
              <div key={request.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-bold text-gray-900">{request.studentName}</p>
                    <p className="text-sm text-gray-600">{request.studentId} • {request.grade}</p>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                    {request.type}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-3">{request.reason}</p>
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="text-gray-600">Current: RWF {request.currentAmount.toLocaleString()}</span>
                  <span className="text-blue-900 font-bold">Requested: RWF {request.requestedAmount.toLocaleString()}</span>
                </div>
                <button 
                  onClick={() => {
                    setSelectedRequest(request);
                    setShowApprovalModal(true);
                  }}
                  className="w-full px-4 py-2 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800"
                >
                  Review Request
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Scholarships & Exemptions</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">Full Scholarships</span>
                  <span className="text-2xl font-bold text-blue-900">23</span>
                </div>
                <p className="text-sm text-gray-600">Total value: RWF 9.9M</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">Partial Scholarships</span>
                  <span className="text-2xl font-bold text-blue-900">47</span>
                </div>
                <p className="text-sm text-gray-600">Total value: RWF 8.2M</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">Fee Waivers</span>
                  <span className="text-2xl font-bold text-blue-900">15</span>
                </div>
                <p className="text-sm text-gray-600">Total value: RWF 5.6M</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Top Fee Arrears</h3>
            <div className="space-y-3">
              {[
                { name: 'Emmanuel K.', grade: 'S6', amount: 450000, months: 3 },
                { name: 'Grace M.', grade: 'S5', amount: 900000, months: 2 },
                { name: 'Patrick N.', grade: 'S4', amount: 420000, months: 1 }
              ].map((item, idx) => (
                <div key={idx} className="p-3 bg-red-50 border-l-4 border-red-500 rounded">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <span className="text-sm font-bold text-red-600">RWF {item.amount.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-gray-600">{item.grade} • {item.months} month(s) overdue</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderExpenses = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Expense Tracking & Control</h1>
          <p className="text-gray-600 mt-1">Monitor spending by category and detect anomalies</p>
        </div>
        <button className="px-4 py-2 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export Expenses
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Expenses" value="RWF 112M" icon={Receipt} />
        <StatCard title="This Month" value="RWF 39M" icon={Calendar} />
        <StatCard title="Budget Used" value="78.3%" icon={Target} status="success" />
        <StatCard title="Overspending" value="2 Categories" icon={AlertTriangle} status="warning" />
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-blue-900 mb-4">Expense Breakdown by Category</h3>
        <div className="space-y-4">
          {[
            { category: 'Salaries', budgeted: 65000000, spent: 63500000, percentage: 97.7, status: 'good' },
            { category: 'Utilities', budgeted: 8000000, spent: 8400000, percentage: 105, status: 'over' },
            { category: 'Learning Materials', budgeted: 12000000, spent: 9800000, percentage: 81.7, status: 'good' },
            { category: 'Maintenance', budgeted: 15000000, spent: 16200000, percentage: 108, status: 'over' },
            { category: 'Events & Activities', budgeted: 5000000, spent: 3200000, percentage: 64, status: 'good' },
            { category: 'Transportation', budgeted: 4000000, spent: 3800000, percentage: 95, status: 'good' }
          ].map((item) => (
            <div key={item.category} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">{item.category}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">
                    RWF {(item.spent / 1000000).toFixed(1)}M / {(item.budgeted / 1000000).toFixed(1)}M
                  </span>
                  <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                    item.status === 'over' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {item.percentage.toFixed(1)}%
                  </span>
                </div>
              </div>
              <div className="flex gap-1 h-3 rounded-full overflow-hidden">
                <div 
                  className={`${item.status === 'over' ? 'bg-red-500' : 'bg-blue-900'}`}
                  style={{ width: `${Math.min(item.percentage, 100)}%` }}
                ></div>
                {item.status === 'over' && (
                  <div className="bg-red-700" style={{ width: `${item.percentage - 100}%` }}></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Pending Expense Approvals</h3>
          <div className="space-y-3">
            {[
              { item: 'New Laboratory Equipment', amount: 8500000, dept: 'Science', date: '2 hours ago', priority: 'high' },
              { item: 'Library Books Purchase', amount: 2300000, dept: 'Library', date: '1 day ago', priority: 'medium' },
              { item: 'Sports Equipment', amount: 1500000, dept: 'Sports', date: '2 days ago', priority: 'low' }
            ].map((expense, idx) => (
              <div key={idx} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium text-gray-900">{expense.item}</p>
                    <p className="text-sm text-gray-600">{expense.dept} • {expense.date}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    expense.priority === 'high' ? 'bg-red-100 text-red-700' :
                    expense.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {expense.priority.toUpperCase()}
                  </span>
                </div>
                <p className="text-lg font-bold text-blue-900 mb-3">RWF {expense.amount.toLocaleString()}</p>
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700">
                    Approve
                  </button>
                  <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Monthly Comparison</h3>
          <div className="space-y-4">
            {[
              { month: 'January', amount: 38000000 },
              { month: 'February', amount: 35000000 },
              { month: 'March', amount: 39000000 }
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{item.month}</span>
                  <span className="font-bold text-blue-900">RWF {(item.amount / 1000000).toFixed(1)}M</span>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-900 h-2 rounded-full" style={{ width: `${(item.amount / 40000000) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderBudget = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Budget Planning & Monitoring</h1>
          <p className="text-gray-600 mt-1">Track budget allocation and variance analysis</p>
        </div>
        <button className="px-4 py-2 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800">
          Adjust Budget
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Annual Budget" value="RWF 540M" icon={Target} />
        <StatCard title="Utilized" value="RWF 282M" icon={Activity} />
        <StatCard title="Remaining" value="RWF 258M" icon={Wallet} status="success" />
        <StatCard title="Variance" value="-3.2%" icon={TrendingDown} status="success" />
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-blue-900 mb-4">Budget by Department (Annual)</h3>
        <div className="space-y-4">
          {[
            { dept: 'Academic Operations', allocated: 180000000, spent: 95000000, percentage: 52.8 },
            { dept: 'Staff Salaries', allocated: 195000000, spent: 127000000, percentage: 65.1 },
            { dept: 'Infrastructure', allocated: 45000000, spent: 18000000, percentage: 40 },
            { dept: 'Student Welfare', allocated: 35000000, spent: 15000000, percentage: 42.9 },
            { dept: 'Administration', allocated: 50000000, spent: 18000000, percentage: 36 },
            { dept: 'Sports & Activities', allocated: 35000000, spent: 9000000, percentage: 25.7 }
          ].map((item) => (
            <div key={item.dept} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-gray-900">{item.dept}</span>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Spent: RWF {(item.spent / 1000000).toFixed(1)}M</p>
                  <p className="text-xs text-gray-500">Budget: RWF {(item.allocated / 1000000).toFixed(1)}M</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-900 h-3 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                </div>
                <span className="text-sm font-bold text-blue-900 min-w-[50px]">{item.percentage.toFixed(1)}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

   
    </div>
  );

  const renderPayroll = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Payroll Summary</h1>
          <p className="text-gray-600 mt-1">Read-only view of staff payments and payroll status</p>
        </div>
        <div className="px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-2">
          <Eye className="w-4 h-4 text-blue-900" />
          <span className="text-sm font-medium text-blue-900">View Only</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Payroll" value="RWF 21.2M" subtitle="This Month" icon={Users} />
        <StatCard title="Staff Paid" value="87/87" icon={CheckCircle} status="success" />
        <StatCard title="Allowances" value="RWF 2.8M" icon={Wallet} />
        <StatCard title="Deductions" value="RWF 3.1M" icon={Receipt} />
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-blue-900 mb-4">Payroll Breakdown</h3>
        <div className="space-y-4">
          {[
            { category: 'Basic Salaries', amount: 18500000, staff: 87 },
            { category: 'Transport Allowance', amount: 1200000, staff: 87 },
            { category: 'Housing Allowance', amount: 1600000, staff: 62 },
            { category: 'Overtime', amount: 850000, staff: 23 },
            { category: 'Extra Duty', amount: 450000, staff: 15 }
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{item.category}</p>
                  <p className="text-sm text-gray-600">{item.staff} staff members</p>
                </div>
                <span className="text-lg font-bold text-blue-900">RWF {item.amount.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Payment Status (This Month)</h3>
          <div className="space-y-3">
            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Salaries Paid</p>
                  <p className="text-sm text-gray-600">On time - March 25</p>
                </div>
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Allowances Paid</p>
                  <p className="text-sm text-gray-600">Completed - March 25</p>
                </div>
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Next Payroll</p>
                  <p className="text-sm text-gray-600">Scheduled - April 25</p>
                </div>
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Deductions Summary</h3>
          <div className="space-y-3">
            {[
              { type: 'Tax (PAYE)', amount: 2100000 },
              { type: 'Social Security (RSSB)', amount: 850000 },
              { type: 'Medical Insurance', amount: 120000 },
              { type: 'Loan Deductions', amount: 30000 }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-900">{item.type}</span>
                <span className="font-bold text-red-600">-RWF {item.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAudit = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Audit & Transparency</h1>
          <p className="text-gray-600 mt-1">Complete transaction history and compliance reports</p>
        </div>
        <button className="px-4 py-2 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export Audit Log
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Transactions" value="2,847" icon={Activity} />
        <StatCard title="Approvals Pending" value="8" icon={Clock} status="warning" />
        <StatCard title="Audit Score" value="98%" icon={Shield} status="success" />
        <StatCard title="Last Audit" value="15 days ago" icon={Calendar} />
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-blue-900">Recent Financial Transactions</h3>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Search transactions..."
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
              <option>All Types</option>
              <option>Revenue</option>
              <option>Expense</option>
              <option>Payroll</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-50 border-b border-blue-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-900 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-900 uppercase">Transaction</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-900 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-900 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-900 uppercase">Approved By</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-900 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { date: 'Jan 08, 2026', transaction: 'Fee Collection - Senior 6A', type: 'Revenue', amount: 7200000, approvedBy: 'Bursar', status: 'Completed' },
                { date: 'Jan 07, 2026', transaction: 'Utilities Payment - Electricity', type: 'Expense', amount: 1250000, approvedBy: 'Head Master', status: 'Completed' },
                { date: 'Jan 07, 2026', transaction: 'Laboratory Equipment Purchase', type: 'Expense', amount: 3500000, approvedBy: 'Head Master', status: 'Completed' },
                { date: 'Jan 06, 2026', transaction: 'Staff Salaries - January', type: 'Payroll', amount: 21200000, approvedBy: 'Head Master', status: 'Completed' },
                { date: 'Jan 06, 2026', transaction: 'Fee Collection - Senior 5B', type: 'Revenue', amount: 6750000, approvedBy: 'Bursar', status: 'Completed' }
              ].map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">{item.date}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.transaction}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      item.type === 'Revenue' ? 'bg-green-100 text-green-700' :
                      item.type === 'Expense' ? 'bg-red-100 text-red-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-blue-900">
                    RWF {item.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{item.approvedBy}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-blue-900">Reports & Exports</h1>
        <p className="text-gray-600 mt-1">Generate comprehensive financial reports</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Monthly Financial Report', desc: 'Comprehensive monthly performance', icon: FileText, color: 'blue' },
          { title: 'Term Financial Statement', desc: 'Complete term-end report', icon: BookOpen, color: 'green' },
          { title: 'Annual Report', desc: 'Yearly financial overview', icon: TrendingUp, color: 'purple' },
          { title: 'Fee Collection Report', desc: 'Detailed fee analysis', icon: DollarSign, color: 'yellow' },
          { title: 'Expense Breakdown', desc: 'Category-wise expenses', icon: Receipt, color: 'red' },
          { title: 'Donor/Sponsor Report', desc: 'Financial accountability report', icon: Users, color: 'indigo' }
        ].map((report, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
              <report.icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{report.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{report.desc}</p>
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-blue-900 text-white rounded-lg text-sm font-medium hover:bg-blue-800">
                Generate PDF
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                Excel
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-blue-900 mb-4">Recent Generated Reports</h3>
        <div className="space-y-3">
          {[
            { name: 'December 2025 Financial Report', date: 'Jan 05, 2026', size: '2.4 MB', type: 'PDF' },
            { name: 'Term 1 Fee Collection Analysis', date: 'Jan 03, 2026', size: '1.8 MB', type: 'Excel' },
            { name: 'Q4 2025 Expense Breakdown', date: 'Dec 28, 2025', size: '3.1 MB', type: 'PDF' }
          ].map((report, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded">
                  <FileText className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{report.name}</p>
                  <p className="text-sm text-gray-600">{report.date} • {report.size} • {report.type}</p>
                </div>
              </div>
              <button className="px-4 py-2 text-blue-900 font-medium hover:bg-blue-50 rounded-lg">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderInsights = () => (
    <div className="space-y-6">
   

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="bg-purple-500 p-3 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-purple-900 mb-2">Fee Collection Risk Prediction</h3>
              <p className="text-purple-800 mb-4">Based on historical data and current trends</p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">High Risk Students</span>
                    <span className="text-2xl font-bold text-red-600">23</span>
                  </div>
                  <p className="text-sm text-gray-600">Predicted to default on next payment (85% confidence)</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">Medium Risk</span>
                    <span className="text-2xl font-bold text-yellow-600">47</span>
                  </div>
                  <p className="text-sm text-gray-600">May face payment delays (65% confidence)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="bg-red-500 p-3 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-red-900 mb-2">Unusual Spending Detected</h3>
              <p className="text-red-800 mb-4">Anomalies identified in expense patterns</p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-1">Utilities Spike</p>
                  <p className="text-sm text-gray-600 mb-2">45% increase vs last month</p>
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                    Investigate
                  </span>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-1">Maintenance Costs</p>
                  <p className="text-sm text-gray-600 mb-2">Unusual pattern detected</p>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                    Review
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 p-3 rounded-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Budget Reallocation Recommendation</h3>
              <p className="text-blue-800 mb-4">Optimize budget distribution for better outcomes</p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">From: Events Budget</span>
                    <span className="font-bold text-red-600">-RWF 2M</span>
                  </div>
                  <p className="text-sm text-gray-600">36% unused, low utilization</p>
                </div>
                <div className="text-center py-2">
                  <ArrowDownRight className="w-6 h-6 text-gray-400 mx-auto" />
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">To: Learning Materials</span>
                    <span className="font-bold text-green-600">+RWF 2M</span>
                  </div>
                  <p className="text-sm text-gray-600">High demand, near capacity</p>
                </div>
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800">
                Approve Reallocation
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="bg-green-500 p-3 rounded-lg">
              <TrendingDown className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-green-900 mb-2">Cost-Saving Opportunities</h3>
              <p className="text-green-800 mb-4">Identified potential savings</p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">Energy Efficiency</span>
                    <span className="font-bold text-green-600">Save RWF 850K/mo</span>
                  </div>
                  <p className="text-sm text-gray-600">Install LED lighting & solar panels</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">Bulk Purchasing</span>
                    <span className="font-bold text-green-600">Save RWF 320K/mo</span>
                  </div>
                  <p className="text-sm text-gray-600">Consolidate supplier orders</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">Digital Transition</span>
                    <span className="font-bold text-green-600">Save RWF 180K/mo</span>
                  </div>
                  <p className="text-sm text-gray-600">Reduce paper & printing costs</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-white rounded-lg">
                <p className="font-bold text-green-900 text-lg">Total Potential Savings</p>
                <p className="text-3xl font-bold text-green-600 mt-1">RWF 1.35M/month</p>
                <p className="text-sm text-gray-600 mt-1">RWF 16.2M annually</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-blue-900 mb-4">Financial Health Forecast</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Next Month Prediction</p>
            <p className="text-3xl font-bold text-green-600 mb-1">Good</p>
            <p className="text-sm text-gray-600">89/100 health score</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">End of Term</p>
            <p className="text-3xl font-bold text-green-600 mb-1">Good</p>
            <p className="text-sm text-gray-600">85/100 health score</p>
          </div>
          <div className="text-center p-6 bg-yellow-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">End of Year</p>
            <p className="text-3xl font-bold text-yellow-600 mb-1">Fair</p>
            <p className="text-sm text-gray-600">72/100 health score</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview();
      case 'fees': return renderFees();
      case 'expenses': return renderExpenses();
      case 'budget': return renderBudget();
      case 'payroll': return renderPayroll();
      case 'audit': return renderAudit();
      case 'reports': return renderReports();
      case 'insights': return renderInsights();
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-lg">
                <DollarSign className="w-8 h-8 text-blue-900" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Finance & Accountability</h1>
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

      {showApprovalModal && selectedRequest && (
        <ApprovalModal 
          request={selectedRequest} 
          onClose={() => setShowApprovalModal(false)}
          onApprove={(req) => {
            alert(`Approved fee adjustment for ${req.studentName}`);
            setShowApprovalModal(false);
          }}
          onReject={(req) => {
            alert(`Rejected fee adjustment for ${req.studentName}`);
            setShowApprovalModal(false);
          }}
        />
      )}
    </div>
  );
};

export default FinanceDashboard;