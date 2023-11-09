(function(){
	var $scope, $location;

	$('.navbar-nav li a').click(function (e) {
  	$('.navbar-nav li').removeClass('active');
  	$(this).parent('li').addClass('active');
	}) 


	var app = angular.module('gsmeter', ['ngRoute']);

	app.controller('MainController', function($scope){

	})

	.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/',{
		templateUrl:'home.html',
		controller: 'MainController'
	}).
	when('/gs-cult',{
		templateUrl: 'gs-cult.html',
		controller: 'MainController'
	}).
	when('/gs-sports',{
		templateUrl: 'gs-sports.html',
		controller: 'MainController'
	}).
	when('/gsaa-ug',{
		templateUrl: 'gsaa-ug.html',
		controller: 'MainController'
	}).
	when('/gsaa-pg',{
		templateUrl: 'gsaa-pg.html',
		controller: 'MainController'
	}).
	when('/gsha',{
		templateUrl: 'gsha.html',
		controller: 'MainController'
	}).
	otherwise({
		templateUrl:'home.html',
		controller: 'MainController'
	});
	}]);



	app.controller('DataController', function(){
		this.content1s = culturals;
		this.content2s = sports;
		this.content3s = academics;
		this.content4s = academicpgs;
		this.content5s = hostelaffairs;
		this.content6s = stabs;

		this.part = foot;
		this.tab = icon;
	});

	var icon = [
		{
			link: 'https://www.facebook.com/insight.iitbombay/posts/10153589419457429?__mref=message_bubble',
			menu: 'images/menu/menu.png',
			like: 'images/menu/like.png',
			share: 'images/menu/share.png',
			hover: 'images/menu/menu_hover.png',
		}
	];

	var culturals = [
		
		{
			name: 'LEARNING ',
			id: 'learning',
			descriptions: [
				{
					point: "Cultural Crash Courses : Dissolving the current structure of cult school and organising classes concentrated in a month to minimise clashes with academic commitments ",
					
				},

				{
					point: "Expand the guidance of NSO-Cult professionals to cater to the cultural needs of any student (UG and PG) on a regular basis",
				},

				{
					point: "Ensure conduction of second phase of 'Cult...Not diffiCult' in-semester for those who are unable to attend phase 1 in summers",
				},

				{
					point: "Increase the number of informal learning sessions involving experienced seniors in every genre to decrease the threshold of taking up new genres ", 
				},
						],
		},

		{
			name: 'WEB',
			id: 'web',
			descriptions: [
				{
					point: "IITB Culturals' Website live editing portal: Create a restricted access portal developed for information dissipation regarding cultural activities in the institute",
				},
				
				{
					point: "Centralise the issue and penalty system of books by merging SAC and hostel libraries through an online portal",
				},

				{
					point: "IITB Cultural Portfolio : Provide an online platform to showcase and discover creative work of the students pursuing non-performing genres",
				},

				{
					point: "Cult-o-Pedia : Update and publicise the achievements and tutorials for individual genre on the Culturals@IITB website to promote self-learning",
				},

				{
					point: "Bi-monthly Genre Work Reports: Public log of accomplishments made available online of each member of the cultural council",
				},
						],
		},

		{
			name: 'Infrastructure',
			id: 'infra',
			descriptions: [
				{
					point: "Arrange regular meets for the planning and proposal of SAC Phase II.",
				},

				{
					point: "Ensure AC installation in SAC music and dance room.",
				},

				{
					point: "Infrastructural Purchases : Amplifiers, board games, cupboards, music instruments, advanced film and photography equipment",
				},
				
				{
					point: "Discount Stalls: For music instruments; 'Books by Weight' Expo; Camera accessories",
				},
						],
		},

		{
			name: 'Exposure',
			id: 'exp',
			descriptions: [
				{
					point: "Cult Insider : Maintain a section on the website for the seniors to reach out to interested students by providing an insight into the working of and the people behind different genres",
				},

				{
					point: "IITB Feature Film : A collaborated project of all genres to enhance cross-genre interaction",
				},
				
				{
					point: " 'Pahal' : Provide a showcase platform for those attending Cult...Not diffiCult and extend it to Cultural Crash Courses ",
				},

				{
					point: "Inter-IIT Cult : Follow up on the proposal of Inter-IIT Cult which would be along the lines of inter-IIT Sports .",
				},

				{
					point: "Muskaan : Ensure conduction of regular sessions for underprivileged students by institute volunteers, in coordination with NSS.",
				},

				{
					point: "Extend Cult Yatra to all genres and ensure pre-planned trips at least once a semester.",
				},
						],
		},

		{
			name: 'General Championships (GCs)',
			id: 'gcs',
			descriptions: [
				{
					point: "Release exhaustive list of vendors(for both purchase and rental) and resources available to extend support to the hostel cultural councils",
				},
				
				{
					point: "Live Your Passion : Extending LYPs to cover all the genres to reward winning GC entries with professional experience ",
				},

				{
					point: "GC Booklet : Release along with a tentative GC schedule at the beginning of the semester which will include preparatory material of particular GCs.",
				},

					],
		},
        {
			name: 'Hostel Culture',
			id: 'culture',
			descriptions: [
				{
					point: "Decentralisation of Sessions : Conduct informal workshops and sessions in the clusters of hostels at regular intervals to enhance learning at hostel level",
				},

				{
					point: "Genre Committees : Involve hostel secretaries in planning and execution of GCs and club activities by encouraging regular meets of institute secretaries, conveners and hostel secretaries",
				},
				
				
						],
		},
        
        {
			name: 'Freshmen and PGs',
			id: 'freshmen',
			descriptions: [
				{
					point: "Release online genre wise booklets entailing detailed information about NSO-cult and year long cultural activities",
				},

				{
					point: "Conduct photo story and lifestyle based competitions in Freshiezza",
				},
				
				{
					point: "Incorporate workshops along with competitions in Freshiezza and PG Cult to increase participation and to channel their enthusiasm",
				},

				{
					point: "PG Cult League: Retain the two legged-structure of PG Cult League and hold regular workshops in PGhostels to promote learning and exposure towards various genres.",
				},

				
						],
		},{
			name: 'Club purview widening',
			id: 'purview',
			descriptions: [
				{
					point: "Expand the activities conducted by the Lifestyle Club to include personality development, fashion designing and cuisine",
				},

				{
					point: "Increase the number of UI/UX, branding and product design sessions under Design Club",
				},
				
				{
					point: "Extending the reach of Classical and Folk Arts genre to cater to various folk forms and explore activities like puppetry, warli art etc.",
				},
						],
		},{
			name: 'Publicity',
			id: 'publicity',
			descriptions: [
				{
					point: "Culturals@IITB Website : Integrating website with the facebook page for posting updates in turn increasing traffic on the website",
				},

				{
					point: "Monthly Calendar : Publicise the cult calendar through online and offline platforms at hostel level to increase outreach",
				},
				
				{
					point: "Cult Magazine : Create a magazine documenting the highlights of cultural activities in the past few months and information of the upcoming events. ",
				},
						],
		},

	];

	var sports = [
		
		{
			name: 'Initiatives',
			id: 'Initiatives:',
			descriptions: [
				{
					point: "Build an IITB E-commerce platform for sports goods and merchandise with year-long discount on branded products of all sports; hostel delivery for all individuals & hostel buyers with COD facility",
					
				},

				{
					point: "Sports Wallet: Online payment for workshops, camps & event registrations to facilitate easy transactions and increased transparency",
				},

				{
					point: "Expand online player profile service with timely SMS & targeted email to enhance event awareness",
				},

				{
					point: "Initiate PlayerRadar, a real-time player finding service & racquet sports ladder to support both learners and competitive players ", 
				},{
					point: "Organize weight loss & bodybuilding camps by professional trainers from NIS Patiala ", 
				},{
					point: "Promote non-conventional sports like Golf, Archery, Shooting by conducting tours & training camps ", 
				},{
					point: "Initiate supervised girls swimming camps by dedicated female coach for increased participation ", 
				},{
					point: "Launch semester-long certified free of charge women self-defense camps for arts like Kick-Boxing, Judo,Krav Maga ", 
				},{
					point: "Promote a system of dedicated hostel jersey for GCs with predetermined colour codes to boost hostel solidarity & inter-hostel culture; provide centralised printing and install institute & hostel flags ", 
				},{
					point: "Set up Inter-Hostel GC tally and 'Player of the GC' display board in Gymkhana ground ", 
				},{
					point: "Introduce a year-long inter collegiate league in home-away format comprising of colleges across Mumbai to organize matches aimed at increasing tournament exposure and enhance team practices ", 
				},{
					point: "Mandate inclusion of freshmen into teams, to provide exposure of university level matches ", 
				},
						],
		},

		{
			name: 'Infrastructure',
			id: 'infra',
			descriptions: [
				{
					point: "Propose the reconstruction of badminton court from wooden to synthetic; increase from 5 to 9",
				},
				
				{
					point: "Procure covers for tennis courts & football field (18yds box) to ensure availability during monsoons",
				},

				{
					point: "Propose to set up an open gym in the gymkhana grounds for free hand outdoor callisthenic exercises",
				},

				{
					point: "Push to set up electronic boards for digital advertising at strategic locations for mass publicity",
				},

				{
					point: "Propose installation of rebounding board in indoor volleyball courts to ensure smooth practice",
				},
                {
					point: "Push for purchase and installation of lockers for gymkhana venues to ensure safety of belongings",
				},{
					point: "Propose setting up of indoor bouldering wall for climbing activities and fitness enthusiasts",
				},{
					point: "Ensure reformation of old Kho-Kho court into handball ground for the first time in IITB campus",
				},
                {
					point: "Propose timely renovation of hockey store room and marking of the indoor hockey turf",
				},{
					point: "Push for installation of signage boards with directions, contacts & timings for all gymkhana facilities",
				},
						],
		},

		{
			name: 'PG Sports',
			id: 'pgsports',
			descriptions: [
				{
					point: "Organize a PG Sports festival on Hostel 13 football ground, comprising of informal events",
				},

				{
					point: "Re-establish PG sports training in summers with the help of professional coaches.",
				},

				{
					point: "Conduct morning camps for various sports; introduce Hockey and Powerlifting GC for PGs.",
				},
				
				{
					point: "Conduct combined meetings of PG council and Institute council to address organizational and scheduling concerns of PG students in accordance with APS and major academic commitments.",
				},

				{
					point: "Ensure provision of logistical and event management support to Prithvi, Sports Fest of SOM.",
				},

				
						],
		},

		{
			name: 'Facilities and Outreach',
			id: 'facilities',
			descriptions: [
				{
					point: "Propose training of ground maintenance staff by qualified trainers for better institute & hostel grounds.",
				},

				{
					point: "Ensure timely purchase of world-class equipment for main gym opp. H11 and hire gym trainers.",
				},
				
				{
					point: "Provide permanent self-defense venue with equipment, enabling continuous un-supervised practices.",
				},

				{
					point: "Conduct workshops for gutting repair, cycle maintenance; annually set up temporary Cycle outlet.",
				},

				{
					point: "Launch online court booking system for easy access to sport venues.",
				},

				
						],
		},
        {
			name: 'Institute Events',
			id: 'events',
			descriptions: [
				{
					point: "Conduct a wildlife trek to Himachal Pradesh in association with International Youth Club.",
				},

				{
					point: "Organize frequent training camps through full-time coaches dedicated for Lawn-Tennis,Swimming & Fitness to serve student requirements across the year.",
				},
				
				{
					point: "Launch an institute wide tennis ball cricket tournament in summers on gymkhana cricket field",
				},

				{
					point: "Organize an institute-wide competitive Skating camp followed by Open Skating championship.",
				},

				{
					point: "Initiate leagues for Kabaddi and Kho-Kho to rejuvenate Indian games culture in institute.",
				},
                {
					point: "Organize theme centric cycling tours such as Foodie Rides, Night rides and Social Rides",
				},

				
						],
		},{
			name: 'Institute Teams and Inter-IIT',
			id: 'institute',
			descriptions: [
				{
					point: "Push formation of an institute team from freshmen batch to provide dedicated training to budding players,preparing them for competitive Inter-IIT & Inter-University environment",
				},

				{
					point: "Showcase outstanding accomplishments by maintaining an online database comprising of Inter-IIT records,Hostel GC records, Prestigious awards, photographs and videos.",
				},
				
				{
					point: "Aim to minimize injuries by setting up warm-up and cool-down training sessions by physiotherapist.",
				},

				{
					point: "Push for Kho-Kho & Girls' Squash as trial Inter IIT; form institute team of Kabaddi, Handball.",
				},
				
						],
		},{
			name: 'Council and Hostel Support',
			id: 'facilities',
			descriptions: [
				{
					point: "Provide logistical & administrative support for re-soiling and construction of hostel courts & fields.",
				},

				{
					point: "Push to set up cricket pitch, volleyball court, football posts in H-15/16 to promote sports culture.",
				},
				
				{
					point: "Organize Inter-Hostel board meeting pre-summers to address major changes, institute awards & GC rules on the lines of Inter IIT sports board.",
				},

				{
					point: "Appoint a member from the institute sports council per hostel as a mediator between the hostel and institute council to represent hostel interests.",
				},

				{
					point: "Issue Institute council work reports with monthly updates and provide hostels with progress information on the points in individual manifestos.",
				},
                {
					point: "Organize open house & general body meeting each semester to improve feedback and transparency.",
				},

				
						],
		},

	];

	var academics = [
		
		{
			name: 'KEY INITIATIVES ',
			id: 'learning',
			descriptions: [
				{
					point: "Ensure smooth conduct of registration process in coordination with department councils and academic section",
					
				},

				{
					point: "Conduct Ask Me Anything sessions with professors to improve faculty student interaction",
				},

				{
					point: "Explore the possibility of Inter-disciplinary minor programs like Finance, Mechatronics by integrating courses from different departments",
				},

				{
					point: "Encourage department councils to take up Curriculum Reforms to produce coherence of theory and lab courses across department; Conduct student feedback and open house sessions to amalgamate students views for amending the existing curriculum ", 
				},
                {
					point: "Propose to normalize 1st year curriculum to make course load uniform across all departments",
				},
				
				{
					point: "Push for inclusion of Inter-department department electives to increase curriculum flexibility",
				},

				{
					point: "Follow up on the current council's initiative of introducing Inter-Disciplinary Dual Degree program to promote cross disciplinary researchs",
				},
						],
		},

		{
			name: 'ACADEMIC POLICY REFORM',
			id: 'web',
			descriptions: [
				{
					point: "Centrally document the list of department electives and the allowed institute electives across all departments and ensure its availability during registrations",
				},
				
				{
					point: "Propose pre-registration of popular elective courses & minor courses running in slots other than 5",
				},

				{
					point: "Create TA selection portal for common institute courses to bring transparency in TA selection and to keep students updated of the status of their application",
				},

				{
					point: "Ensure TA feedbacks are carried out within first few weeks of the tutorials for the common institute courses and provide the corresponding report to the professors",
				},

				{
					point: "Propose Teaching Awards for TAs to be decided by faculty after considering student feedback",
				},
						],
		},

		{
			name: 'INFORMATION DISSEMINATION AND AWARENESS',
			id: 'information',
			descriptions: [
				{
					point: "Prepare helpbooks for Professors on ASC & Moodle usage, room booking and biometric attendance slot system.",
				},

				{
					point: "Create a scholarship information portal providing details concerning to all the scholarships, funded university internship and exchange programs.",
				},

				{
					point: "Make process flowchart available for common Undergraduate Applications (UG 1 to 17) forms.",
				},
				
				
						],
		},

		{
			name: 'STUDENT SUPPORT SERVICES',
			id: 'support',
			descriptions: [
				{
					point: "Propose appointment of two extra teaching assistants in each First Year UG course, who would be taking additional help sessions in vernacular languages",
				},

				{
					point: "Push for increase in number of counsellors and propose for a career counsellor",
				},
				
				{
					point: "Improve on the existing peer-to-peer learning network of Tutorial Service Centre Portal to make it more student friendly and publicize it to increase student involvement.",
				},

				{
					point: "Synergize with academics: Conduct course importance sessions to make students realise the importance and applications of the First Year courses.",
				},

				{
					point: "Software Series: Conduct introductory sessions on AutoCAD, Latex, Matlab and R programming to help UG students with their coursework.",
				},

				{
					point: "Conduct time and stress management workshops in coordination with TISS and explore the possibility of a paid Spoken English Workshop.",
				},
						],
		},

		{
			name: 'PROMOTION OF UNDERGRADUATE RESEARCH',
			id: 'promotion',
			descriptions: [
				{
					point: "Enthuse: Continue to conduct a series of informal talks and sessions for First Year students to foster faculty-student relationship and motivate students towards research.",
				},
				
				{
					point: "Organize Department Open Day informing students about various research facilities and opportunities in labs across all departments",
				},

				{
					point: "Initiate Lab Revamp Projects (LRP): Promote students to design and perform their own lab experiment enabling constructive changes in subsequent years' lab curriculum..",
				},

				{
					point: "Launch Portal for Project Allocation (PPA): Integrate Research, Technical, Web and Design projects with comprehensive project description and categorization",
				},

				{
					point:"Coordinate with department councils to: 1.Manage procurement of department specific projects coordinating with professors 2.Plan and ensure the smooth execution of Department Open Day and PPA",
				}

					],
		},
        {
			name: 'CAREER CELL',
			id: 'career',
			descriptions: [
				{
					point: "Fundae Talks: A series of informal talks for First Year students to make them aware of various opportunities available to them",
				},

				{
					point: "Continue conducting introductory cum preparatory sessions for competitive exams like GRE, GATE, IAS, CAT, IELTS, TOEFL",
				},
				
				{
					point: "Ensure smooth conduct of Dataquest: A summit hosting range of competitions, lectures and workshops in the field of analytics",
				},

				{
					point: "Continue collaboration with SARC in conducting Core Weekend with lectures on recent technological developments in industries.",
				},

				{
					point: "Extend the membership of Facebook group and online repository of Apping, Resume making,Foreign Intern and Semester Exchange Resources.",
				},

						],
		},
        {
			name: '2_YEAR M.Sc. ACADEMICS',
			id: 'support',
			descriptions: [
				{
					point: "Follow up on Curriculum revision to achieve greater flexibility by allowing students to forgo courses with repeated content in favour of additional electives",
				},

				{
					point: "Push for the proposal of allowing separate Research Award for 2 year MSc students",
				},
				
				
						],
		},{
			name: 'EXTERNAL RELATIONS',
			id: 'support',
			descriptions: [
				{
					point: "Continuing the initiative of previous council for Inter IIT semester exchange program and explore the possibility of summer research internship at IISc Banglore for MSc students",
				},

				{
					point: "Promote signing of more MOUs by increasing coordination between department council and ISIR and ensure better dissemination of information regarding Semester Exchange",
				},
				
				
						],
		},{
			name: 'WEB AND INFRASTRUCTURE',
			id: 'support',
			descriptions: [
				{
					point: "Create a chrome extension to ensure availability of academic notices, deadlines, information of session and for conducting student feedback",
				},

				{
					point: "Improve UG Acad Wiki to make it a 1 stop online guide for registration related queries",
				},
				
				{
					point: "Push for availability of E-Books for Institute common courses and propose for course-wise availability of E-Books in the library website.",
				},

				{
					point: "Propose for setting up of an eatery near library.",
				},

				{
					point: "Conduct bimonthly inspection of Library and LCH infrastructure.",
				},


						],
		},
        

	];

	var academicpgs = [
		
		{
			name: 'Initiatives ',
			id: 'initia',
			descriptions: [
				{
					point: "Propose an increase in financial support grants for participating in International Conferences.",
					
				},

				{
					point: "Propose Bi-monthly newsletter to update about the summary of various academic talk/lectures so as to disseminate it to those who missed them.",
				},

				{
					point: "Propose to include AURAA in the Departmental meeting for a better coordination betweenDepartments and PG Academic Council.",
				},

				{
					point: "Propose to Introduce photocopy centers at various departments. ", 
				},

				{
					point: "Proposal for an Online leave application for students. ", 
				},

				{
					point: "Propose to initiate A Desiderata- Goals and Roadmap of PhD Program (made by Prof. U. Ganguly (Electrical Engineering)) - for all departments and centers of IIT Bombay. ", 
				},

				{
					point: "To start an IDFR (Informal Discussion and Formal Research) Clubs to facilitate informal talk and discussion among the students in Hostels Areas. ", 
				},

				{
					point: "Propose Best AURAA award to increase interest and Enthusiasm among post graduate students for AURAA posts. ", 
				},

				{
					point: "Propose a better Married Research Scholars Representation in Research Scholars Forum. ", 
				},

				{
					point: "To start a Marathi Learning Classes to help students in their field work. ", 
				},

				{
					point: "Propose to start AAP (Academic Affairs Platform) - App to update students about Councils work and Upcoming events.. ", 
				},

				{
					point: "To ensure that PG students gets a chance of at least one industry visit during their stay at IIT Bombay. ", 
				},
						],
		},

		{
			name: 'Centralized Facilities',
			id: 'centralized',
			descriptions: [
				{
					point: "Push for Centralized TA allotment scheme.",
				},
				
				{
					point: "Push for accommodation for more and more married research scholars within Campus in co-ordination with GSHA.",
				},

				{
					point: "Push to promote 'PG research work' page and database on the institute website.",
				},

				
						],
		},

		{
			name: 'PG Council',
			id: 'pgcouncil',
			descriptions: [
				{
					point: "Preparation of PG academic council calendar based on student's feedback.",
				},

				{
					point: "To push to improve upon the involvement of IDC and SOM students in the PGAC.",
				},

				{
					point: "Push for Monthly PGAC meeting and PGAC. ISCP, IRSCP and RSF meet every alternate month.",
				},
				
						],
		},

		{
			name: 'Placements and Internships',
			id: 'exp',
			descriptions: [
				{
					point: "To push for regular summer and Winter internships in coordination with Placement Cell.",
				},

				{
					point: "To conduct winter and summer workshops on Personality Development & Communication Skills in collaboration with Placement Cell..",
				},
						],
		},
        {
			name: 'Follow ups',
			id: 'follow',
			descriptions: [
				{
					point: "Push for tuition fee waiver for PhD students after registered as a PhD student.",
				},

				{
					point: "Follow up of Night Canteen /Snack Vending Machines in the academic area in co-ordination with GSHA.",
				},

                {
					point: "To strengthen Student-Exchange programmes for PhD & Master's students (RA) in coordination with concerned institute secretary for International relations.",
				},

				{
					point: "Increasing number of institute electives in accordance with student's survey.",
				},

				{
					point: "Push for introduction of minors for PG students.",
				},

				{
					point: "Regular update in ASC for course info and pre-requisites through DPGC.",
				},
					],
		},

        {
			name: 'Miscellaneous',
			id: 'Miscellaneous:',
			descriptions: [
				{
					point: "Promotion of research media cell.",
				},

				{
					point: "Push for creation of Database of ongoing research of PhD's in institute.",
				},
                {
					point: "To Conduct Software and Language Learning Classes based on people interest and Demands.",
				},
				{
					point: "To push for open house with HoD and students at least once in a semester, for effective clearance of concerns and grievances.",
				},

				{
					point: "To set up grievances portal at departmental level for PG Students.",
				},

				{
					point: "Push for Structured funding for Research scholars confluence (ReSCon) annually",
				},

				{
					point: "Propose to have an online repository of previous examination question papers of the courses in consent with the faculty (wherever possible).",
				},
				 		],

		}
	];	

	var hostelaffairs = [
		
		{
			name: 'Messes, Institute Eateries and Canteens Reforms ',
			id: 'messes',
			descriptions: [
				{
					point: "Propose a Multi Messing Option to facilitate eating options in all hostel messes, keeping the charges as per a uniform central policy, extending the ease by Universal Electronic Mess Card.",
					
				},

				{
					point: "Introduce a Dynamic Weekly Menu in canteens, for additional food items to increase food variety as well as the number of items available",
				},

				{
					point: "Ensure setting up of a Natur-O Joint, with options inclusive but not limited to fruit & vegetable juices, snacks, fresh fruits etc. around gymkhana grounds",
				},

				{
					point: "Night Delivery to ensure delivery of food from Hostel 12/13/14 canteen thereby increasing access to food options at night ", 
				},
                {
					point: "Introduce a mess equivalent fine system for hostel canteens to ensure hygiene and quality", 
				},{
					point: "Follow up on setting up of a snack vending machines in the academic area", 
				},{
					point: "Follow up on setting up of permanent rain shelters over institute eateries", 
				},
						],
		},

		{
			name: 'Campus Transport Reforms (Tum Tums, Cycles and Rickshaws)',
			id: 'campus',
			descriptions: [
				{
					point: "Initiate Seatless Tum Tums with more capacity, to smoothen commute for students, helping especially during peak hours",
				},
				
				{
					point: "Propose a distinct and dynamic Red Card Stamp System for a limited number of autos with extended timestamp in campus to increase availability of autos at all times",
				},

				{
					point: "Ensure installation of Bus boards with timetable and illustrated Route Maps at bus stops",
				},

				{
					point: "Follow up on cycle pooling system and implement a central on-call cycle repair system",
				},

				
						],
		},{
			name: 'Institute Facilities',
			id: 'Institute Facilities',
			descriptions: [
				{
					point: "Launch Reach Us Portal to incorporate sales, promotional offers on food products from eateries at pre-fixed discounts and inclusion of services such as dry cleaning facilities",
				},
				
				{
					point: "Propose to initiate a Save Surplus Food Campaign for timely collection and donation of surplus mess food via select partner NGOs to ensure minimal wastage of mess food",
				},

				{
					point: "Institute Wi-Fi: Ensure installation of routers to cover connectivity in hostel common areas as well as institute eateries, convocation hall and academic area",
				},

				{
					point: "Revamp the IIT-B app to incorporate a Personalized Notification System, thereby removing unwanted publicity and providing notifications to students only in their desired genres",
				},
                {
					point: "Propose to build Easy-to-Use Washroom Facility for differently abled students across hostels",
				},{
					point: "Formalize transfer facility in shifting by providing trucks, packers & movers and luggage rooms in hostels to ensure a smooth transition",
				},{
					point: "Ensure implementation of the proposed Unisex Hair Salon and Parlour in H15/16 premises",
				},

				
						],
		},

		{
			name: 'Security Refinements',
			id: 'security',
			descriptions: [
				{
					point: "Digitize the current auto ticketing system with the following merits: 1.Ensures availability of real time data to keep track of incoming and outgoing traffic 2.Fast action on complaints facilitated by information sharing between entry-exit points",
				},

				{
					point: "Establish an independent All Female-Quick Response Team for emergency complaints",
				},

				{
					point: "Publicize Central Security Policies to increase awareness about the security rules in institute",
				},
				
				{
					point: "Ensure availability of an on-call professional snake catcher.",
				},

				{
					point: "Follow up on installation of CCTV cameras in prime locations and extension of hostel fencing",
				},

				{
					point: "A large population of students are below the legal drinking age of 21. Given that we are a government institution, the institute forbids alcohol consumption within the premises. This did not stop the 67% students on campus, who had consumed alcohol during their stay.", 

				},

				
						],
		},

		{
			name: 'Hostel Facilities and Administrative Reforms',
			id: 'facilities',
			descriptions: [
				{
					point: "Establish a collaborative design team of IDC-HA striving to build efficient and implementable designs to tackle issues of constrained room space and build aesthetically appealing landmarks",
				},

				{
					point: "Ensure setting up of Air Conditioned Study Rooms in hostels.",
				},
				
				{
					point: "Ensure to revamp GABS portal with dynamic updates of guest room availability.",
				},

				{
					point: "Push for plantation of mosquito repellent plants in hostel areas, particularly near canteens.",
				},

				{
					point: "Propose to start Urban Farming in hostel terraces and gardens to promote horticulture.",
				},

				{
					point: "Restructure the existing preventive Electrical Maintenance Sheets in hostels to increase students authority by having a compulsory cross signature by a council member on them.",
				},
                {
					point: "Ensure an Electronic Key Issue System for all common rooms in hostels to keep the track easier.",
				}, {
					point: "Ensure timely visits of relevant authorities to each hostel to facilitate effective policy making.",
				},
						],
		},

		{
			name: 'Healthcare Facilities',
			id: 'healthcare',
			descriptions: [
				{
					point: "Push for establishing an independent Private Medical Clinic at YP gate with subsidized rates to provide students with another health care service in institute.",
				},
				
				{
					point: "Implement the Blood Donation Portal to streamline the process of donating and requesting blood from voluntary donors, making the urgent blood need easier",
				},

				{
					point: "Organize a full-fledged semester-wise health check-up camp for students at minimal costs",
				},

				{
					point: "Update complete profiles of visiting and permanent doctors, along with their qualifications, past experience and previous work history on revamped hospital website",
				},

				{
					point:"Revamp the hospital guidebook with exhaustive details of hospital policies to spread awareness",
				},

                {
					point: "Follow up on digitization of medical records to prevent information loss and ensure easy access",
				},
				{
					point: "Follow up on kitchen services outsourcing, installation of Wi-Fi routers, spring doors and mosquito nets in hospital premises",
				},

					],
		},
        {
			name: 'Transparency and Accountability of Hostel Affairs Council',
			id: 'Transparency and Accountability of Hostel Affairs Council',
			descriptions: [
				{
					point: "Introduce HA Times, a quarterly e-newsletter to increase awareness about the existing facilities and provide timely updates on the ongoing as well as future plans of the council.",
					
				},

				{
					point: "Publicize the minutes of institute level meetings such as of HCC, HGSC, Maintenance Comms, Mess Comms and Sys Ad Comms, as well as the attendance to increase accountability.",
				},

				{
					point: "Publish a Comprehensive Guidebook containing all the major and minor policies and services related to the working of the Hostel Affairs Council.",
				},

				
						],
		},
                {
			name: 'Alumni and International Relations',
			id: 'Alumni and International Relations',
			descriptions: [
				{
					point: "Introduce Online Alumni Gate Pass to ensure convenient and simplified security clearances.",
					
				},

				{
					point: "Create SemEx Interface, a user-friendly interface, to streamline the semester exchange application process as well as build data for future references.",
				},

				{
					point: "Propose to provide access in institute library to alumni via the existing alumni cards.",
				},{
					point: "Follow up on setting up and extension of the IITB Community Network.",
				},

				
						],
		},

	];

	var stabs = [
		
		{
			name: 'Hobby Clubs and Hostel Technical Activities ',
			id: 'hobby',
			descriptions: [
				{
					point: "Hostel Tech Council association with Clubs: Each hobby club will be associated with the technical council of at least one hostel. Clubs will conduct regular sessions and handson activities in the said hostels. The hostel technical councils and club enthusiasts are also expected to work together to pull off institute wide events.",
					
				},

				{
					point: "Encouragement of PG participation: Efforts will be made to involve postgraduate students in the events and sessions conducted by the Clubs. Events targeting a postgraduate audience will be conducted in the PG hostels.",
				},

				{
					point: "Documentation of Club events: All sessions and events conducted by the Clubs will be well documented. This will be made available online for the reference of students and future teams.",
				},

				{
					point: "Promotion of resource group formation: Regular talks, discussions and meetings will be convened to encourage the natural formation of a focused group of tech enthusiasts. These discussions will have hard prerequisites to ensure that experienced seniors are not dissuaded from attending them, thus aiding a shift away from being a freshmancentric body.", 
				},
                {
					point: "Tech GCs: Existing lowprep GCs such as the Logic GC and Coding GC will be retained. All other GCs will be modelled on the lines of a hackathon in order to promote enthusiastic participation in an informal competitive environment..", 
				},
                {
					point: "BioTech Club: Will establish a BioTech club on a trial basis, to be overlooked by enthusiasts without the existence of a managerial council..", 
				},
						],
		},

		{
			name: 'Projects, ITSP, OKSP, Tech and RnD Exposition',
			id: 'itsp',
			descriptions: [
				{
					point: "Institute Technical Summer Projects: Students will be encouraged to ideate and work on technical projects directly concerning their passion or area of interest such as a particular sport, dance, etc. This blending of passion with technology will encourage students to stick by their projects until completion and also pursue tech in sync with their future activities. Seniors, especially finalyear students, will be encouraged to float their pet projects and mentor freshmen teams taking up the same. Bootcamps and training sessions will be organized prior to the commencement of ITSP. Reimbursement procedures will be streamlined, and made more efficient and transparent.",
				},
				
				{
					point: "Projects: Ideas for potential projects will be sourced from the industry, academia and Centres of Technology and made centrally available on an online portal so that interested students may view the same and get in touch with the requisite points of contact. Regular reviews will be held by an inclusive panel comprising professors, senior students and external mentors to evaluate the progress of the project and provide guidance. Teams will be encouraged to file for provisional patents; this will ensure timely execution of ideas.",
				},

				{
					point: "Tech and RnD Exposition: Will continue with the Tech and RnD exposition to ensure students who have completed projects in ITSP or otherwise get an opportunity to present to alumni, professors and industry. This experience will inspire further development of the project. The Expo will also be an incentive for timely completion and effective presentation of projects.",
				},

				{
					point: "InterIIT Tech Meet: Efforts will be made to lobby for the InterIIT Tech Meet being conducted at a conducive time, and it will be ensured that IIT Bombay has a strong contingent.",
				},

				{
					point: "Online Knowledge Sharing Platform: An online map of students and their fields ofexpertise/interest will be set up to act as a quick reference for students setting out to work on a project and in need of mentorship or guidance. This will be linked to documentation of ongoing or completed projects.",
				},
						],
		},

		{
			name: "Tinkerers' Lab",
			id: 'tinker',
			descriptions: [
				{
					point: "TL Expansion: The timely execution of the TL expansion programme will be ensured with minimum inconvenience to tech enthusiasts working in TL.",
				},

				{
					point: "Bean bags @ TL.",
				},

				{
					point: "Resource database: An online database will be created to include existing resources and equipment in TL, as also future requirements.",
				},
				
				{
					point: "Blah @ TL: 'Blah' will be a platform for enthusiasts to share their knowledge about any topic of interest. 'Blah' is intended to go hand in hand with the informal atmosphere and spirit of 'Tinker@TL'.",
				},

				
						],
		},

		{
			name: 'Media and Publicity',
			id: 'media',
			descriptions: [
				{
					point: "Paperless publicity: Clubs will put up posters and flexes to publicize the initial events of the year. Thereafter, all publicity will be strictly online and paperless.",
				},

				{
					point: "STAB website: The website will be regularly updated with events planned by Clubs and hostel technical councils. Documentation will be made available online, and portals will be opened for continuous feedback. OKSP and useful links to student blogs, online tutorials etc. will be integrated with the website.",
				},
				
				{
					point: "'Lightsaber': In collaboration with the student media body, a tech newsletter will be published every semester to share recent advances in tech, interesting project ideas, coverage of oncampus tech activities and more.",
				},

				
						],
		},

		

	];

	var foot = [
		{
			id: '6',
			name: 'Credits',
			description: "Abhilash Kulkarni, Anshul Avasthi, Chirag Chadha, Deepak Dilipkumar, Jiten Kumar, Mihir Kulkarni, Nasiruddin Ahmad, Nivvedan, Niranjan Thakurdesai, Sreesh Venuturumilli, Shreya Sridhar, Vaibhav Bhalekar",
			logo: 'images/menu/logo.png',
			fb: 'images/menu/fb.png',
			fb_link: 'https://www.facebook.com/insight.iitbombay',
			tw: 'images/menu/twitter.png',
			tw_link: 'https://twitter.com/InsightIITB?lang=en',
			ma: 'images/menu/mail.png',
			ma_link: 'mailto:insight@iitb.ac.in',
		},
	];

})();

