import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { SharedModule } from '../../modules/sharedModule/shared.module';
import { NodeService } from '../../providers/node.service';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';

interface Column {
    field: string;
    header: string;
}

@Component({
    standalone: true,
    selector: 'tree-nodes',
    templateUrl: './tree-nodes.component.html',
    imports: [
        ButtonModule,
        SharedModule,
        TreeModule,
        TreeTableModule,
        IconFieldModule,
    ],
    providers: [NodeService]
})
export class TreeNodeComponent implements OnInit {
    files!: TreeNode[];
    cols!: Column[];
    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
        this.cols = [
            { field: 'name', header: 'Subject' },
            { field: 'size', header: 'Predicate' },
            { field: 'type', header: 'Object' },
            { field: '', header: '' }
        ];
    }
}