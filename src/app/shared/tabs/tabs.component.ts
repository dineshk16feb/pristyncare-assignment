import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'my-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  activeTabs: any;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngAfterContentInit() {
    this.activeTabs = this.tabs.filter((tab) => tab.active);
    if (this.activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: any) {
    this.tabs.toArray().forEach(tab => tab.active = false);
    tab.active = true;
  }
}
