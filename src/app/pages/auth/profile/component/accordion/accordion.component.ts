import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as lodash from 'lodash';
import { CategoryEnum, Certificate, Experience, Skill, Training } from 'src/api/models';
import {
  CategoryDetails,
  CertificateCheckbox,
  ExperienceCheckbox,
  ServiceProviderOptions,
  ServiceProviderProfileOption,
  SkillCheckbox,
  TrainingCheckbox,
} from '../../service-provider/service-provider.config';

type OptionType = (
  SkillCheckbox
  | ExperienceCheckbox
  | CertificateCheckbox
  | TrainingCheckbox
);

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() area: string = null;
  @Input() values: number[];
  @Input() expanded = false;

  // Title takes preference over mode name.
  @Input() title: string = null;
  @Input() titleIndex: string = null;
  @Input() mode: ServiceProviderProfileOption;

  // Checkbox options are generated from options in case they are not passed.
  @Input() options: Skill[] | Experience[] | Certificate[] | Training[];
  @Input() checkboxOptions: SkillCheckbox[] | ExperienceCheckbox[] | CertificateCheckbox[] | TrainingCheckbox[] = [];

  // Configure and indicate preprocesses.
  @Input() isSubGroup = false;
  @Input() useSubGroups = false;
  @Input() filterCategories = false;

  @Output() optionsChangeEvent = new EventEmitter<SkillCheckbox[] | CertificateCheckbox[] | ExperienceCheckbox[] | TrainingCheckbox[]>();

  groups = null;
  groupTitles = null;

  constructor(
    public translateService: TranslateService
  ) { }

  ngOnInit() {
    if (this.mode.type === ServiceProviderOptions.Certificate) {
      this.options = lodash.sortBy(this.options, 'id');
    } else {
      this.options = lodash.sortBy(this.options, 'name');
    }

    if (!this.values) {
      this.values = [];
    }

    // In case the current invocation is not a sub group, generate the checkbox
    // options, otherwise, we trust that the parent would pass the options.
    if (!this.isSubGroup) {
      if (this.shouldFilter) {
        // https://github.com/microsoft/TypeScript/issues/44373
        this.options = (this.options as any[]).filter((value: any) => {
          if (!this.area) {
            return true;
          }

          return (
            value.category === CategoryEnum.General
            || value.category === this.area
          );
        });
      }

      this.options.forEach((option: OptionType) => {
        option.isChecked = this.values.indexOf(option.id) >= 0;
        this.checkboxOptions.push(option as any);
      });
    }

    // If the subgrouping is required for the invocation, generate the sorted
    // resources necessary for the nested accordin.
    if (this.shouldSubGroup) {
      const groups = Object.entries(
        lodash.groupBy(this.checkboxOptions, (option: Skill) => {
          return (
            option.category
            || CategoryEnum.General
          );
        }),
      );

      console.log(groups);

      this.groups = lodash.sortBy(groups, ([type, value]) => {
        return [
          type !== CategoryEnum.General,
          type,
        ];
      });


      const translatedCategoryDetails = CategoryDetails.map((item) => {
        item.name = this.translateService.instant(item.name);
        return item;
      });

      const sortedCategoryDetails = lodash.sortBy(translatedCategoryDetails, 'name');

      this.groups = this.groups.sort((a, b) => {
        const indexOfFirstCategory = sortedCategoryDetails.findIndex((item) => item.value === a[0]);
        const indexOfSecondCategory = sortedCategoryDetails.findIndex((item) => item.value === b[0]);
        return indexOfFirstCategory - indexOfSecondCategory;
      });

      const CATEGORY_OTHERS = this.groups.find((item) => {
        return item[0] === CategoryEnum.General;
      });

      // Move the general category to bottom
      // https://projects.zoho.eu/portal/viperdev#taskdetail/121943000000027035/121943000000871061/121943000000726213
      if (CATEGORY_OTHERS) {
        const CATEGORY_OTHERS_INDEX = this.groups.findIndex((item) => {
          return item[0] === CategoryEnum.General;
        });

        this.groups.splice(CATEGORY_OTHERS_INDEX, 1);
        this.groups.push(CATEGORY_OTHERS);
      }

      this.groupTitles = lodash.fromPairs(
        sortedCategoryDetails.map((detail) => {
          return [
            detail.value,
            detail.name,
          ];
        }),
      );

      this.groupTitles = lodash.mapValues(lodash.invert(lodash.invert(this.groupTitles)));
    }
  }

  isChanged() {
    this.optionsChangeEvent.emit(this.checkboxOptions);
  }

  get netTitle() {
    return (
      this.title
      || this.mode.name
    );
  }

  get isSkillMode() {
    return this.mode.type === ServiceProviderOptions.Skills;
  }

  get shouldFilter() {
    return (
      this.isSkillMode
      && this.filterCategories
    );
  }

  get shouldSubGroup() {
    return (
      this.isSkillMode
      && this.useSubGroups
      && !this.isSubGroup
    );
  }

  subGroupDefaultExpanded(category) {
    return category === CategoryEnum.General;
  }

  toggleExpansion() {
    this.expanded = !this.expanded;
  }
}
