import React from 'react';
import defineBlock from '../../utils/defineBlock';
import PageBase from './PageBase';
import PageTitle from './PageTitle';
import ConstructionAlert from './ConstructionAlert';

const bem = defineBlock('ConstructionPage');

const ConstructionPage = () => (
  <PageBase className={bem()}>
    <PageTitle text="Construction" />
    <ConstructionAlert />
  </PageBase>
);

export default ConstructionPage;
