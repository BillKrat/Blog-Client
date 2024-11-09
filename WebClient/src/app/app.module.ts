import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { provideHttpClient } from '@angular/common/http';
import { NodeService } from './providers/node.service';
import { ConfigService } from './providers/config.service';
import { SharedModule } from './modules/sharedModule/shared.module';
import { SecurityModule } from './modules/securityModule/security.module';
import { TreeNodeComponent } from "./components/tree-nodes/tree-nodes.component";
import { DrawflowComponent } from './components/drawflow/drawflow.component';

//--------------------
// NgPrime Components
//--------------------
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export function initializeApp(configService: ConfigService) {
    return () => configService.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    // Modules
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    SharedModule,
    SecurityModule,
    TreeModule,
    TreeTableModule,
    // App components
    TreeNodeComponent,
    DrawflowComponent,
  ],
  providers: [
    {provide: LocationStrategy, useClass:HashLocationStrategy},
    provideHttpClient(),
    {
      provide:APP_INITIALIZER,
      useFactory: initializeApp,
      deps:[ConfigService],
      multi:true
    },
    NodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("AppModule");
  }
 }

//--------------------
// NgPrime Components
//--------------------
  // AvatarModule,
  // AvatarGroupModule,
  // AnimateOnScrollModule,
  // FormsModule,
  // ReactiveFormsModule,
  // AccordionModule,
  // AutoCompleteModule,
  // BadgeModule,
  // BreadcrumbModule,
  // BlockUIModule,
  // ButtonModule,
  // ButtonGroupModule,
  // CalendarModule,
  // CarouselModule,
  // CascadeSelectModule,
  // ChartModule,
  // CheckboxModule,
  // ChipsModule,
  // ChipModule,
  // ColorPickerModule,
  // ConfirmDialogModule,
  // ConfirmPopupModule,
  // ContextMenuModule,
  // VirtualScrollerModule,
  // DataViewModule,
  // DialogModule,
  // DividerModule,
  // DeferModule,
  // DockModule,
  // DragDropModule,
  // DropdownModule,
  // DynamicDialogModule,
  // EditorModule,
  // FieldsetModule,
  // FileUploadModule,
  // FocusTrapModule,
  // GalleriaModule,
  // InplaceModule,
  // InputMaskModule,
  // InputSwitchModule,
  // InputTextModule,
  // InputTextareaModule,
  // InputNumberModule,
  // InputGroupModule,
  // InputGroupAddonModule,
  // InputOtpModule,
  // ImageModule,
  // KnobModule,
  // ListboxModule,
  // MegaMenuModule,
  // MenuModule,
  // MenubarModule,
  // MessageModule,
  // MessagesModule,
  // MultiSelectModule,
  // MeterGroupModule,
  // OrganizationChartModule,
  // OrderListModule,
  // OverlayPanelModule,
  // PaginatorModule,
  // PanelModule,
  // PanelMenuModule,
  // PasswordModule,
  // PickListModule,
  // ProgressSpinnerModule,
  // ProgressBarModule,
  // RadioButtonModule,
  // RatingModule,
  // SelectButtonModule,
  // SidebarModule,
  // ScrollerModule,
  // ScrollPanelModule,
  // ScrollTopModule,
  // SkeletonModule,
  // SlideMenuModule,
  // SliderModule,
  // SpeedDialModule,
  // SpinnerModule,
  // SplitterModule,
  // StepperModule,
  // SplitButtonModule,
  // StepsModule,
  // TableModule,
  // TabMenuModule,
  // TabViewModule,
  // TagModule,
  // TerminalModule,
  // TieredMenuModule,
  // TimelineModule,
  // ToastModule,
  // ToggleButtonModule,
  // ToolbarModule,
  // TooltipModule,
  // TreeSelectModule,
  // TriStateCheckboxModule,
  // AnimateModule,
  // CardModule,
  // RippleModule,
  // StyleClassModule,
  // FloatLabelModule,
  // IconFieldModule,
  // InputIconModule,
  // AutoFocusModule
