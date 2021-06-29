import projectsService from 'services/api/projects/projectsService';
import {
  IProject,
  IProjectsModelState,
} from 'types/services/models/projects/projectsModel';
import createModel from 'services/models/model';

const model = createModel<IProjectsModelState>({});

function getProjectsData() {
  const { call, abort } = projectsService.getProjectsData();

  model.init();
  call().then((data: IProject) => {
    model.setState({
      project: data,
    });
  });

  return {
    abort,
  };
}

const projectsModel = {
  ...model,
  getProjectsData,
};

export default projectsModel;