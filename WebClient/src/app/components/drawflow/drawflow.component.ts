import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimeIcons,MenuItem } from 'primeng/api';
import { BrowserModule } from '@angular/platform-browser';
import Drawflow from 'drawflow';

@Component({
  standalone: true,
  selector: 'app-drawflow',
  templateUrl: './drawflow.component.html',
  styleUrl: './drawflow.component.css',
  imports: [CommonModule, FormsModule],
})
export class DrawflowComponent implements OnInit, AfterViewInit, OnChanges {
  @Input()  nodes: any[] =[];
  @Input()  drawingData: string = "";
  @Input()  locked: boolean = false;
  @Input()  showLock: boolean = true;
  @Input()  showNodes: boolean = false;
  @Input()  otherDetails: any;

  editor!: any;
  editDivHtml: HTMLElement = HTMLElement.prototype;
  editButtonShown: boolean = false;

  drawnNodes: any[] = [];
  selectedNodeId: string = "";
  selectedNode: any = {};

  lastMousePositionEv: any;

  nodeModal: ElementRef = ElementRef.prototype;
  @ViewChild('content') set setNodeModal(el: ElementRef) {
    this.nodeModal = el;
  }
  constructor(/*private modalService: NgbModal*/) {
    const dataToImport = {"drawflow":
      {"Home":
        {"data":
          {
            "1":{ "id":1,
              "name":"welcome",
              "data":{},
              "class":"welcome",
              "html":"\n    <div>\n      <div class=\"title-box\">👏 Welcome!!</div>\n      <div class=\"box\">\n [based on]       <p>Simple flow library <b>demo</b>\n        <a href=\"https://github.com/jerosoler/Drawflow\" target=\"_blank\">Drawflow</a> by <b>Jero Soler</b></p><br>\n\n        <p>Multiple input / outputs<br>\n           Data sync nodes<br>\n           Import / export<br>\n           Modules support<br>\n           Simple use<br>\n           Type: Fixed or Edit<br>\n           Events: view console<br>\n           Pure Javascript<br>\n        </p>\n        <br>\n        <p><b><u>Shortkeys:</u></b></p>\n        <p>\n        💠 Mouse Left Click == Move<br>\n ❌ Mouse Right == Del Option<br>\n        🔍 Ctrl + Wheel == Zoom<br>\n        📱 Mobile support<br>\n        ...</p>\n      </div>\n    </div>\n    ",
              "typenode": false, 
              "inputs":{},
              "outputs":{},
              "pos_x":100,
              "pos_y":50
            },
            "2":{
              "id":2,
              "name":"slack",
              "data":{},
              "class":"slack",
              "html":"\n          <div>\n            <div class=\"title-box\"><i class=\"fab fa-slack\"></i> Slack chat message&nbsp;&nbsp;   </div>\n          </div>\n          ",
              "typenode": false, 
              "inputs":{
                "input_1":{
                  "connections":[{
                    "node":"7","input":"output_1"
                  }]}
              },
              "outputs":{},
              "pos_x":800,
              "pos_y":57
            },
            "3":{
              "id":3,
              "name":"telegram",
              "data":{
                "channel":"channel_2"
              },
              "class":"telegram",
              "html":"\n          <div>\n            <div class=\"title-box\"><i class=\"fab fa-telegram-plane\"></i> Telegram bot</div>\n            <div class=\"box\">\n              <p>Send to telegram</p>\n              <p>select channel</p>\n              <select df-channel>\n                <option value=\"channel_1\">Channel 1</option>\n                <option value=\"channel_2\">Channel 2</option>\n                <option value=\"channel_3\">Channel 3</option>\n                <option value=\"channel_4\">Channel 4</option>\n              </select>\n            </div>\n          </div>\n          ",
              "typenode": false, 
              "inputs":{
                "input_1":{
                  "connections":[{
                    "node":"7","input":"output_1"
                  }]
                }
              },
              "outputs":{},
              "pos_x":932,
              "pos_y":184
            },
            "4":{
              "id":4,
              "name":"email",
              "data":{},
              "class":"email",
              "html":"\n            <div>\n              <div class=\"title-box\"><i class=\"fas fa-at\"></i> Send Email </div>\n            </div>\n            ",
              "typenode": false, 
              "inputs":{
                "input_1":{
                  "connections":[{
                    "node":"5","input":"output_1"
                  }]
                }
              },
              "outputs":{},
              "pos_x":1033,
              "pos_y":639
            },
            "5":{
              "id":5,
              "name":"template",
              "data":{
                "template":"Write your template"
              },
              "class":"template",
              "html":"\n            <div>\n              <div class=\"title-box\"><i class=\"fas fa-code\"></i> Template</div>\n              <div class=\"box\">\n                Ger Vars\n                <textarea df-template></textarea>\n                Output template with vars\n              </div>\n            </div>\n            ",
              "typenode": false, 
              "inputs":{
                "input_1":{
                  "connections":[{
                    "node":"6",
                    "input":"output_1"
                  }]
                }
              },
              "outputs":{
                "output_1":{
                  "connections":[{
                    "node":"4",
                    "output":"input_1"
                  }, {
                    "node":"11",
                    "output":"input_1"
                  }]
                }
              },
              "pos_x":407,
              "pos_y":504
            },
            "6":{
              "id":6,
              "name":"github",
              "data":{
                "name":"https://github.com/jerosoler/Drawflow"
              },
              "class":"github",
              "html":"\n          <div>\n            <div class=\"title-box\"><i class=\"fab fa-github \"></i> Github Stars</div>\n            <div class=\"box\">\n              <p>Enter repository url</p>\n            <input type=\"text\" df-name>\n            </div>\n          </div>\n          ",
              "typenode": false, 
              "inputs":{},
              "outputs":{
                "output_1":{
                  "connections":[{
                    "node":"5",
                    "output":"input_1"
                  }]
                }
              },
              "pos_x":141,
              "pos_y":591
            },
            "7":{
              "id":7,
              "name":"facebook",
              "data":{},
              "class":"facebook",
              "html":"\n        <div>\n          <div class=\"title-box\"><i class=\"fab fa-facebook\"></i> Facebook Message</div>\n        </div>\n        ",
              "typenode": false, 
              "inputs":{},
              "outputs":{
                "output_1":{
                  "connections":[{
                    "node":"2",
                    "output":"input_1"
                  },{
                    "node":"3",
                    "output":"input_1"
                  },{
                    "node":"11",
                    "output":"input_1"
                  }]
                }
              },
              "pos_x":447,
              "pos_y":87
            },
            "11":{
              "id":11,
              "name":"log",
              "data":{},
              "class":"log",
              "html":"\n            <div>\n              <div class=\"title-box\"><i class=\"fas fa-file-signature\"></i> Save log file </div>\n            </div>\n            ",
              "typenode": false, 
              "inputs":{
                "input_1":{
                  "connections":[{
                    "node":"5",
                    "input":"output_1"
                  },{
                    "node":"7",
                    "input":"output_1"
                  }]
                }
              },
              "outputs":{},
              "pos_x":1031,
              "pos_y":463
            }
          }
        },
        "Other":{
          "data":{
            "8":{
              "id":8,
              "name":"personalized",
              "data":{},
              "class":"personalized",
              "html":"\n            <div>\n              Personalized\n            </div>\n            ",
              "typenode": false, 
              "inputs":{
                "input_1":{
                  "connections":[{
                    "node":"12",
                    "input":"output_1"
                  },{
                    "node":"12",
                    "input":"output_2"
                  },{
                    "node":"12",
                    "input":"output_3"
                  },{
                    "node":"12",
                    "input":"output_4"
                  }]
                }
              },"outputs":{
                "output_1":{
                  "connections":[{
                    "node":"9",
                    "output":"input_1"
                  }]
                }
              },
              "pos_x":764,
              "pos_y":227
            },
            "9":{
              "id":9,
              "name":"dbclick",
              "data":{
                "name":"Hello World!!"
              },
              "class":"dbclick",
              "html":"\n            <div>\n            <div class=\"title-box\"><i class=\"fas fa-mouse\"></i> Db Click</div>\n              <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n                Db Click here\n                <div class=\"modal\" style=\"display:none\">\n                  <div class=\"modal-content\">\n                    <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>\n                    Change your variable {name} !\n                    <input type=\"text\" df-name>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n            ",
              "typenode": false, 
              "inputs":{
                "input_1":{
                  "connections":[{
                    "node":"8",
                    "input":"output_1"
                  }]
                }
              },
              "outputs":{
                "output_1":{
                  "connections":[{
                    "node":"12",
                    "output":"input_2"
                  }]
                }
              },
              "pos_x":209,
              "pos_y":38
            },
            "12":{
                "id":12,
                "name":"multiple",
                "data":{},
                "class":"multiple",
                "html":"\n            <div>\n              <div class=\"box\">\n                Multiple!\n              </div>\n            </div>\n            ",
                "typenode": false, 
                "inputs":{
                  "input_1":{
                    "connections":[]
                  },
                  "input_2":{
                    "connections":[{
                      "node":"9",
                      "input":"output_1"
                    }]
                  },
                  "input_3":{
                    "connections":[]
                  }
                },
                "outputs":{
                  "output_1":{
                    "connections":[{
                      "node":"8",
                      "output":"input_1"
                    }]
                  },
                  "output_2":{
                    "connections":[{
                      "node":"8",
                      "output":"input_1"
                    }]
                  },
                  "output_3":{
                    "connections":[{
                      "node":"8",
                      "output":"input_1"
                    }]
                  },
                  "output_4":{
                    "connections":[{
                      "node":"8",
                      "output":"input_1"
                    }]
                  }
                },
                "pos_x":179,
                "pos_y":272
            }
          }
        }
      }
    }
    this.drawingData = JSON.stringify(dataToImport);
  }

  // Private functions
  private initDrawFlow(): void {
    const drawFlowHtmlElement = <HTMLElement>document.getElementById('drawflow');

    //const testEditor = new Drawflow(drawFlowHtmlElement);
    //testEditor.addConnection();

    this.editor = new Drawflow(drawFlowHtmlElement);

    this.editor.reroute = true;
    this.editor.curvature = 0.5;
    this.editor.reroute_fix_curvature = true;
    this.editor.reroute_curvature = 0.5;
    this.editor.force_first_input = false;
    this.editor.line_path = 1;
    this.editor.editor_mode = 'edit';

    this.editor.start();
   
    if (this.drawingData && Object.keys(JSON.parse(this.drawingData).drawflow.Home.data).length > 0) {
      //onsole.log('this.drawingData :>> ', this.drawingData);
      this.editor.import(JSON.parse(this.drawingData));
    }
    
  }

  private resetAllInputsOutputs() {
    this.nodes.forEach((node) => {
      node.inputs = 1;
      node.outputs = 1;
    });
  }

  private addEditorEvents() {
    // Events!
    this.editor.on('nodeCreated', (id: any) => {
      console.log('Editor Event :>> Node created ' + id, this.editor.getNodeFromId(id));
    });

    this.editor.on('nodeRemoved', (id: any) => {
      console.log('Editor Event :>> Node removed ' + id);
    });

    this.editor.on('nodeSelected', (id: any) => {
      console.log('Editor Event :>> Node selected ' + id, this.editor.getNodeFromId(id));
      this.selectedNode = this.editor.drawflow.drawflow.Home.data[`${id}`];
      console.log('Editor Event :>> Node selected :>> this.selectedNode :>> ', this.selectedNode);
      console.log('Editor Event :>> Node selected :>> this.selectedNode :>> ', this.selectedNode.data);
    });

    this.editor.on('click', (e: any) => {
      console.log('Editor Event :>> Click :>> ', e);

      if (e.target.closest('.drawflow_content_node') != null || e.target.classList[0] === 'drawflow-node') {
        if (e.target.closest('.drawflow_content_node') != null) {
          this.selectedNodeId = e.target.closest('.drawflow_content_node').parentElement.id;
        } else {
          this.selectedNodeId = e.target.id;
        }
        this.selectedNode = this.editor.drawflow.drawflow.Home.data[`${this.selectedNodeId.slice(5)}`];
      }

      if (e.target.closest('#editNode') != null || e.target.classList[0] === 'edit-node-button') {
        // Open modal with Selected Node
        this.open(this.nodeModal, this.selectedNodeId);
      }

      if (e.target.closest('#editNode') === null) {
        this.hideEditButton();
      }
    });

    this.editor.on('moduleCreated', (name: any) => {
      console.log('Editor Event :>> Module Created ' + name);
    });

    this.editor.on('moduleChanged', (name: any) => {
      console.log('Editor Event :>> Module Changed ' + name);
    });

    this.editor.on('connectionCreated', (connection: any) => {
      console.log('Editor Event :>> Connection created ', connection);
    });

    this.editor.on('connectionRemoved', (connection: any) => {
      console.log('Editor Event :>> Connection removed ', connection);
    });

    this.editor.on('contextmenu', (e: any) => {
      console.log('Editor Event :>> Context Menu :>> ', e);

      if (e.target.closest('.drawflow_content_node') != null || e.target.classList[0] === 'drawflow-node') {
        if (e.target.closest('.drawflow_content_node') != null) {
          this.selectedNodeId = e.target.closest('.drawflow_content_node').parentElement.id;
        } else {
          this.selectedNodeId = e.target.id;
        }
        this.selectedNode = this.editor.drawflow.drawflow.Home.data[`${this.selectedNodeId.slice(5)}`];

        this.showEditButton();
      }
    });

    this.editor.on('zoom', (zoom: any) => {
      console.log('Editor Event :>> Zoom level ' + zoom);
    });

    this.editor.on('addReroute', (id: any) => {
      console.log('Editor Event :>> Reroute added ' + id);
    });

    this.editor.on('removeReroute', (id: any) => {
      console.log('Editor Event :>> Reroute removed ' + id);
    });

    this.editor.on('mouseMove', (position: any) => {
      console.log('Editor Event :>> Position mouse x:' + position.x + ' y:' + position.y);
    });

    this.editor.on('nodeMoved', (id: any) => {
      console.log('Editor Event :>> Node moved ' + id);
    });

    this.editor.on('translate', (position: any) => {
      console.log(
        'Editor Event :>> Translate x:' + position.x + ' y:' + position.y
      );
    });
  }

  private initDrawingBoard() {
    this.initDrawFlow();
    if (!this.locked) {
      this.addEditorEvents();
    }
  }

  private showEditButton() {
    this.editButtonShown = true;
    this.editDivHtml = document.createElement('div');
    this.editDivHtml.id = 'editNode';
    this.editDivHtml.innerHTML = '<i class="fas fa-pen"></i>';
    this.editDivHtml.style.display = 'block';
    this.editDivHtml.style.position = 'absolute';
    this.editDivHtml.className = 'edit-node-button';

    const selectedNodeHtml = document.getElementById(this.selectedNodeId);
    selectedNodeHtml?.append(this.editDivHtml);
  }

  private hideEditButton() {
    this.editButtonShown = false;
    this.editDivHtml = document.getElementById('editNode') ?? HTMLElement.prototype;
    if (this.editDivHtml) {
      //this.editDivHtml.remove();
    }
  }

  open(content: any, nodeId: string) {
    this.hideEditButton();

    const oldNodeIdNumber = parseInt(nodeId.slice(5));
    this.selectedNode = this.editor.drawflow.drawflow.Home.data[`${oldNodeIdNumber}`];
    const oldNodeStringified = JSON.stringify(this.selectedNode);
    // const { inputsCount, outputsCount } = this.countInOutputsOfNode(JSON.parse(oldNodeStringified));
    /*
    const modalRef = this.modalService.open(content, { size: 'xl', backdrop: 'static', keyboard: false });

    modalRef.dismissed.subscribe((reason:any) => {
      if (typeof reason == 'object') {
        const newDrawnNode = reason;
        newDrawnNode.name = newDrawnNode.data.infos.name;
        newDrawnNode.html = `<div>${newDrawnNode.name}</div>`;

        if (oldNodeStringified != JSON.stringify(this.selectedNode)) {
          // Create Node
          newDrawnNode.id = this.editor.addNode(
            newDrawnNode.name,
            1,
            1,
            newDrawnNode.pos_x,
            newDrawnNode.pos_y,
            newDrawnNode.class,
            newDrawnNode.data,
            newDrawnNode.html,
            newDrawnNode.typenode
          );

          // Reestablish connections
          this.reestablishOldConnections(JSON.parse(oldNodeStringified), newDrawnNode.id);

          // Remove Old Node
          this.editor.removeNodeId(nodeId);
        }
      }
    }); */
  }

  onKeyEvent(e: any) {
    // this.nameAlreadyUsed = this.checkIfNameIsUsed(e.target.value, this.selectedNode.id);
  }

  private countInOutputsOfNode(node: any) {
    let inputsCount = 0;
    let outputsCount = 0;

    Object.keys(node.inputs).forEach((inputKey) => {
      if (node.inputs[`${inputKey}`].connections.length > 0) {
        inputsCount++;
      }
    });

    Object.keys(node.outputs).forEach((outputKey) => {
      if (node.outputs[`${outputKey}`].connections.length > 0) {
        outputsCount++;
      }
    });

    return { inputsCount, outputsCount };
  }

  private checkIfNameIsUsed(name: string, id: number) {
    for (let i = 0; i < Object.keys(this.editor.drawflow.drawflow.Home.data).length; i++) {
      const nodeId = Object.keys(this.editor.drawflow.drawflow.Home.data)[i];
      if (nodeId != `${id}`) {
        if (this.editor.drawflow.drawflow.Home.data[`${nodeId}`].name == name) {
          return true;
        }
      }
    }
    return false;
  }

  private reestablishOldConnections(oldNode: any, newNodeId: number) {
    Object.keys(oldNode.inputs).forEach((inputKey) => {
      oldNode.inputs[`${inputKey}`].connections.forEach((connection: any) => {
        this.editor.addConnection(connection.node, newNodeId, connection.input, inputKey);
      });
    });

    Object.keys(oldNode.outputs).forEach((outputKey) => {
      oldNode.outputs[`${outputKey}`].connections.forEach((connection: any) => {
        this.editor.addConnection(newNodeId, connection.node, outputKey, connection.output);
      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes :>> ', changes);

    if (
      changes['drawingData'] &&
      changes['drawingData'].currentValue &&
      changes['drawingData'].currentValue.length > 0 &&
      Object.keys(JSON.parse(changes['drawingData'].currentValue).drawflow.Home.data).length > 0
    ) {
      this.editor.import(JSON.parse(changes['drawingData'].currentValue));
    }
  }

  ngOnInit(): void {
    this.initDrawingBoard();
     this.editor.editor_mode = this.locked != null && this.locked == false ? 'edit' : 'fixed';
  }

  ngAfterViewInit(): void {
    //this.initDrawingBoard();
    //this.editor.editor_mode = this.locked != null && this.locked == false ? 'edit' : 'fixed';
  }

  onDrawflowEvent(e: any) {
    switch (e.type) {
      case 'dragstart':
        // console.log('Drawflow Event: DragStart :>> e :>> ', e);
        this.selectedNode.data = JSON.parse(
          JSON.stringify([...this.nodes].find((node) => node.infos.name === e.target.outerText))
        );
        break;
      case 'dragenter':
        // console.log('Drawflow Event: DragEnter :>> e :>> ', e);
        break;
      case 'dragover':
        // console.log('Drawflow Event: DragOver :>> e :>> ', e);
        e.preventDefault();
        e.stopPropagation();
        break;
      case 'dragleave':
        // console.log('Drawflow Event: DragLeave :>> e :>> ', e);
        break;
      case 'drop':
        // console.log('Drawflow Event: Drop :>> e :>> ', e);
        e.preventDefault();
        this.addNodeToDrawBoard(e.clientX, e.clientY);
        this.resetAllInputsOutputs();
        break;

      default:
        console.log('Other Drawflow Event :>> e :>> ', e);
        break;
    }
  }

  // Drawflow Editor Operations
  addNodeToDrawBoard(pos_x: number, pos_y: number) {
    if (this.editor.editor_mode === 'edit') {
      pos_x =
        pos_x * (this.editor.precanvas.clientWidth / (this.editor.precanvas.clientWidth * this.editor.zoom)) -
        this.editor.precanvas.getBoundingClientRect().x *
          (this.editor.precanvas.clientWidth / (this.editor.precanvas.clientWidth * this.editor.zoom));

      pos_y =
        pos_y * (this.editor.precanvas.clientHeight / (this.editor.precanvas.clientHeight * this.editor.zoom)) -
        this.editor.precanvas.getBoundingClientRect().y *
          (this.editor.precanvas.clientHeight / (this.editor.precanvas.clientHeight * this.editor.zoom));

      console.log('addNodeToDrawBoard :>> this.selectedNode :>> ', this.selectedNode);

      const htmlTemplate = `<div>${this.selectedNode.data.infos.name}</div>`;

      this.editor.addNode(
        this.selectedNode.data.infos.name,
        1 /*this.selectedNode.data.inputs*/,
        1 /*this.selectedNode.data.outputs*/,
        pos_x,
        pos_y,
        '',
        this.selectedNode.data,
        htmlTemplate,
        false
      );
    }
  }

  onClear() {
    this.editor.clear();
  }

  changeMode() {
    this.locked = !this.locked;
    this.editor.editor_mode = this.locked != null && this.locked == false ? 'edit' : 'fixed';
  }

  onZoomOut() {
    this.editor.zoom_out();
  }

  onZoomIn() {
    this.editor.zoom_in();
  }

  onZoomReset() {
    this.editor.zoom_reset();
  }

  exportDrawingData() {
    return this.editor.export();
  }

  onSubmit() {
    this.drawingData = this.exportDrawingData();
  }
}
