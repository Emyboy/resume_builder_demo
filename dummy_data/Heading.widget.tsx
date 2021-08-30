import React, { ReactElement, useState } from 'react'
import Toolbar from '../src/components/Toolbar/Toolbar';
import { JumbotronType } from '../src/components/Widgets/Jumbotron/Jombotron.type';

interface Props {
  widget_data: JumbotronType;
}

export default function HeadingWidget({}: Props): ReactElement {
  const [showTools, setShowTools] = useState<boolean>(false);
    return (
      <>
        <div className="container" onClick={() => setShowTools(!showTools)}>
          <div className="row">
            <div className="col-12">
              <div className="page-title-box p-3">
                <h3 className="page-title">Dashboard</h3>
              </div>
            </div>
          </div>
        </div>
        {showTools ? (
          <Toolbar>
            <h2 className="text-white">Heading</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              corrupti doloribus inventore nisi quae sapiente quisquam cum
              perspiciatis autem nesciunt vero error! Veritatis nihil aliquid
              recusandae commodi repellat nulla ex.
            </p>
          </Toolbar>
        ) : null}
      </>
    );
}
