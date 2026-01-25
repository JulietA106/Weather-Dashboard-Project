import React, { useState } from 'react';
import { Plus, Trash2, Edit2, Check, X, Search, Calendar, Users, Folder, BarChart3, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function SlimFileProjectManager() {
  const teamMembers = {
    'Leadership': [
      { name: 'Isaac Abakah', role: 'CEO and Founder' },
      { name: 'Emmanuel Abakah', role: 'Chief Executive Officer' }
    ],
    'Development': [
      { name: 'Abel Abendin', role: 'FullStack Developer' },
      { name: 'Selorm Sem', role: 'MERN Stack Developer' },
      { name: 'Kofi Atta Agyare', role: 'Frontend Developer' },
      { name: 'Juliet Angaandi', role: 'Frontend Developer' },
      { name: 'Micheal Selby', role: 'Backend Developer' }
    ],
    'Design': [
      { name: 'Broderick Djan', role: 'Motion Designer' },
      { name: 'Ferdinand Ofei', role: 'UI/UX Designer' },
      { name: 'Kofi Obuom Agyare', role: 'UI/UX Designer' },
      { name: 'Nii Teiko Aryee', role: 'UI/UX Designer' },
      { name: 'Edward', role: 'Graphic Designer' },
      { name: 'Penuel Sablah', role: 'Graphic Designer' }
    ],
    'Marketing': [
      { name: 'Helena Amoabeng', role: 'Digital Marketer' },
      { name: 'Veronica Akwojinga', role: 'Linkedin Marketer' }
    ],
    'Operations': [
      { name: 'Godfred Agbosu', role: 'Partnership Head' }
    ],
    'Legal': [
      { name: 'Marlyn', role: 'Legal Expert' }
    ],
    'Research': [
      { name: 'Munira Nuhu', role: 'Research Lead' },
      { name: 'Joel Eli Tsewabge', role: 'Analytical Expert' }
    ]
  };

  const allMembers = Object.values(teamMembers).flat();

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'PDF Compression Algorithm v2.0',
      description: 'Enhance PDF compression quality and speed',
      category: 'Development',
      tasks: [
        { id: 1, title: 'Research advanced compression techniques', assignee: 'Munira Nuhu', priority: 'high', status: 'completed', dueDate: '2026-01-15' },
        { id: 2, title: 'Implement new compression engine', assignee: 'Abel Abendin', priority: 'high', status: 'in-progress', dueDate: '2026-01-25' },
        { id: 3, title: 'Backend API optimization', assignee: 'Micheal Selby', priority: 'high', status: 'in-progress', dueDate: '2026-01-28' },
        { id: 4, title: 'Frontend integration', assignee: 'Selorm Sem', priority: 'medium', status: 'todo', dueDate: '2026-02-01' },
        { id: 5, title: 'Quality testing and analytics', assignee: 'Joel Eli Tsewabge', priority: 'medium', status: 'todo', dueDate: '2026-02-05' }
      ]
    },
    {
      id: 2,
      name: 'Website UI/UX Redesign',
      description: 'Modernize interface for better user experience',
      category: 'Design',
      tasks: [
        { id: 6, title: 'User flow analysis', assignee: 'Ferdinand Ofei', priority: 'high', status: 'completed', dueDate: '2026-01-10' },
        { id: 7, title: 'Create wireframes and mockups', assignee: 'Nii Teiko Aryee', priority: 'high', status: 'completed', dueDate: '2026-01-18' },
        { id: 8, title: 'Design system development', assignee: 'Kofi Obuom Agyare', priority: 'high', status: 'in-progress', dueDate: '2026-01-22' },
        { id: 9, title: 'Marketing graphics creation', assignee: 'Penuel Sablah', priority: 'medium', status: 'in-progress', dueDate: '2026-01-25' },
        { id: 10, title: 'Motion graphics for landing page', assignee: 'Broderick Djan', priority: 'medium', status: 'todo', dueDate: '2026-01-30' },
        { id: 11, title: 'Frontend implementation', assignee: 'Kofi Atta Agyare', priority: 'high', status: 'in-progress', dueDate: '2026-02-02' },
        { id: 12, title: 'Responsive design polish', assignee: 'Juliet Angaandi', priority: 'medium', status: 'todo', dueDate: '2026-02-05' }
      ]
    },
    {
      id: 3,
      name: 'Q1 2026 Marketing Campaign',
      description: 'Drive user acquisition and brand awareness',
      category: 'Marketing',
      tasks: [
        { id: 13, title: 'Market research and strategy', assignee: 'Munira Nuhu', priority: 'high', status: 'completed', dueDate: '2026-01-08' },
        { id: 14, title: 'Social media content calendar', assignee: 'Helena Amoabeng', priority: 'high', status: 'completed', dueDate: '2026-01-12' },
        { id: 15, title: 'LinkedIn B2B outreach strategy', assignee: 'Veronica Akwojinga', priority: 'high', status: 'in-progress', dueDate: '2026-01-20' },
        { id: 16, title: 'Campaign graphics design', assignee: 'Edward', priority: 'high', status: 'in-progress', dueDate: '2026-01-23' },
        { id: 17, title: 'Video content creation', assignee: 'Broderick Djan', priority: 'medium', status: 'todo', dueDate: '2026-01-28' },
        { id: 18, title: 'Campaign analytics setup', assignee: 'Joel Eli Tsewabge', priority: 'medium', status: 'todo', dueDate: '2026-01-30' }
      ]
    },
    {
      id: 4,
      name: 'Partnership Development Initiative',
      description: 'Expand strategic partnerships and collaborations',
      category: 'Operations',
      tasks: [
        { id: 19, title: 'Identify potential partners', assignee: 'Godfred Agbosu', priority: 'high', status: 'in-progress', dueDate: '2026-01-20' },
        { id: 20, title: 'Partnership agreement templates', assignee: 'Marlyn', priority: 'high', status: 'in-progress', dueDate: '2026-01-22' },
        { id: 21, title: 'Partnership presentation deck', assignee: 'Penuel Sablah', priority: 'medium', status: 'todo', dueDate: '2026-01-25' },
        { id: 22, title: 'Outreach campaign', assignee: 'Veronica Akwojinga', priority: 'medium', status: 'todo', dueDate: '2026-01-28' }
      ]
    },
    {
      id: 5,
      name: 'Product Analytics & Optimization',
      description: 'Data-driven insights for product improvement',
      category: 'Research',
      tasks: [
        { id: 23, title: 'User behavior analysis', assignee: 'Joel Eli Tsewabge', priority: 'high', status: 'in-progress', dueDate: '2026-01-20' },
        { id: 24, title: 'Compression efficiency research', assignee: 'Munira Nuhu', priority: 'high', status: 'in-progress', dueDate: '2026-01-24' },
        { id: 25, title: 'Competitive analysis report', assignee: 'Joel Eli Tsewabge', priority: 'medium', status: 'todo', dueDate: '2026-01-30' },
        { id: 26, title: 'Feature prioritization study', assignee: 'Munira Nuhu', priority: 'medium', status: 'todo', dueDate: '2026-02-03' }
      ]
    },
    {
      id: 6,
      name: 'Company Legal Compliance & IP Protection',
      description: 'Ensure legal compliance and protect intellectual property',
      category: 'Legal',
      tasks: [
        { id: 27, title: 'Terms of Service update', assignee: 'Marlyn', priority: 'high', status: 'in-progress', dueDate: '2026-01-25' },
        { id: 28, title: 'Privacy policy review', assignee: 'Marlyn', priority: 'high', status: 'todo', dueDate: '2026-01-28' },
        { id: 29, title: 'Patent research for compression tech', assignee: 'Marlyn', priority: 'medium', status: 'todo', dueDate: '2026-02-05' }
      ]
    },
    {
      id: 7,
      name: 'Strategic Planning 2026',
      description: 'Define company direction and growth strategy',
      category: 'Leadership',
      tasks: [
        { id: 30, title: 'Q1 performance review', assignee: 'Isaac Abakah', priority: 'high', status: 'in-progress', dueDate: '2026-01-22' },
        { id: 31, title: 'Annual roadmap planning', assignee: 'Emmanuel Abakah', priority: 'high', status: 'in-progress', dueDate: '2026-01-25' },
        { id: 32, title: 'Team capacity planning', assignee: 'Isaac Abakah', priority: 'medium', status: 'todo', dueDate: '2026-01-30' },
        { id: 33, title: 'Budget allocation review', assignee: 'Emmanuel Abakah', priority: 'medium', status: 'todo', dueDate: '2026-02-02' }
      ]
    }
  ]);

  const [activeView, setActiveView] = useState('dashboard');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedStat, setSelectedStat] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showAddProject, setShowAddProject] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [newProject, setNewProject] = useState({ name: '', description: '', category: 'Development' });
  const [newTask, setNewTask] = useState({ title: '', assignee: '', priority: 'medium', status: 'todo', dueDate: '' });

  const categories = ['Leadership', 'Development', 'Design', 'Marketing', 'Operations', 'Legal', 'Research'];

  const addProject = () => {
    if (!newProject.name.trim()) return;
    setProjects([...projects, { id: Date.now(), ...newProject, tasks: [] }]);
    setNewProject({ name: '', description: '', category: 'Development' });
    setShowAddProject(false);
  };

  const deleteProject = (id) => {
    if (confirm('Delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
      if (selectedProject?.id === id) {
        setSelectedProject(null);
        setActiveView('dashboard');
      }
    }
  };

  const addTask = () => {
    if (!newTask.title.trim() || !selectedProject) return;
    const updated = projects.map(p => 
      p.id === selectedProject.id ? { ...p, tasks: [...p.tasks, { id: Date.now(), ...newTask }] } : p
    );
    setProjects(updated);
    setSelectedProject(updated.find(p => p.id === selectedProject.id));
    setNewTask({ title: '', assignee: '', priority: 'medium', status: 'todo', dueDate: '' });
    setShowAddTask(false);
  };

  const updateTask = (projectId, taskId, updates) => {
    const updated = projects.map(p => 
      p.id === projectId ? { ...p, tasks: p.tasks.map(t => t.id === taskId ? { ...t, ...updates } : t) } : p
    );
    setProjects(updated);
    setSelectedProject(updated.find(p => p.id === projectId));
  };

  const deleteTask = (projectId, taskId) => {
    const updated = projects.map(p => 
      p.id === projectId ? { ...p, tasks: p.tasks.filter(t => t.id !== taskId) } : p
    );
    setProjects(updated);
    setSelectedProject(updated.find(p => p.id === projectId));
  };

  const getProgress = (project) => {
    if (project.tasks.length === 0) return 0;
    return Math.round((project.tasks.filter(t => t.status === 'completed').length / project.tasks.length) * 100);
  };

  const getTasksByStatus = (status) => {
    const tasks = [];
    projects.forEach(project => {
      project.tasks.forEach(task => {
        if (status === 'all' || task.status === status) {
          tasks.push({ ...task, projectName: project.name, projectId: project.id, projectCategory: project.category });
        }
      });
    });
    return tasks;
  };

  const getOverdueTasks = () => {
    const tasks = [];
    projects.forEach(project => {
      project.tasks.forEach(task => {
        if (task.status !== 'completed' && task.dueDate && new Date(task.dueDate) < new Date()) {
          tasks.push({ ...task, projectName: project.name, projectId: project.id, projectCategory: project.category });
        }
      });
    });
    return tasks;
  };

  const stats = {
    totalTasks: projects.reduce((sum, p) => sum + p.tasks.length, 0),
    completedTasks: projects.reduce((sum, p) => sum + p.tasks.filter(t => t.status === 'completed').length, 0),
    inProgressTasks: projects.reduce((sum, p) => sum + p.tasks.filter(t => t.status === 'in-progress').length, 0),
    overdueTasks: projects.reduce((sum, p) => sum + p.tasks.filter(t => t.status !== 'completed' && t.dueDate && new Date(t.dueDate) < new Date()).length, 0)
  };

  const filtered = projects.filter(p => {
    const search = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const category = filterCategory === 'all' || p.category === filterCategory;
    return search && category;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header matching SlimFile exactly */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-2xl font-bold text-black">SlimFile</h1>
                <p className="text-xs text-gray-500">Project Management</p>
              </div>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 text-sm rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 w-64"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        {activeView === 'dashboard' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 bg-red-50 rounded-xl"><BarChart3 className="h-6 w-6 text-red-600" /></div>
                <span className="text-3xl font-bold text-black">{stats.totalTasks}</span>
              </div>
              <p className="text-sm font-medium text-gray-600">Total Tasks</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 bg-green-50 rounded-xl"><CheckCircle2 className="h-6 w-6 text-green-600" /></div>
                <span className="text-3xl font-bold text-green-600">{stats.completedTasks}</span>
              </div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 bg-red-50 rounded-xl"><Clock className="h-6 w-6 text-red-600" /></div>
                <span className="text-3xl font-bold text-red-600">{stats.inProgressTasks}</span>
              </div>
              <p className="text-sm font-medium text-gray-600">In Progress</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 bg-orange-50 rounded-xl"><AlertCircle className="h-6 w-6 text-orange-600" /></div>
                <span className="text-3xl font-bold text-orange-600">{stats.overdueTasks}</span>
              </div>
              <p className="text-sm font-medium text-gray-600">Overdue</p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mb-8 flex items-center gap-3">
          <button
            onClick={() => { setActiveView('dashboard'); setSelectedProject(null); }}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeView === 'dashboard' ? 'bg-black text-white' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'}`}
          >
            <Folder className="inline h-4 w-4 mr-2" />All Projects
          </button>
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="px-5 py-2.5 rounded-full border border-gray-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500 bg-white hover:bg-gray-50 transition-all">
            <option value="all">All Categories</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <button onClick={() => setShowAddProject(true)} className="ml-auto px-5 py-2.5 rounded-full text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition-all shadow-sm">
            <Plus className="inline h-4 w-4 mr-2" />New Project
          </button>
        </div>

        {/* Tasks View */}
        {activeView === 'tasks' && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg">
            <div className="p-8 border-b border-gray-100">
              <button onClick={() => setActiveView('dashboard')} className="text-red-600 hover:text-red-700 mb-6 text-sm font-medium">← Back to Dashboard</button>
              <h2 className="text-4xl font-bold text-black mb-3">
                {selectedStat === 'all' ? 'All Tasks' : 
                 selectedStat === 'completed' ? 'Completed Tasks' :
                 selectedStat === 'in-progress' ? 'In Progress Tasks' :
                 'Overdue Tasks'}
              </h2>
              <p className="text-gray-600 text-lg">
                {selectedStat === 'all' ? `Showing all ${stats.totalTasks} tasks across all projects` :
                 selectedStat === 'completed' ? `${stats.completedTasks} tasks completed` :
                 selectedStat === 'in-progress' ? `${stats.inProgressTasks} tasks currently in progress` :
                 `${stats.overdueTasks} tasks past their due date`}
              </p>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                {(selectedStat === 'overdue' ? getOverdueTasks() : getTasksByStatus(selectedStat === 'all' ? 'all' : selectedStat)).map(task => (
                  <div key={`${task.projectId}-${task.id}`} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <span className={`text-xs px-3 py-1.5 rounded-full font-medium border inline-block mb-2 ${getCategoryColor(task.projectCategory)}`}>
                          {task.projectCategory}
                        </span>
                        <h3 className="text-lg font-bold text-black mb-1">{task.title}</h3>
                        <p className="text-sm text-gray-600">
                          <strong>Project:</strong> {task.projectName}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          const project = projects.find(p => p.id === task.projectId);
                          setSelectedProject(project);
                          setActiveView('project');
                        }}
                        className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all text-sm font-medium ml-4"
                      >
                        View Project
                      </button>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-4 pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Assignee</p>
                        <p className="text-sm font-medium text-gray-900 flex items-center gap-1">
                          <Users className="h-3.5 w-3.5" />
                          {task.assignee || 'Unassigned'}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Priority</p>
                        <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Status</p>
                        <span className="text-sm font-medium text-gray-900 capitalize flex items-center gap-1.5">
                          <div className={`w-2.5 h-2.5 rounded-full ${getStatusColor(task.status)}`} />
                          {task.status === 'in-progress' ? 'In Progress' : task.status}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Due Date</p>
                        {task.dueDate ? (
                          <p className="text-sm font-medium text-gray-900 flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {new Date(task.dueDate).toLocaleDateString()}
                          </p>
                        ) : (
                          <p className="text-sm text-gray-400">No date</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        {activeView === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(project => {
              const progress = getProgress(project);
              return (
                <div key={project.id} className="bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all group">
                  <div className="p-6">
                    <div className="flex justify-between mb-4">
                      <span className="text-xs px-3 py-1.5 rounded-full font-medium bg-red-50 text-red-700 border border-red-200">{project.category}</span>
                      <button onClick={() => deleteProject(project.id)} className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{project.name}</h3>
                    <p className="text-sm text-gray-600 mb-5">{project.description}</p>
                    <div className="mb-5">
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-gray-600 font-medium">Progress</span>
                        <span className="text-black font-bold">{progress}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full transition-all" style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-5 pt-4 border-t border-gray-100">
                      <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{project.tasks.length} tasks</span>
                      <span className="flex items-center gap-1.5"><Users className="h-4 w-4" />{new Set(project.tasks.map(t => t.assignee).filter(Boolean)).size} members</span>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setActiveView('project');
                      }}
                      className="w-full py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all text-sm font-medium shadow-sm hover:shadow-md"
                    >
                      View Project
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Project Detail */}
        {activeView === 'project' && selectedProject && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg">
            <div className="p-8 border-b border-gray-100">
              <button onClick={() => setActiveView('dashboard')} className="text-red-600 hover:text-red-700 mb-6 text-sm font-medium">← Back</button>
              <div className="mb-6">
                <span className="text-sm px-3 py-1.5 rounded-full font-medium bg-red-50 text-red-700 border border-red-200 inline-block mb-4">{selectedProject.category}</span>
                <h2 className="text-4xl font-bold text-black mb-3">{selectedProject.name}</h2>
                <p className="text-gray-600 text-lg">{selectedProject.description}</p>
              </div>
              <button onClick={() => setShowAddTask(true)} className="px-5 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all text-sm font-medium shadow-sm hover:shadow-md">
                <Plus className="inline h-4 w-4 mr-2" />Add Task
              </button>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {['todo', 'in-progress', 'completed'].map(status => (
                  <div key={status} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="font-bold text-black mb-5 capitalize flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${status === 'completed' ? 'bg-green-500' : status === 'in-progress' ? 'bg-red-500' : 'bg-gray-300'}`} />
                      {status === 'in-progress' ? 'In Progress' : status}
                      <span className="ml-auto bg-white text-gray-700 text-xs px-3 py-1 rounded-full font-bold">{selectedProject.tasks.filter(t => t.status === status).length}</span>
                    </h3>
                    <div className="space-y-4">
                      {selectedProject.tasks.filter(t => t.status === status).map(task => (
                        <div key={task.id} className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow">
                          {editingTask?.id === task.id ? (
                            <div className="space-y-3">
                              <input type="text" value={editingTask.title} onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })} className="w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-red-500" />
                              <select value={editingTask.assignee} onChange={(e) => setEditingTask({ ...editingTask, assignee: e.target.value })} className="w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-red-500">
                                <option value="">Select member</option>
                                {Object.entries(teamMembers).map(([dept, members]) => (
                                  <optgroup key={dept} label={dept}>
                                    {members.map(m => <option key={m.name} value={m.name}>{m.name} - {m.role}</option>)}
                                  </optgroup>
                                ))}
                              </select>
                              <select value={editingTask.priority} onChange={(e) => setEditingTask({ ...editingTask, priority: e.target.value })} className="w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-red-500">
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                              </select>
                              <input type="date" value={editingTask.dueDate} onChange={(e) => setEditingTask({ ...editingTask, dueDate: e.target.value })} className="w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-red-500" />
                              <div className="flex gap-2">
                                <button onClick={() => { updateTask(selectedProject.id, task.id, editingTask); setEditingTask(null); }} className="flex-1 py-2.5 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all text-sm font-medium shadow-sm">
                                  <Check className="inline h-4 w-4 mr-1" /> Save
                                </button>
                                <button onClick={() => setEditingTask(null)} className="flex-1 py-2.5 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all text-sm font-medium">
                                  <X className="inline h-4 w-4 mr-1" /> Cancel
                                </button>
                              </div>
                            </div>
                          ) : (
                            <>
                              <div className="flex justify-between mb-3">
                                <h4 className="font-semibold text-black text-sm">{task.title}</h4>
                                <div className="flex gap-1">
                                  <button onClick={() => setEditingTask(task)} className="text-red-600"><Edit2 className="h-4 w-4" /></button>
                                  <button onClick={() => deleteTask(selectedProject.id, task.id)} className="text-gray-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
                                </div>
                              </div>
                              <div className="text-xs text-gray-600 mb-3 flex items-center gap-1.5"><Users className="h-3.5 w-3.5" />{task.assignee || 'Unassigned'}</div>
                              <div className="flex justify-between mb-4">
                                <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${task.priority === 'high' ? 'bg-red-50 text-red-600 border-red-200' : task.priority === 'medium' ? 'bg-orange-50 text-orange-600 border-orange-200' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>{task.priority}</span>
                                {task.dueDate && <span className="text-xs text-gray-500 flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{new Date(task.dueDate).toLocaleDateString()}</span>}
                              </div>
                              <select value={task.status} onChange={(e) => updateTask(selectedProject.id, task.id, { status: e.target.value })} className="w-full px-3 py-2 text-xs border rounded-lg focus:ring-2 focus:ring-red-500">
                                <option value="todo">To Do</option>
                                <option value="in-progress">In Progress</option>
                                <option value="completed">Completed</option>
                              </select>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Modals */}
        {showAddProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 w-full max-w-md">
              <h3 className="text-3xl font-bold mb-6 text-black">New Project</h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input type="text" value={newProject.name} onChange={(e) => setNewProject({ ...newProject, name: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-red-500" placeholder="Project name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                  <select value={newProject.category} onChange={(e) => setNewProject({ ...newProject, category: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-red-500">
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea value={newProject.description} onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-red-500" rows="3" />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={addProject} className="flex-1 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all font-semibold shadow-sm hover:shadow-md">Create Project</button>
                <button onClick={() => setShowAddProject(false)} className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all font-semibold">Cancel</button>
              </div>
            </div>
          </div>
        )}

        {showAddTask && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 w-full max-w-md">
              <h3 className="text-3xl font-bold mb-6 text-black">New Task</h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                  <input type="text" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-red-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Assignee</label>
                  <select value={newTask.assignee} onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-red-500">
                    <option value="">Select member</option>
                    {Object.entries(teamMembers).map(([dept, members]) => (
                      <optgroup key={dept} label={dept}>
                        {members.map(m => <option key={m.name} value={m.name}>{m.name} - {m.role}</option>)}
                      </optgroup>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Priority</label>
                  <select value={newTask.priority} onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-red-500">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Due Date</label>
                  <input type="date" value={newTask.dueDate} onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-red-500" />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={addTask} className="flex-1 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all font-semibold shadow-sm hover:shadow-md">Create Task</button>
                <button onClick={() => setShowAddTask(false)} className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all font-semibold">Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}