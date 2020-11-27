import {
  //ISerializers,
  WidgetModel,
  WidgetView,
} from '@jupyter-widgets/base';

// eslint-disable-next-line @typescript-eslint/no-var-requires
//const widgets = require('@jupyter-widgets/base');

import { MODULE_NAME, MODULE_VERSION } from './version';

// Import the CSS
import '../css/widget.css';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const camelcaseKeys = require('camelcase-keys');


export class RepresentationModel extends WidgetModel {
  defaults() {
    return {
      ...super.defaults(),

      color_scheme: "chainname",
      color_scale: '',
      color_reverse: false,
      color_value: 0x909090,
      color_domain: undefined,
      color_mode: 'hcl',
      name: null,
      visible: true,

      _type: "",
      _model_module: MODULE_NAME,
      _model_module_version: MODULE_VERSION,
      _view_name: 'RepresentationView',
      _view_module: MODULE_NAME,
      _view_module_version: MODULE_VERSION,
    };
  }
}

export class RepresentationView extends WidgetView {
  stage_obj: any;
  component_obj: any;
  representation_obj: any;
  rendered = false;

  initialize(parameters: any): void {
    super.initialize(parameters);
    this.stage_obj = this.options.stage_obj;
    this.component_obj = this.options.component_obj;

    this.model.on('msg:custom', this.handle_custom_message.bind(this));
    this.model.on('change', this.parameters_changed.bind(this));
    this.model.on('change:visible', this.visible_changed.bind(this));
  }

  visible_changed() {
    if (this.representation_obj) {
      this.representation_obj.setVisibility(this.model.get('visible'));
    }
  }

  handle_custom_message(content: any): void {
    if (this.stage_obj) {
    }
  }

  get_parameters(): any {
    return camelcaseKeys(this.model.attributes, { exclude: [/^_/] });
  }

  parameters_changed() {
    if (this.representation_obj) {
     this.representation_obj.setParameters(this.get_parameters());
     this.representation_obj.build();
    }
  }

  render() {
    super.render();
    if (this.component_obj && !this.representation_obj) {
      console.log('render ' + this.model.get('_type') + ' ' + this.cid);
      this.representation_obj =
        this.component_obj.addRepresentation(this.model.get('_type'),
                                             this.get_parameters());
    }
  }

  remove() {
    super.remove();
    if (this.component_obj && this.representation_obj) {
      console.log('remove ' + this.model.get('_type') + ' ' + this.cid);
      this.component_obj.removeRepresentation(this.representation_obj);
      this.representation_obj = null;
    }
  }
}


export class StructureRepresentationModel extends RepresentationModel {
  defaults() {
    return {
      ...super.defaults(),

      sele: ""
    };
  }
}


export class CartoonModel extends StructureRepresentationModel {
  defaults() {
    return {
      ...super.defaults(),

      _type: 'cartoon',
      _model_name: 'CartoonModel'
    };
  }
}


export class BallAndStickModel extends StructureRepresentationModel {
  defaults() {
    return {
      ...super.defaults(),

      sphere_detail: 2,

      _type: 'ball+stick',
      _model_name: 'BallAndStickModel'
    };
  }
}


export class BackboneModel extends BallAndStickModel {
  defaults() {
    return {
      ...super.defaults(),

      _type: 'backbone',
      _model_name: 'BackboneModel'
    };
  }
}


export class BaseModel extends BallAndStickModel {
  defaults() {
    return {
      ...super.defaults(),

      _type: 'base',
      _model_name: 'BaseModel'
    };
  }
}


export class LicoriceModel extends BallAndStickModel {
  defaults() {
    return {
      ...super.defaults(),

      _type: 'licorice',
      _model_name: 'LicoriceModel'
    };
  }
}


export class LineModel extends StructureRepresentationModel {
  defaults() {
    return {
      ...super.defaults(),

      _type: 'line',
      _model_name: 'LineModel'
    };
  }
}


export class MeasurementRepresentationModel extends RepresentationModel {
  defaults() {
    return {
      ...super.defaults(),

      label_size: 2.0,
      label_color: "white",
      label_visible: true,
      label_z_offset: 0.5
    };
  }
}


export class DihedralModel extends MeasurementRepresentationModel {
  defaults() {
    return {
      ...super.defaults(),

      atom_quad: [],

      _type: 'dihedral',
      _model_name: 'DihedralModel'
    };
  }
}


export class RibbonModel extends StructureRepresentationModel {
  defaults() {
    return {
      ...super.defaults(),

      _type: 'ribbon',
      _model_name: 'RibbonModel'
    };
  }
}


export class SpacefillModel extends StructureRepresentationModel {
  defaults() {
    return {
      ...super.defaults(),

      _type: 'spacefill',
      _model_name: 'SpacefillModel'
    };
  }
}


export class SurfaceModel extends RepresentationModel {
  defaults() {
    return {
      ...super.defaults(),

      use_worker: false,

      _type: 'surface',
      _model_name: 'SurfaceModel'
    };
  }
}



