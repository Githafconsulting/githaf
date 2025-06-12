
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '@/components/portfolio/portfolio-constants';
import Layout from '@/components/Layout';

const ProjectViewer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const project = projects.find(p => p.id === parseInt(id || '0'));

  if (!project) {
    return (
      <Layout title="Project Not Found">
        <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
            <Link 
              to="/web-development" 
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const projectUrl = project.lovableUrl || project.url;

  if (!projectUrl) {
    return (
      <Layout title={`${project.title} - Project Viewer`}>
        <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
            <p className="text-muted-foreground mb-6">This project is not available for preview.</p>
            <Link 
              to="/web-development" 
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <Layout 
      title={`${project.title} - Project Viewer`}
      description={project.description}
    >
      <div className="min-h-screen bg-background pt-16">
        {/* Header */}
        <div className="bg-background border-b sticky top-16 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link 
                  to="/web-development" 
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Portfolio
                </Link>
                <div>
                  <h1 className="text-xl font-semibold">{project.title}</h1>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </div>
              {project.url && (
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Site
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Project Viewer */}
        <div className="relative" style={{ height: 'calc(100vh - 140px)' }}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading project...</p>
              </div>
            </div>
          )}
          
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-background">
              <div className="text-center">
                <h2 className="text-lg font-semibold mb-2">Failed to load project</h2>
                <p className="text-muted-foreground mb-4">
                  Unable to display the project. Please try again later.
                </p>
                <button 
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          <iframe
            src={projectUrl}
            className="w-full h-full border-0"
            title={project.title}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProjectViewer;
