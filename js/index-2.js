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
		redirectTo: '/gs-cult'
	}).
	when('/gs-cult',{
		templateUrl: 'gs-cult.html',
		controller: 'MainController'
	}).
	when('/gs-sports',{
		templateUrl: 'gs-sports.html'
	}).
	when('/gsaa-ug',{
		templateUrl: 'gsaa-ug.html'
	}).
	when('/gsaa-pg',{
		templateUrl: 'gsaa-pg.html'
	}).
	when('/gsha',{
		templateUrl: 'gsha.html'
	}).
	when('/stab',{
		templateUrl: 'stab.html'
	}).
	otherwise({
		redirectTo: '/gs-cult'
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
					point: "The class of 2014 seems to be a diverse one, with students hailing from geographically varied backgrounds, with different belief systems and ways of living. However, only a tenth of the population being female makes the group heavily male-dominated.",
				},

				{
					point: "In freshman year, 97.7% of students identified themselves as straight with 0.4% and 1.2% identifying themselves as gay and bisexual respectively. However, after their stay at IIT, 93.4% of students identified themselves as straight with 0.8% and 2.3% identifying themselves as gay and bisexual respectively.",
				},

				{
					point: "The stay at IIT-Bombay made a significant difference to their perception of their sexuality and sexual orientation. This is an encouraging sign of the campus heading towards a healthy environment for students to accept their own sexuality - with the institute adding the third-gender option to admission forms in 2013.",
				},
				
				{
					point: "In a <a>'survey'</a> focussing on the freshie entrants in '13, it was observed that the average CPI of students from metropolitan regions was higher than that of students from villages or towns. A similar finding is reported here. It has also been observed that 69% of people from metros have had qualms about cheating, while only 33% of those from villages can say the same.",
				},

				{
					point: "Although the class is heavily male-dominated, 50% of the students were involved in a relationship. A significant majority (80%) did not have any sex during their stay. Female students were also significantly more likely to have been involved in relationships and sexual activities than their male counterparts. 26% females had sex during their stay whereas only 16% males did so.",
				},

				{
					point: "A large population of students are below the legal drinking age of 21. Given that we are a government institution, the institute forbids alcohol consumption within the premises. This did not stop the 67% students on campus, who had consumed alcohol during their stay.", 

				},

				{
					point: "However, smoking isn't as prevalent as drinking among the seniors. Three-fourths of the surveyed students don't smoke. Of those who smoke, 10% started in their freshie year, while 82% began after a year at IIT-B. The others picked up the habit even before entering the campus.",
				},
						],
		},

		{
			name: 'Exposure',
			id: 'exp',
			descriptions: [
				{
					point: "Although 27.8% of students are going into consultancy and finance, only 12% of all the respondents see themselves in these fields 5 years down the line. Similarly, while 27% of students are going for Technology/Engineering/R&D, only 16.6% see themselves in these fields after 5 years.",
				},

				{
					point: "Unsurprisingly, the highest average CPI belongs to those going for higher studies. The average CPI of those going into Technology/Engineering/R&D may be a little lower than expected however. It just goes to show that a high CPI is not in general associated with being tech-enthu, or vice versa. Around two-thirds of those pursuing non-core from the MEMS and Civil departments said that they would have pursued 'core' fields if there had been more opportunities to do so.",
				},
				
				{
					point: "In stark contrast to the popular opinion that most IITians go abroad after graduation, nearly two-thirds of the students are staying in India, with USA being a fairly distant 2nd. However, USA is a more popular destination, with 40.5% people wishing they were heading to US, and only 35.9% wishing to stay in India, after passing out.",
				},

				{
					point: "Despite the craze for attending IITs for undergraduate education, it is a common perception that research opportunities as well as the quality of postgraduate education are better abroad. For Technology/Engineering/R&D however, 74% are staying in India.",
				},

				{
					point: "A very small percentage of the population plans to get married within the next couple of years. 12% of respondents do not intend to get married.",
				},

				{
					point: "A significant 86.5% of students have appeared for at least one of the common post graduate entrance exams. While this is understandable for those going into higher studies or research, only 27% of students are actually doing so! It seems to be quite common to attempt these exams and sit for placements anyway, and decide which to pursue based on the results.",
				},
						],
		},

		{
			name: 'General Championships (GCs)',
			id: 'gcs',
			descriptions: [
				{
					point: "While the skills gained are distributed over different categories, more than half the respondents have said they gained organizational skills. Irrespective of whether or not IIT-B is producing the engineering talent it aims to, it does seem that it plays its part in moulding students into leaders.",
				},
				
				{
					point: "A majority of students seem to be leaving IIT Bombay as extroverts. Over half of the students who entered and exited IITB as introverts also said that they did pick up social and communication skills at IIT Bombay. 32.6% of students claimed to have been introverts before but extroverts after staying at IIT!",
				},

				{
					point: "31% of IITians say they feel a disconnect from other non-IITians sometimes, making it hard to socialise and situations uncomfortable.",
				},

				{
					point: "An overwhelming number of students have said they learnt a lot from their stay at IITB. Interestingly, a closer look at the correlation between this and students' attitude towards academics shows that there is a lot to be learnt at IIT Bombay, even for those not interested in academics!",
				},

				{
					point:"The results of the survey on outgoing seniors has given us an insight into various aspects of their lives, during their stay here. Clearly, IIT-Bombay has played its part in these students maturing into individuals ready to face the real world. We wish them all the best in all their future endeavors.",
				}

					],
		},

	];

	var sports = [
		
		{
			name: 'LEARNING ',
			id: 'learning',
			descriptions: [
				{
					point: "Sports Crash Courses : Dissolving the current structure of cult school and organising classes concentrated in a month to minimise clashes with academic commitments ",
					
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
					point: "The class of 2014 seems to be a diverse one, with students hailing from geographically varied backgrounds, with different belief systems and ways of living. However, only a tenth of the population being female makes the group heavily male-dominated.",
				},

				{
					point: "In freshman year, 97.7% of students identified themselves as straight with 0.4% and 1.2% identifying themselves as gay and bisexual respectively. However, after their stay at IIT, 93.4% of students identified themselves as straight with 0.8% and 2.3% identifying themselves as gay and bisexual respectively.",
				},

				{
					point: "The stay at IIT-Bombay made a significant difference to their perception of their sexuality and sexual orientation. This is an encouraging sign of the campus heading towards a healthy environment for students to accept their own sexuality - with the institute adding the third-gender option to admission forms in 2013.",
				},
				
				{
					point: "In a <a>'survey'</a> focussing on the freshie entrants in '13, it was observed that the average CPI of students from metropolitan regions was higher than that of students from villages or towns. A similar finding is reported here. It has also been observed that 69% of people from metros have had qualms about cheating, while only 33% of those from villages can say the same.",
				},

				{
					point: "Although the class is heavily male-dominated, 50% of the students were involved in a relationship. A significant majority (80%) did not have any sex during their stay. Female students were also significantly more likely to have been involved in relationships and sexual activities than their male counterparts. 26% females had sex during their stay whereas only 16% males did so.",
				},

				{
					point: "A large population of students are below the legal drinking age of 21. Given that we are a government institution, the institute forbids alcohol consumption within the premises. This did not stop the 67% students on campus, who had consumed alcohol during their stay.", 

				},

				{
					point: "However, smoking isn't as prevalent as drinking among the seniors. Three-fourths of the surveyed students don't smoke. Of those who smoke, 10% started in their freshie year, while 82% began after a year at IIT-B. The others picked up the habit even before entering the campus.",
				},
						],
		},

		{
			name: 'Exposure',
			id: 'exp',
			descriptions: [
				{
					point: "Although 27.8% of students are going into consultancy and finance, only 12% of all the respondents see themselves in these fields 5 years down the line. Similarly, while 27% of students are going for Technology/Engineering/R&D, only 16.6% see themselves in these fields after 5 years.",
				},

				{
					point: "Unsurprisingly, the highest average CPI belongs to those going for higher studies. The average CPI of those going into Technology/Engineering/R&D may be a little lower than expected however. It just goes to show that a high CPI is not in general associated with being tech-enthu, or vice versa. Around two-thirds of those pursuing non-core from the MEMS and Civil departments said that they would have pursued 'core' fields if there had been more opportunities to do so.",
				},
				
				{
					point: "In stark contrast to the popular opinion that most IITians go abroad after graduation, nearly two-thirds of the students are staying in India, with USA being a fairly distant 2nd. However, USA is a more popular destination, with 40.5% people wishing they were heading to US, and only 35.9% wishing to stay in India, after passing out.",
				},

				{
					point: "Despite the craze for attending IITs for undergraduate education, it is a common perception that research opportunities as well as the quality of postgraduate education are better abroad. For Technology/Engineering/R&D however, 74% are staying in India.",
				},

				{
					point: "A very small percentage of the population plans to get married within the next couple of years. 12% of respondents do not intend to get married.",
				},

				{
					point: "A significant 86.5% of students have appeared for at least one of the common post graduate entrance exams. While this is understandable for those going into higher studies or research, only 27% of students are actually doing so! It seems to be quite common to attempt these exams and sit for placements anyway, and decide which to pursue based on the results.",
				},
						],
		},

		{
			name: 'General Championships (GCs)',
			id: 'gcs',
			descriptions: [
				{
					point: "While the skills gained are distributed over different categories, more than half the respondents have said they gained organizational skills. Irrespective of whether or not IIT-B is producing the engineering talent it aims to, it does seem that it plays its part in moulding students into leaders.",
				},
				
				{
					point: "A majority of students seem to be leaving IIT Bombay as extroverts. Over half of the students who entered and exited IITB as introverts also said that they did pick up social and communication skills at IIT Bombay. 32.6% of students claimed to have been introverts before but extroverts after staying at IIT!",
				},

				{
					point: "31% of IITians say they feel a disconnect from other non-IITians sometimes, making it hard to socialise and situations uncomfortable.",
				},

				{
					point: "An overwhelming number of students have said they learnt a lot from their stay at IITB. Interestingly, a closer look at the correlation between this and students' attitude towards academics shows that there is a lot to be learnt at IIT Bombay, even for those not interested in academics!",
				},

				{
					point:"The results of the survey on outgoing seniors has given us an insight into various aspects of their lives, during their stay here. Clearly, IIT-Bombay has played its part in these students maturing into individuals ready to face the real world. We wish them all the best in all their future endeavors.",
				}

					],
		},

	];

	var academics = [
		
		{
			name: 'LEARNING ',
			id: 'learning',
			descriptions: [
				{
					point: "Academic Crash Courses : Dissolving the current structure of cult school and organising classes concentrated in a month to minimise clashes with academic commitments ",
					
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
					point: "The class of 2014 seems to be a diverse one, with students hailing from geographically varied backgrounds, with different belief systems and ways of living. However, only a tenth of the population being female makes the group heavily male-dominated.",
				},

				{
					point: "In freshman year, 97.7% of students identified themselves as straight with 0.4% and 1.2% identifying themselves as gay and bisexual respectively. However, after their stay at IIT, 93.4% of students identified themselves as straight with 0.8% and 2.3% identifying themselves as gay and bisexual respectively.",
				},

				{
					point: "The stay at IIT-Bombay made a significant difference to their perception of their sexuality and sexual orientation. This is an encouraging sign of the campus heading towards a healthy environment for students to accept their own sexuality - with the institute adding the third-gender option to admission forms in 2013.",
				},
				
				{
					point: "In a <a>'survey'</a> focussing on the freshie entrants in '13, it was observed that the average CPI of students from metropolitan regions was higher than that of students from villages or towns. A similar finding is reported here. It has also been observed that 69% of people from metros have had qualms about cheating, while only 33% of those from villages can say the same.",
				},

				{
					point: "Although the class is heavily male-dominated, 50% of the students were involved in a relationship. A significant majority (80%) did not have any sex during their stay. Female students were also significantly more likely to have been involved in relationships and sexual activities than their male counterparts. 26% females had sex during their stay whereas only 16% males did so.",
				},

				{
					point: "A large population of students are below the legal drinking age of 21. Given that we are a government institution, the institute forbids alcohol consumption within the premises. This did not stop the 67% students on campus, who had consumed alcohol during their stay.", 

				},

				{
					point: "However, smoking isn't as prevalent as drinking among the seniors. Three-fourths of the surveyed students don't smoke. Of those who smoke, 10% started in their freshie year, while 82% began after a year at IIT-B. The others picked up the habit even before entering the campus.",
				},
						],
		},

		{
			name: 'Exposure',
			id: 'exp',
			descriptions: [
				{
					point: "Although 27.8% of students are going into consultancy and finance, only 12% of all the respondents see themselves in these fields 5 years down the line. Similarly, while 27% of students are going for Technology/Engineering/R&D, only 16.6% see themselves in these fields after 5 years.",
				},

				{
					point: "Unsurprisingly, the highest average CPI belongs to those going for higher studies. The average CPI of those going into Technology/Engineering/R&D may be a little lower than expected however. It just goes to show that a high CPI is not in general associated with being tech-enthu, or vice versa. Around two-thirds of those pursuing non-core from the MEMS and Civil departments said that they would have pursued 'core' fields if there had been more opportunities to do so.",
				},
				
				{
					point: "In stark contrast to the popular opinion that most IITians go abroad after graduation, nearly two-thirds of the students are staying in India, with USA being a fairly distant 2nd. However, USA is a more popular destination, with 40.5% people wishing they were heading to US, and only 35.9% wishing to stay in India, after passing out.",
				},

				{
					point: "Despite the craze for attending IITs for undergraduate education, it is a common perception that research opportunities as well as the quality of postgraduate education are better abroad. For Technology/Engineering/R&D however, 74% are staying in India.",
				},

				{
					point: "A very small percentage of the population plans to get married within the next couple of years. 12% of respondents do not intend to get married.",
				},

				{
					point: "A significant 86.5% of students have appeared for at least one of the common post graduate entrance exams. While this is understandable for those going into higher studies or research, only 27% of students are actually doing so! It seems to be quite common to attempt these exams and sit for placements anyway, and decide which to pursue based on the results.",
				},
						],
		},

		{
			name: 'General Championships (GCs)',
			id: 'gcs',
			descriptions: [
				{
					point: "While the skills gained are distributed over different categories, more than half the respondents have said they gained organizational skills. Irrespective of whether or not IIT-B is producing the engineering talent it aims to, it does seem that it plays its part in moulding students into leaders.",
				},
				
				{
					point: "A majority of students seem to be leaving IIT Bombay as extroverts. Over half of the students who entered and exited IITB as introverts also said that they did pick up social and communication skills at IIT Bombay. 32.6% of students claimed to have been introverts before but extroverts after staying at IIT!",
				},

				{
					point: "31% of IITians say they feel a disconnect from other non-IITians sometimes, making it hard to socialise and situations uncomfortable.",
				},

				{
					point: "An overwhelming number of students have said they learnt a lot from their stay at IITB. Interestingly, a closer look at the correlation between this and students' attitude towards academics shows that there is a lot to be learnt at IIT Bombay, even for those not interested in academics!",
				},

				{
					point:"The results of the survey on outgoing seniors has given us an insight into various aspects of their lives, during their stay here. Clearly, IIT-Bombay has played its part in these students maturing into individuals ready to face the real world. We wish them all the best in all their future endeavors.",
				}

					],
		},

	];

	var academicpgs = [
		
		{
			name: 'LEARNING ',
			id: 'learning',
			descriptions: [
				{
					point: "Academic PG Crash Courses : Dissolving the current structure of cult school and organising classes concentrated in a month to minimise clashes with academic commitments ",
					
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
					point: "The class of 2014 seems to be a diverse one, with students hailing from geographically varied backgrounds, with different belief systems and ways of living. However, only a tenth of the population being female makes the group heavily male-dominated.",
				},

				{
					point: "In freshman year, 97.7% of students identified themselves as straight with 0.4% and 1.2% identifying themselves as gay and bisexual respectively. However, after their stay at IIT, 93.4% of students identified themselves as straight with 0.8% and 2.3% identifying themselves as gay and bisexual respectively.",
				},

				{
					point: "The stay at IIT-Bombay made a significant difference to their perception of their sexuality and sexual orientation. This is an encouraging sign of the campus heading towards a healthy environment for students to accept their own sexuality - with the institute adding the third-gender option to admission forms in 2013.",
				},
				
				{
					point: "In a <a>'survey'</a> focussing on the freshie entrants in '13, it was observed that the average CPI of students from metropolitan regions was higher than that of students from villages or towns. A similar finding is reported here. It has also been observed that 69% of people from metros have had qualms about cheating, while only 33% of those from villages can say the same.",
				},

				{
					point: "Although the class is heavily male-dominated, 50% of the students were involved in a relationship. A significant majority (80%) did not have any sex during their stay. Female students were also significantly more likely to have been involved in relationships and sexual activities than their male counterparts. 26% females had sex during their stay whereas only 16% males did so.",
				},

				{
					point: "A large population of students are below the legal drinking age of 21. Given that we are a government institution, the institute forbids alcohol consumption within the premises. This did not stop the 67% students on campus, who had consumed alcohol during their stay.", 

				},

				{
					point: "However, smoking isn't as prevalent as drinking among the seniors. Three-fourths of the surveyed students don't smoke. Of those who smoke, 10% started in their freshie year, while 82% began after a year at IIT-B. The others picked up the habit even before entering the campus.",
				},
						],
		},

		{
			name: 'Exposure',
			id: 'exp',
			descriptions: [
				{
					point: "Although 27.8% of students are going into consultancy and finance, only 12% of all the respondents see themselves in these fields 5 years down the line. Similarly, while 27% of students are going for Technology/Engineering/R&D, only 16.6% see themselves in these fields after 5 years.",
				},

				{
					point: "Unsurprisingly, the highest average CPI belongs to those going for higher studies. The average CPI of those going into Technology/Engineering/R&D may be a little lower than expected however. It just goes to show that a high CPI is not in general associated with being tech-enthu, or vice versa. Around two-thirds of those pursuing non-core from the MEMS and Civil departments said that they would have pursued 'core' fields if there had been more opportunities to do so.",
				},
				
				{
					point: "In stark contrast to the popular opinion that most IITians go abroad after graduation, nearly two-thirds of the students are staying in India, with USA being a fairly distant 2nd. However, USA is a more popular destination, with 40.5% people wishing they were heading to US, and only 35.9% wishing to stay in India, after passing out.",
				},

				{
					point: "Despite the craze for attending IITs for undergraduate education, it is a common perception that research opportunities as well as the quality of postgraduate education are better abroad. For Technology/Engineering/R&D however, 74% are staying in India.",
				},

				{
					point: "A very small percentage of the population plans to get married within the next couple of years. 12% of respondents do not intend to get married.",
				},

				{
					point: "A significant 86.5% of students have appeared for at least one of the common post graduate entrance exams. While this is understandable for those going into higher studies or research, only 27% of students are actually doing so! It seems to be quite common to attempt these exams and sit for placements anyway, and decide which to pursue based on the results.",
				},
						],
		},

		{
			name: 'General Championships (GCs)',
			id: 'gcs',
			descriptions: [
				{
					point: "While the skills gained are distributed over different categories, more than half the respondents have said they gained organizational skills. Irrespective of whether or not IIT-B is producing the engineering talent it aims to, it does seem that it plays its part in moulding students into leaders.",
				},
				
				{
					point: "A majority of students seem to be leaving IIT Bombay as extroverts. Over half of the students who entered and exited IITB as introverts also said that they did pick up social and communication skills at IIT Bombay. 32.6% of students claimed to have been introverts before but extroverts after staying at IIT!",
				},

				{
					point: "31% of IITians say they feel a disconnect from other non-IITians sometimes, making it hard to socialise and situations uncomfortable.",
				},

				{
					point: "An overwhelming number of students have said they learnt a lot from their stay at IITB. Interestingly, a closer look at the correlation between this and students' attitude towards academics shows that there is a lot to be learnt at IIT Bombay, even for those not interested in academics!",
				},

				{
					point:"The results of the survey on outgoing seniors has given us an insight into various aspects of their lives, during their stay here. Clearly, IIT-Bombay has played its part in these students maturing into individuals ready to face the real world. We wish them all the best in all their future endeavors.",
				}

					],
		},

	];	

	var hostelaffairs = [
		
		{
			name: 'LEARNING ',
			id: 'learning',
			descriptions: [
				{
					point: "Hostel Crash Courses : Dissolving the current structure of cult school and organising classes concentrated in a month to minimise clashes with academic commitments ",
					
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
					point: "The class of 2014 seems to be a diverse one, with students hailing from geographically varied backgrounds, with different belief systems and ways of living. However, only a tenth of the population being female makes the group heavily male-dominated.",
				},

				{
					point: "In freshman year, 97.7% of students identified themselves as straight with 0.4% and 1.2% identifying themselves as gay and bisexual respectively. However, after their stay at IIT, 93.4% of students identified themselves as straight with 0.8% and 2.3% identifying themselves as gay and bisexual respectively.",
				},

				{
					point: "The stay at IIT-Bombay made a significant difference to their perception of their sexuality and sexual orientation. This is an encouraging sign of the campus heading towards a healthy environment for students to accept their own sexuality - with the institute adding the third-gender option to admission forms in 2013.",
				},
				
				{
					point: "In a <a>'survey'</a> focussing on the freshie entrants in '13, it was observed that the average CPI of students from metropolitan regions was higher than that of students from villages or towns. A similar finding is reported here. It has also been observed that 69% of people from metros have had qualms about cheating, while only 33% of those from villages can say the same.",
				},

				{
					point: "Although the class is heavily male-dominated, 50% of the students were involved in a relationship. A significant majority (80%) did not have any sex during their stay. Female students were also significantly more likely to have been involved in relationships and sexual activities than their male counterparts. 26% females had sex during their stay whereas only 16% males did so.",
				},

				{
					point: "A large population of students are below the legal drinking age of 21. Given that we are a government institution, the institute forbids alcohol consumption within the premises. This did not stop the 67% students on campus, who had consumed alcohol during their stay.", 

				},

				{
					point: "However, smoking isn't as prevalent as drinking among the seniors. Three-fourths of the surveyed students don't smoke. Of those who smoke, 10% started in their freshie year, while 82% began after a year at IIT-B. The others picked up the habit even before entering the campus.",
				},
						],
		},

		{
			name: 'Exposure',
			id: 'exp',
			descriptions: [
				{
					point: "Although 27.8% of students are going into consultancy and finance, only 12% of all the respondents see themselves in these fields 5 years down the line. Similarly, while 27% of students are going for Technology/Engineering/R&D, only 16.6% see themselves in these fields after 5 years.",
				},

				{
					point: "Unsurprisingly, the highest average CPI belongs to those going for higher studies. The average CPI of those going into Technology/Engineering/R&D may be a little lower than expected however. It just goes to show that a high CPI is not in general associated with being tech-enthu, or vice versa. Around two-thirds of those pursuing non-core from the MEMS and Civil departments said that they would have pursued 'core' fields if there had been more opportunities to do so.",
				},
				
				{
					point: "In stark contrast to the popular opinion that most IITians go abroad after graduation, nearly two-thirds of the students are staying in India, with USA being a fairly distant 2nd. However, USA is a more popular destination, with 40.5% people wishing they were heading to US, and only 35.9% wishing to stay in India, after passing out.",
				},

				{
					point: "Despite the craze for attending IITs for undergraduate education, it is a common perception that research opportunities as well as the quality of postgraduate education are better abroad. For Technology/Engineering/R&D however, 74% are staying in India.",
				},

				{
					point: "A very small percentage of the population plans to get married within the next couple of years. 12% of respondents do not intend to get married.",
				},

				{
					point: "A significant 86.5% of students have appeared for at least one of the common post graduate entrance exams. While this is understandable for those going into higher studies or research, only 27% of students are actually doing so! It seems to be quite common to attempt these exams and sit for placements anyway, and decide which to pursue based on the results.",
				},
						],
		},

		{
			name: 'General Championships (GCs)',
			id: 'gcs',
			descriptions: [
				{
					point: "While the skills gained are distributed over different categories, more than half the respondents have said they gained organizational skills. Irrespective of whether or not IIT-B is producing the engineering talent it aims to, it does seem that it plays its part in moulding students into leaders.",
				},
				
				{
					point: "A majority of students seem to be leaving IIT Bombay as extroverts. Over half of the students who entered and exited IITB as introverts also said that they did pick up social and communication skills at IIT Bombay. 32.6% of students claimed to have been introverts before but extroverts after staying at IIT!",
				},

				{
					point: "31% of IITians say they feel a disconnect from other non-IITians sometimes, making it hard to socialise and situations uncomfortable.",
				},

				{
					point: "An overwhelming number of students have said they learnt a lot from their stay at IITB. Interestingly, a closer look at the correlation between this and students' attitude towards academics shows that there is a lot to be learnt at IIT Bombay, even for those not interested in academics!",
				},

				{
					point:"The results of the survey on outgoing seniors has given us an insight into various aspects of their lives, during their stay here. Clearly, IIT-Bombay has played its part in these students maturing into individuals ready to face the real world. We wish them all the best in all their future endeavors.",
				}

					],
		},

	];

	var stabs = [
		
		{
			name: 'LEARNING ',
			id: 'learning',
			descriptions: [
				{
					point: "Technical Crash Courses : Dissolving the current structure of cult school and organising classes concentrated in a month to minimise clashes with academic commitments ",
					
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
					point: "The class of 2014 seems to be a diverse one, with students hailing from geographically varied backgrounds, with different belief systems and ways of living. However, only a tenth of the population being female makes the group heavily male-dominated.",
				},

				{
					point: "In freshman year, 97.7% of students identified themselves as straight with 0.4% and 1.2% identifying themselves as gay and bisexual respectively. However, after their stay at IIT, 93.4% of students identified themselves as straight with 0.8% and 2.3% identifying themselves as gay and bisexual respectively.",
				},

				{
					point: "The stay at IIT-Bombay made a significant difference to their perception of their sexuality and sexual orientation. This is an encouraging sign of the campus heading towards a healthy environment for students to accept their own sexuality - with the institute adding the third-gender option to admission forms in 2013.",
				},
				
				{
					point: "In a <a>'survey'</a> focussing on the freshie entrants in '13, it was observed that the average CPI of students from metropolitan regions was higher than that of students from villages or towns. A similar finding is reported here. It has also been observed that 69% of people from metros have had qualms about cheating, while only 33% of those from villages can say the same.",
				},

				{
					point: "Although the class is heavily male-dominated, 50% of the students were involved in a relationship. A significant majority (80%) did not have any sex during their stay. Female students were also significantly more likely to have been involved in relationships and sexual activities than their male counterparts. 26% females had sex during their stay whereas only 16% males did so.",
				},

				{
					point: "A large population of students are below the legal drinking age of 21. Given that we are a government institution, the institute forbids alcohol consumption within the premises. This did not stop the 67% students on campus, who had consumed alcohol during their stay.", 

				},

				{
					point: "However, smoking isn't as prevalent as drinking among the seniors. Three-fourths of the surveyed students don't smoke. Of those who smoke, 10% started in their freshie year, while 82% began after a year at IIT-B. The others picked up the habit even before entering the campus.",
				},
						],
		},

		{
			name: 'Exposure',
			id: 'exp',
			descriptions: [
				{
					point: "Although 27.8% of students are going into consultancy and finance, only 12% of all the respondents see themselves in these fields 5 years down the line. Similarly, while 27% of students are going for Technology/Engineering/R&D, only 16.6% see themselves in these fields after 5 years.",
				},

				{
					point: "Unsurprisingly, the highest average CPI belongs to those going for higher studies. The average CPI of those going into Technology/Engineering/R&D may be a little lower than expected however. It just goes to show that a high CPI is not in general associated with being tech-enthu, or vice versa. Around two-thirds of those pursuing non-core from the MEMS and Civil departments said that they would have pursued 'core' fields if there had been more opportunities to do so.",
				},
				
				{
					point: "In stark contrast to the popular opinion that most IITians go abroad after graduation, nearly two-thirds of the students are staying in India, with USA being a fairly distant 2nd. However, USA is a more popular destination, with 40.5% people wishing they were heading to US, and only 35.9% wishing to stay in India, after passing out.",
				},

				{
					point: "Despite the craze for attending IITs for undergraduate education, it is a common perception that research opportunities as well as the quality of postgraduate education are better abroad. For Technology/Engineering/R&D however, 74% are staying in India.",
				},

				{
					point: "A very small percentage of the population plans to get married within the next couple of years. 12% of respondents do not intend to get married.",
				},

				{
					point: "A significant 86.5% of students have appeared for at least one of the common post graduate entrance exams. While this is understandable for those going into higher studies or research, only 27% of students are actually doing so! It seems to be quite common to attempt these exams and sit for placements anyway, and decide which to pursue based on the results.",
				},
						],
		},

		{
			name: 'General Championships (GCs)',
			id: 'gcs',
			descriptions: [
				{
					point: "While the skills gained are distributed over different categories, more than half the respondents have said they gained organizational skills. Irrespective of whether or not IIT-B is producing the engineering talent it aims to, it does seem that it plays its part in moulding students into leaders.",
				},
				
				{
					point: "A majority of students seem to be leaving IIT Bombay as extroverts. Over half of the students who entered and exited IITB as introverts also said that they did pick up social and communication skills at IIT Bombay. 32.6% of students claimed to have been introverts before but extroverts after staying at IIT!",
				},

				{
					point: "31% of IITians say they feel a disconnect from other non-IITians sometimes, making it hard to socialise and situations uncomfortable.",
				},

				{
					point: "An overwhelming number of students have said they learnt a lot from their stay at IITB. Interestingly, a closer look at the correlation between this and students' attitude towards academics shows that there is a lot to be learnt at IIT Bombay, even for those not interested in academics!",
				},

				{
					point:"The results of the survey on outgoing seniors has given us an insight into various aspects of their lives, during their stay here. Clearly, IIT-Bombay has played its part in these students maturing into individuals ready to face the real world. We wish them all the best in all their future endeavors.",
				}

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

