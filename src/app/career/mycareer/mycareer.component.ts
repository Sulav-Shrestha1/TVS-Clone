import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycareer',
  templateUrl: './mycareer.component.html',
  styleUrls: ['./mycareer.component.css']
})
export class MycareerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  careerDetails = [
    {NOP: '3', Span1: 'Rapti', Span2: 'Bheri', Span3: 'Gandaki', WorkingPosition: 'Mid Level', Qualification: 'Bachelor/Master', Salary: 'Negotiable', Category: 'Sales / Marketing', Nature: 'Full Time'},
    {NOP: '2', Span1: 'Itahari', Span2: 'Nepalhung', WorkingPosition: 'Mid Level', Qualification: 'BBS/MBS in Marketing', Salary: 'Negotiable', Category: 'Business Development', Nature: 'Full TIme', SkilL1: 'Communication', SkilL2: 'Sales', SkilL3: 'Leadership', SkilL4: 'Product Knowledge'},
    {NOP: '1', Span1: 'Naxal', Experience: '3 years +', WorkingPosition: 'Mid Level', Qualification: 'Bachelor/Master', Salary: 'Negotiable', Category: 'Sales / Marketing', Nature: 'Full Time', SkilL1: 'Sales', SkilL2: 'Networking'},
    {NOP: '1', Span1: 'Gairidhara', Span2: 'Kathmandu', Experience: '3 years +', WorkingPosition: 'Mid Level', Qualification: 'Bachelor/Master', Salary: 'Negotiable', Category: 'Sales / Marketing', Nature: 'FUll Time', SkilL1: 'Sales', SkilL2: 'Business Development', SkilL3: 'Marketing', SkilL4: 'Communication', SKilL5: 'Customer Relationship Management'},
  ]

  jobDescription = [
    {L1: 'Conduct market research to identify selling possibilities and evaluate customer needs.', L2: 'Actively seek out new sales opportunities through cold calling, networking, and social media.', L3: 'Create frequent reviews and reports with sales and financial data.', L4: 'Ensure the availability of stock for sales and demonstrations.', L5: 'Negotiate/close deals and handle complaints or objections.', L6: 'Collaborate with team members to achieve better results.', L7: 'Must handle assigned dealers.', L8: ''},
    {L1: 'Identification of Potential market and to calculate the viability of Business', L2: 'Preparation of list of required equipment for dealer opening and provide the list to the Service department', L3: 'Recruitment of New Dealership', L4: 'Finalization of an appropriate location for dealer operation',L5: 'Coordination with BFI for obtaining business operation limits', L6: 'Preparation of layout design for showroom, workshop, and spares store.', L7: 'Ordering of required equipment and spare parts', L8: 'Ensure the construction and branding of Showroom, Spare parts & workshop', L9: 'Ensure New dealer Manpower recruitment and training', L10: 'Ensure dealer operation as per the defined norms', L11: 'Dealer Nurturing and Mentoring', L12: 'Ensure the Dealer inauguration has been properly conducted', L13: 'To conduct the financial audit of dealers to ensure financial discipline', L14: 'To ensure profitability audit of dealers to add value for the formation of appropriate business policy', L15: 'Capability development of dealer manpower for business growth', L16: 'Dealership standardization'},
    {L1: 'Planning and Forecasting Institutional Sales Target', L2: 'Achievement of given sales target', L3: 'Devising Institutional sales strategies and executing the same', L4: 'Lead intuitional sales and new business opportunities ',L5: 'Periodic reporting on Sales Performance to higher management', L6: 'Creating and updating database of all the institutions with potential of business', L7: 'Creating Database of potential clients.', L8: 'Execution of activities and schemes on the basis of potential identified', L9: 'Develop and maintain business relation with corporate houses.'},
    {L1: 'Conduct market research to identify selling possibilities and evaluate customer needs', L2: 'Actively seek out new sales opportunities through cold calling, networking, and social media', L3: 'Create frequent reviews and reports with sales and financial data', L4: 'Ensure the availability of stock for sales and demonstrations',L5: 'Negotiate/close deals and handle complaints or objections', L6: 'Collaborate with team members to achieve better results', L7: 'Must handle assigned dealers.'},
  ]
  
  
  jobSpecification = [
    {L1: 'Proven experience as a Regional Sales Officer or relevant role in Automobile Field (2 Wheeler).', L2: 'Excellent knowledge of MS Office.', L3: 'Fast learner and passion for sales.', L4: 'Self-motivated with a results-driven approach.',L5: 'Must possess 2 wheeler and license.', L6: 'Local candidates are highly preferred.'},
    {L1: 'BA/BBS having 3+ years of experience in the business development of vehicles', L2: 'Strong communication, dealing, negotiating, and interpersonal skills', L3: 'Excellent organizational skills', L4: 'Ability to flourish with minimal guidance, be proactive, and handle uncertainty',L5: 'Taking own initiative and ability to work independently', L6: 'Ability to handle pressure.', L7: 'Can-Do Attitude', L8: 'Customer Service Attitude', L9: 'Target and Result Oriented', L10: 'Proficient in Word, Excel, Outlook, and PowerPoint', L11: 'Should have own two-wheeler and license'},
    {L1: 'BBA/BBS/MBA/MBS having atleast 2+ years of working experience in the capacity of Asst. Manager – Institutional Sales in Automobiles.', L2: 'In-depth knowledge of automobile market of the Nepal.', L3: 'Sound knowledge of Automobile business process.', L4: 'Demonstrated ability to communicate, present and influence credibly and effectively at all levels of the organization', L5: 'Highly creative, innovative, out of the box thinker.'},
    {L1: 'Proven experience as a Sales Officer or relevant role in Automobile Field (4 Wheeler).', L2: 'Excellent knowledge of MS Office/Ms Excel ', L3: 'Fast learner and passion for sales.', L4: 'Self-motivated with a results-driven approach.'}
  ]

  applyInstructions = [
    {P1: 'Candidates are requested to apply with an updated CV at ', P2: 'vacancy@jagdambamotors.com', P3: 'Note: Please mention the position as "Regional Sales Officer-Rapti/Bheri/Gandaki" on the subject.'},
    {P1: 'Candidates are requested to apply with an updated CV at ', P2: 'vacancy@jagdambamotors.com', P3: 'Note: Please mention the position as "Business Development Officer- Itahari/Nepalgunj" on the subject.'},
    {P1: '', P2: '', P3: ''},
    {P1: '', P2: '', P3: ''}
  ]

}
