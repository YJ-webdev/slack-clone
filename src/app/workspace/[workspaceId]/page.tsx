interface WorkspaceIdPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdPage = ({ params }: WorkspaceIdPageProps) => {
  return <div>Workspace {params.workspaceId}</div>;
};

export default WorkspaceIdPage;
