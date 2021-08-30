import React, { ReactElement } from 'react'
import { JumbotronType } from '../src/components/Widgets/Jumbotron/Jombotron.type';

interface Props {
  widget_data: JumbotronType;
}

export default function HeadingWidget({}: Props): ReactElement {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box p-3">
              <h3 className="page-title">Dashboard</h3>
            </div>
          </div>
        </div>
      </div>
    );
}
