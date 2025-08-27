import React, { useState } from 'react';
import { Search, Brain, Users, Shield, Star, TrendingUp, Zap, ArrowRight, Menu, X } from 'lucide-react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Browse Models', id: 'browse' },
    { name: 'AI Teams', id: 'teams' },
    { name: 'Workspace', id: 'workspace' },
    { name: 'Dashboard', id: 'dashboard' },
  ];

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <HomePage />;
      case 'browse':
        return <BrowseModels />;
      case 'teams':
        return <AITeams />;
      case 'workspace':
        return <Workspace />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-medium">quantrel</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    currentView === item.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-foreground hover:bg-accent'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline">Sign In</Button>
              <Button>Get Started</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentView(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-3 py-2 w-full text-left rounded-md transition-colors ${
                    currentView === item.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-foreground hover:bg-accent'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 pb-2 border-t border-border mt-4">
                <Button variant="outline" className="w-full mb-2">Sign In</Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

// Home Page Component
function HomePage() {
  const features = [
    {
      icon: Search,
      title: 'Discover Perfect AI Models',
      description: 'Find AI models tailored to your specific needs with detailed reviews and performance metrics.'
    },
    {
      icon: Users,
      title: 'Build AI Teams',
      description: 'Combine multiple AI models and agents to tackle complex, multi-faceted projects.'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Protected transactions with escrow services ensuring fair payment for quality work.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Track model performance and ROI with comprehensive analytics and reporting.'
    }
  ];

  const topModels = [
    {
      name: 'CodeMaster Pro',
      category: 'Code Generation',
      rating: 4.9,
      reviews: 127,
      price: '$0.05/request',
      provider: 'TechAI Labs',
      description: 'Advanced code generation model for multiple programming languages'
    },
    {
      name: 'ContentCraft',
      category: 'Content Writing',
      rating: 4.8,
      reviews: 89,
      price: '$0.03/word',
      provider: 'WriterBot Inc',
      description: 'High-quality content creation for blogs, marketing, and technical writing'
    },
    {
      name: 'DataInsight',
      category: 'Data Analysis',
      rating: 4.7,
      reviews: 156,
      price: '$2.50/analysis',
      provider: 'Analytics AI',
      description: 'Advanced data analysis and visualization for business intelligence'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              The Future of AI <span className="text-primary">Marketplace</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Connect with the world's best AI models and agents. Find the perfect AI solution for your needs, 
              build powerful AI teams, and get work done with guaranteed quality and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Find AI Models <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Become a Provider
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose quantrel?
            </h2>
            <p className="text-lg text-muted-foreground">
              The most trusted platform for AI model discovery and collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Models Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Top-Rated AI Models
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover the most popular and highly-rated AI models in our marketplace
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topModels.map((model, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{model.name}</CardTitle>
                      <Badge variant="secondary" className="mt-1">{model.category}</Badge>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">{model.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{model.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-muted-foreground">by {model.provider}</span>
                    <span className="text-lg font-medium text-primary">{model.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{model.reviews} reviews</span>
                    <Button size="sm">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your AI Workflow?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of businesses already using quantrel to accelerate their AI adoption
          </p>
          <Button size="lg" className="px-8">
            Get Started Today <Zap className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}

// Browse Models Component
function BrowseModels() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = [
    'All Categories',
    'Code Generation',
    'Content Writing',
    'Data Analysis',
    'Image Generation',
    'Language Translation',
    'Chatbots',
    'Audio Processing',
    'Computer Vision'
  ];

  const models = [
    {
      id: 1,
      name: 'CodeMaster Pro',
      category: 'Code Generation',
      rating: 4.9,
      reviews: 127,
      price: '$0.05/request',
      provider: 'TechAI Labs',
      description: 'Advanced code generation model supporting 20+ programming languages with excellent documentation generation.',
      tags: ['Python', 'JavaScript', 'React', 'Node.js'],
      responseTime: '< 2s',
      accuracy: '98%'
    },
    {
      id: 2,
      name: 'ContentCraft',
      category: 'Content Writing',
      rating: 4.8,
      reviews: 89,
      price: '$0.03/word',
      provider: 'WriterBot Inc',
      description: 'Professional content creation for blogs, marketing copy, and technical documentation.',
      tags: ['SEO', 'Blog Posts', 'Marketing', 'Technical'],
      responseTime: '< 5s',
      accuracy: '95%'
    },
    {
      id: 3,
      name: 'DataInsight',
      category: 'Data Analysis',
      rating: 4.7,
      reviews: 156,
      price: '$2.50/analysis',
      provider: 'Analytics AI',
      description: 'Comprehensive data analysis with visualization and business intelligence insights.',
      tags: ['Analytics', 'Visualization', 'Reports', 'BI'],
      responseTime: '< 30s',
      accuracy: '92%'
    },
    {
      id: 4,
      name: 'ImageGen Ultra',
      category: 'Image Generation',
      rating: 4.6,
      reviews: 203,
      price: '$0.10/image',
      provider: 'Visual AI Studio',
      description: 'High-quality image generation for marketing, design, and creative projects.',
      tags: ['Marketing', 'Design', 'Creative', 'HD'],
      responseTime: '< 10s',
      accuracy: '90%'
    },
    {
      id: 5,
      name: 'TranslateMaster',
      category: 'Language Translation',
      rating: 4.8,
      reviews: 342,
      price: '$0.02/word',
      provider: 'LinguaAI',
      description: 'Professional translation service supporting 100+ languages with cultural context.',
      tags: ['Translation', 'Localization', '100+ Languages'],
      responseTime: '< 3s',
      accuracy: '97%'
    },
    {
      id: 6,
      name: 'ChatBot Pro',
      category: 'Chatbots',
      rating: 4.5,
      reviews: 78,
      price: '$1.00/conversation',
      provider: 'ConversaAI',
      description: 'Intelligent chatbot for customer service and support with natural conversations.',
      tags: ['Customer Service', 'Support', 'Natural Language'],
      responseTime: '< 1s',
      accuracy: '93%'
    }
  ];

  const filteredModels = models.filter(model => {
    const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         model.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         model.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || model.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Browse AI Models</h1>
        <p className="text-lg text-muted-foreground">
          Discover and compare AI models from top providers worldwide
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search models, providers, or capabilities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-64 h-12">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.slice(1).map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger className="w-full md:w-48 h-12">
              <SelectValue placeholder="Price range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Prices</SelectItem>
              <SelectItem value="low">Under $0.05</SelectItem>
              <SelectItem value="medium">$0.05 - $1.00</SelectItem>
              <SelectItem value="high">Over $1.00</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results */}
      <div className="mb-4">
        <p className="text-muted-foreground">
          Showing {filteredModels.length} of {models.length} models
        </p>
      </div>

      {/* Models Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredModels.map((model) => (
          <Card key={model.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-xl">{model.name}</CardTitle>
                    <Badge variant="secondary">{model.category}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>by {model.provider}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span>{model.rating} ({model.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-medium text-primary">{model.price}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{model.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {model.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Response Time:</span>
                  <div className="font-medium">{model.responseTime}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Accuracy:</span>
                  <div className="font-medium">{model.accuracy}</div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1">View Details</Button>
                <Button variant="outline">Add to Team</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredModels.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">
            No models found matching your criteria. Try adjusting your search or filters.
          </p>
        </div>
      )}
    </div>
  );
}

// AI Teams Component
function AITeams() {
  const [activeTab, setActiveTab] = useState('create');

  const teamTemplates = [
    {
      name: 'Content Creation Squad',
      description: 'Complete content pipeline from research to publication',
      models: ['Research AI', 'Content Writer', 'SEO Optimizer', 'Image Generator'],
      useCase: 'Blog posts, articles, social media content',
      estimatedCost: '$12-25 per project'
    },
    {
      name: 'Development Team',
      description: 'Full-stack development from design to deployment',
      models: ['Code Generator', 'Bug Detector', 'Documentation Writer', 'Test Generator'],
      useCase: 'Web applications, APIs, mobile apps',
      estimatedCost: '$50-150 per project'
    },
    {
      name: 'Data Analysis Team',
      description: 'End-to-end data processing and insights generation',
      models: ['Data Cleaner', 'Statistical Analyzer', 'Visualization AI', 'Report Generator'],
      useCase: 'Business intelligence, research reports',
      estimatedCost: '$25-75 per analysis'
    }
  ];

  const myTeams = [
    {
      id: 1,
      name: 'Marketing Content Team',
      status: 'Active',
      members: 4,
      completedTasks: 23,
      currentTask: 'Blog post series about AI trends',
      efficiency: 94
    },
    {
      id: 2,
      name: 'Code Review Squad',
      status: 'Active',
      members: 3,
      completedTasks: 45,
      currentTask: 'React component optimization',
      efficiency: 87
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">AI Teams</h1>
        <p className="text-lg text-muted-foreground">
          Build powerful AI teams by combining multiple models for complex tasks
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="create">Create Team</TabsTrigger>
          <TabsTrigger value="templates">Team Templates</TabsTrigger>
          <TabsTrigger value="my-teams">My Teams</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Build Your AI Team</CardTitle>
              <p className="text-muted-foreground">
                Select AI models and define how they work together to complete your project
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Team Name</label>
                <Input placeholder="Enter team name" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project Description</label>
                <textarea 
                  className="w-full p-3 border border-border rounded-md resize-none"
                  rows={3}
                  placeholder="Describe what you want your AI team to accomplish"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-4">Select AI Models</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['CodeMaster Pro', 'ContentCraft', 'DataInsight', 'ImageGen Ultra'].map((model) => (
                    <div key={model} className="border border-border rounded-lg p-4 hover:bg-accent cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded" />
                        <div>
                          <div className="font-medium">{model}</div>
                          <div className="text-sm text-muted-foreground">Click to add to team</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline">Save as Template</Button>
                <Button>Create AI Team</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamTemplates.map((template, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{template.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium mb-2">Team Members:</div>
                      <div className="flex flex-wrap gap-1">
                        {template.models.map((model, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {model}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium">Best for:</div>
                      <div className="text-sm text-muted-foreground">{template.useCase}</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium">Estimated Cost:</div>
                      <div className="text-sm text-primary">{template.estimatedCost}</div>
                    </div>
                    
                    <Button className="w-full">Use Template</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my-teams" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {myTeams.map((team) => (
              <Card key={team.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{team.name}</CardTitle>
                      <Badge variant={team.status === 'Active' ? 'default' : 'secondary'} className="mt-1">
                        {team.status}
                      </Badge>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      {team.members} members
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium">Current Task:</div>
                      <div className="text-sm text-muted-foreground">{team.currentTask}</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Completed Tasks</div>
                        <div className="font-medium">{team.completedTasks}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Efficiency</div>
                        <div className="font-medium text-green-600">{team.efficiency}%</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">View Details</Button>
                      <Button size="sm" variant="outline">Manage</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Workspace Component
function Workspace() {
  const [activeProject, setActiveProject] = useState('blog-series');

  const projects = [
    {
      id: 'blog-series',
      name: 'AI Trends Blog Series',
      team: 'Marketing Content Team',
      status: 'In Progress',
      progress: 75,
      dueDate: '2024-01-15'
    },
    {
      id: 'react-app',
      name: 'E-commerce React App',
      team: 'Development Team',
      status: 'Review',
      progress: 90,
      dueDate: '2024-01-20'
    }
  ];

  const activities = [
    {
      timestamp: '2 minutes ago',
      action: 'ContentCraft completed "Introduction section"',
      type: 'completion'
    },
    {
      timestamp: '15 minutes ago',
      action: 'SEO Optimizer suggested keyword improvements',
      type: 'suggestion'
    },
    {
      timestamp: '1 hour ago',
      action: 'Research AI delivered market analysis report',
      type: 'delivery'
    },
    {
      timestamp: '2 hours ago',
      action: 'ImageGen Ultra generated 3 blog header images',
      type: 'generation'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">AI Workspace</h1>
        <p className="text-lg text-muted-foreground">
          Monitor your AI teams and track project progress in real-time
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Project Overview */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div 
                    key={project.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      activeProject === project.id ? 'bg-accent border-primary' : 'border-border hover:bg-accent/50'
                    }`}
                    onClick={() => setActiveProject(project.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-medium">{project.name}</div>
                        <div className="text-sm text-muted-foreground">{project.team}</div>
                      </div>
                      <Badge variant={project.status === 'In Progress' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Due: {project.dueDate}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Details */}
          <Card>
            <CardHeader>
              <CardTitle>Project Details: AI Trends Blog Series</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="output">Output</TabsTrigger>
                  <TabsTrigger value="team">Team Performance</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">5</div>
                      <div className="text-sm text-muted-foreground">Articles Completed</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">15</div>
                      <div className="text-sm text-muted-foreground">Images Generated</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">98%</div>
                      <div className="text-sm text-muted-foreground">Quality Score</div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="output" className="space-y-4">
                  <div className="space-y-4">
                    <div className="border border-border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">The Future of AI in Business</h4>
                        <Badge variant="outline">Completed</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        A comprehensive overview of how AI is transforming modern business operations...
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">View</Button>
                        <Button size="sm" variant="outline">Edit</Button>
                        <Button size="sm" variant="outline">Download</Button>
                      </div>
                    </div>
                    
                    <div className="border border-border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">AI Ethics and Governance</h4>
                        <Badge>In Progress</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Exploring the ethical considerations and governance frameworks for AI implementation...
                      </p>
                      <div className="w-full bg-muted rounded-full h-2 mb-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }} />
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Preview</Button>
                        <Button size="sm" variant="outline">Provide Feedback</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="team" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: 'Research AI', efficiency: 95, tasksCompleted: 8 },
                      { name: 'ContentCraft', efficiency: 92, tasksCompleted: 5 },
                      { name: 'SEO Optimizer', efficiency: 88, tasksCompleted: 7 },
                      { name: 'ImageGen Ultra', efficiency: 90, tasksCompleted: 15 }
                    ].map((member) => (
                      <div key={member.name} className="border border-border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-medium">{member.name}</div>
                          <div className="text-sm text-green-600">{member.efficiency}%</div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {member.tasksCompleted} tasks completed
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 mt-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${member.efficiency}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Activity Feed */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'completion' ? 'bg-green-500' :
                      activity.type === 'suggestion' ? 'bg-blue-500' :
                      activity.type === 'delivery' ? 'bg-purple-500' : 'bg-orange-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Create New Team
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Zap className="mr-2 h-4 w-4" />
                Start New Project
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="mr-2 h-4 w-4" />
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Dashboard Component
function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Dashboard</h1>
        <p className="text-lg text-muted-foreground">
          Overview of your AI marketplace activity and performance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Spent</p>
                <p className="text-2xl font-bold">$1,247</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Projects</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <Zap className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">AI Teams</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <Users className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
                <p className="text-2xl font-bold">94%</p>
              </div>
              <Star className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { model: 'CodeMaster Pro', amount: '$15.50', date: '2024-01-10', status: 'Completed' },
                { model: 'ContentCraft', amount: '$8.25', date: '2024-01-09', status: 'Completed' },
                { model: 'DataInsight', amount: '$22.00', date: '2024-01-08', status: 'Processing' },
                { model: 'ImageGen Ultra', amount: '$5.00', date: '2024-01-07', status: 'Completed' }
              ].map((transaction, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                  <div>
                    <div className="font-medium">{transaction.model}</div>
                    <div className="text-sm text-muted-foreground">{transaction.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{transaction.amount}</div>
                    <Badge variant={transaction.status === 'Completed' ? 'default' : 'secondary'} className="text-xs">
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Favorite Models</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'CodeMaster Pro', uses: 23, rating: 4.9 },
                { name: 'ContentCraft', uses: 18, rating: 4.8 },
                { name: 'DataInsight', uses: 12, rating: 4.7 },
                { name: 'ImageGen Ultra', uses: 8, rating: 4.6 }
              ].map((model, index) => (
                <div key={index} className="flex justify-between items-center py-2">
                  <div>
                    <div className="font-medium">{model.name}</div>
                    <div className="text-sm text-muted-foreground">{model.uses} uses</div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm">{model.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}