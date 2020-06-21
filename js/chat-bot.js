function chatBot() {
	
	// current user input
	this.input;
	
	/**
	 * respondTo
	 * 
	 * return nothing to skip response
	 * return string for one response
	 * return array of strings for multiple responses
	 * 
	 * @param input - input chat string
	 * @return reply of chat-bot
	 */
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(this.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)'))
			return `hi friend, I'm Draco Bot. Type
				<br><b>covid</b> to learn about covid 19
				<br><b>symptoms</b> to know covid 19 symptoms
				<br><b>precautions</b> to learn about covid 19
				<br><b>covid</b> to learn about covid 19`;
		
		if(this.match('what[^ ]* up') || this.match('sup') || this.match('how are you'))
			return "this github thing is pretty cool, huh?";

		if(this.match('covid') || this.match('covid 19') || this.match('coronavirus') || this.match('covid-19'))
			return "Coronavirus disease 2019 (COVID-19) is defined as illness caused by a novel coronavirus now called severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2; formerly called 2019-nCoV), which was first identified amid an outbreak of respiratory illness cases in Wuhan City, Hubei Province, China. It was initially reported to the WHO on December 31, 2019. On January 30, 2020, the WHO declared the COVID-19 outbreak a global health emergency. On March 11, 2020, the WHO declared COVID-19 a global pandemic, its first such designation since declaring H1N1 influenza a pandemic in 2009.";
		
		if(this.match('symptoms'))
			return `
					<p>COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</p>
					<ul>
					<li><b>Most common symptoms:</b><li>
					<li>fever</li>
					<li>dry cough</li>
					<li>tiredness</li>
					</ul>
					<ul>
					<li><b>Less common symptoms:</b></li>
					<li>aches and pains</li>
					<li>sore throat</li>
					<li>diarrhoea</li>
					<li>conjunctivitis</li>
					<li>headache</li>
					<li>loss of taste or smell</li>
					<li>a rash on skin, or discolouration of fingers or toes</li>
					</ul>
					<ul>
					<li><b>Serious symptoms:</b></li>
					<li>difficulty breathing or shortness of breath</li>
					<li>chest pain or pressure</li>
					<li>loss of speech or movement</li>
					</ul>
					`;

					if(this.match('symptoms'))
						return `
								<p>You can reduce your chances of being infected or spreading COVID-19 by taking some simple precautions:</p>
								<ul>
									<li>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.</li>
									<li>Maintain at least 1 metre (3 feet) distance between yourself and others.</li>
									<li>Avoid going to crowded places.</li>
									 <li>Stay home if you feel unwell.</li>
									<li>If you have a fever, cough and difficulty breathing, seek medical attention. Call in advance.</li>
									<li>Follow the directions of your local health authority.
			</li>
	
								</ul>
								`;
		if(this.match('l(ol)+') || this.match('(ha)+(h|$)') || this.match('lmao'))
			return "what's so funny?";
		
		if(this.match('^no+(\\s|!|\\.|$)'))
			return "don't be such a negative nancy :(";
		
		if(this.match('(cya|bye|see ya|ttyl|talk to you later)'))
			return ["alright, see you around", "good teamwork!"];
		
		if(this.match('(dumb|stupid|is that all)'))
			return ["hey i'm just a proof of concept", "you can make me smarter if you'd like"];
		
		if(this.input == 'noop')
			return;
		
		return input + " what?";
	}
	
	/**
	 * match
	 * 
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
	}
}
