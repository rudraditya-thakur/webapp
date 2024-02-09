const questionAnswerMap =
{
    "What is the role of primary care physicians in healthcare": "Primary care physicians serve as the first point of contact for patients, providing preventive care, managing chronic conditions, and coordinating specialized care when needed.",
    "How does vaccination work to prevent infectious diseases": "Vaccination works by introducing a weakened or killed form of a pathogen into the body, triggering the immune system to produce antibodies. These antibodies provide immunity against future infections by the same pathogen.",
    "What are the common risk factors for heart disease": "Common risk factors for heart disease include high blood pressure, high cholesterol levels, smoking, obesity, diabetes, and a sedentary lifestyle.",
    "What is the difference between a virus and a bacterium": "Viruses are infectious agents that require a host cell to replicate and cause disease, while bacteria are single-celled organisms that can live independently and reproduce on their own.",
    "How does exercise benefit overall health": "Regular exercise contributes to cardiovascular health, weight management, improved mood, increased energy levels, and reduced risk of chronic diseases such as diabetes and heart disease.",
    "What are the symptoms of the common cold": "Symptoms of the common cold include a runny or stuffy nose, sore throat, cough, sneezing, mild body aches, and low-grade fever.",
    "What is the purpose of antibiotics, and when are they appropriate for use": "Antibiotics are used to treat bacterial infections by killing or inhibiting the growth of bacteria. They are appropriate for bacterial infections but not effective against viral infections like the common cold or flu.",
    "How can individuals prevent the spread of infectious diseases": "Individuals can prevent the spread of infectious diseases by practicing good hygiene, including frequent handwashing, covering coughs and sneezes, staying home when sick, and getting vaccinated.",
    "What is the recommended frequency for routine health screenings": "The recommended frequency for routine health screenings varies depending on factors such as age, gender, and personal health history. Common screenings include blood pressure checks, cholesterol tests, mammograms, and colonoscopies.",
    "What are the benefits of maintaining a balanced diet": "A balanced diet provides essential nutrients for overall health and well-being, supports healthy growth and development, helps maintain a healthy weight, reduces the risk of chronic diseases, and promotes optimal bodily function.",
    "How does stress impact health": "Chronic stress can negatively affect physical and mental health, contributing to conditions such as high blood pressure, heart disease, obesity, depression, and anxiety.",
    "What is the importance of mental health awareness": "Mental health awareness is important for reducing stigma, promoting early intervention and treatment, fostering supportive communities, and improving overall quality of life for individuals affected by mental health conditions.",
    "What are some strategies for managing stress effectively": "Strategies for managing stress include practicing relaxation techniques such as deep breathing and meditation, engaging in regular physical activity, maintaining a healthy lifestyle, seeking social support, and setting realistic goals.",
    "How does smoking affect health": "Smoking is a major risk factor for various health problems, including lung cancer, heart disease, stroke, respiratory infections, and chronic obstructive pulmonary disease (COPD).",
    "What are the signs and symptoms of depression": "Signs and symptoms of depression may include persistent feelings of sadness or hopelessness, loss of interest in activities once enjoyed, changes in appetite or sleep patterns, fatigue, irritability, and difficulty concentrating.",
    "What are the benefits of regular sleep patterns": "Regular sleep patterns promote overall health and well-being by supporting cognitive function, mood regulation, immune function, and physical recovery. Adequate sleep is essential for optimal performance and productivity.",
    "How does alcohol consumption impact health": "Excessive alcohol consumption can lead to various health problems, including liver disease, heart disease, cancer, mental health disorders, impaired judgment, and addiction.",
    "What are the different types of cancer treatments available": "Cancer treatments include surgery, chemotherapy, radiation therapy, immunotherapy, targeted therapy, hormone therapy, and stem cell transplantation.",
    "What are the risk factors for developing skin cancer": "Risk factors for skin cancer include excessive sun exposure, history of sunburns, indoor tanning, fair skin, family history of skin cancer, and certain genetic factors.",
    "How does nutrition affect bone health": "Adequate intake of calcium, vitamin D, protein, and other nutrients is essential for maintaining strong and healthy bones throughout life and reducing the risk of osteoporosis and fractures.",
    "What are the symptoms of asthma": "Symptoms of asthma may include wheezing, coughing, shortness of breath, chest tightness, and difficulty breathing, especially during physical activity or exposure to triggers such as allergens or irritants.",
    "How does diabetes affect the eyes": "Diabetes can lead to diabetic retinopathy, a serious eye condition that damages the blood vessels in the retina and can cause vision loss or blindness if left untreated.",
    "What are the benefits of breastfeeding for both mother and baby": "Breastfeeding provides essential nutrients and antibodies for the baby, promotes bonding between mother and baby, reduces the risk of infections and chronic diseases for both mother and baby, and supports optimal growth and development.",
    "How does physical therapy help in rehabilitation": "Physical therapy helps restore movement and function, reduces pain, improves strength and flexibility, promotes healing and recovery, and prevents further injury through personalized exercise programs and therapeutic techniques.",
    "What are the symptoms of depression in older adults": "Symptoms of depression in older adults may include persistent sadness, fatigue, loss of interest in activities, changes in appetite or weight, sleep disturbances, feelings of worthlessness or guilt, and thoughts of death or suicide.",
    "How does the body regulate blood sugar levels": "The body regulates blood sugar levels through the actions of insulin, a hormone produced by the pancreas that helps cells absorb glucose from the bloodstream and store it for energy or use it as fuel.",
    "What are the long-term effects of untreated high blood pressure": "Untreated high blood pressure can lead to serious health complications, including heart disease, stroke, kidney disease, vision loss, peripheral artery disease, and cognitive decline.",
    "How does regular dental care contribute to overall health": "Regular dental care helps prevent oral health problems such as cavities, gum disease, and tooth loss, reduces the risk of systemic health conditions linked to poor oral health, and promotes overall well-being and quality of life.",
    "What are the benefits of regular eye exams": "Regular eye exams help detect vision problems, eye diseases, and other health conditions early when they are most treatable, preserve eye health and function, and maintain optimal vision throughout life.",
    "How does the body respond to stress": "The body responds to stress by releasing stress hormones such as cortisol and adrenaline, activating the 'fight or flight' response, increasing heart rate and blood pressure, and preparing the body to respond to perceived threats or challenges.",
    "What is the importance of maintaining a healthy gut microbiome": "A healthy gut microbiome is essential for digestion, nutrient absorption, immune function, hormone regulation, brain health, and protection against infections and diseases.",
    "What are the benefits of regular cardiovascular exercise": "Regular cardiovascular exercise strengthens the heart and lungs, improves circulation, lowers blood pressure, reduces the risk of heart disease and stroke, promotes weight loss and weight management, and enhances overall fitness and endurance.",
    "How does the body regulate temperature": "The body regulates temperature through processes such as sweating, shivering, vasodilation (expansion of blood vessels), and vasoconstriction (narrowing of blood vessels) to maintain a stable internal body temperature within a narrow range.",
    "What are the symptoms of food poisoning": "Symptoms of food poisoning may include nausea, vomiting, diarrhea, abdominal pain, fever, headache, muscle aches, and dehydration, depending on the type of bacteria, virus, or toxin ingested.",
    "What is the importance of proper hand hygiene in preventing infections": "Proper hand hygiene, including handwashing with soap and water or using hand sanitizer, is crucial for removing germs and reducing the spread of infections, including respiratory infections, gastrointestinal illnesses, and healthcare-associated infections.",
    "How does chronic stress contribute to health problems": "Chronic stress can contribute to a wide range of health problems, including cardiovascular disease, obesity, diabetes, depression, anxiety, digestive disorders, insomnia, and weakened immune function.",
    "What are the benefits of maintaining a healthy work-life balance": "Maintaining a healthy work-life balance reduces stress, prevents burnout, promotes overall well-being, improves relationships with family and friends, increases productivity and job satisfaction, and enhances quality of life.",
    "How does physical activity benefit mental health": "Physical activity releases endorphins, neurotransmitters that promote feelings of happiness and well-being, reduces stress hormones, improves mood, boosts self-esteem, enhances cognitive function, and reduces the risk of depression and anxiety.",
    "What are the warning signs of a heart attack": "Warning signs of a heart attack include chest pain or discomfort, shortness of breath, nausea or vomiting, lightheadedness or dizziness, pain or discomfort in the arms, back, neck, jaw, or stomach, and cold sweats.",
    "What are the benefits of regular mindfulness meditation": "Regular mindfulness meditation reduces stress, anxiety, and depression, improves focus and attention, enhances emotional regulation, promotes relaxation and better sleep, and increases overall resilience and well-being.",
    "How does sleep quality affect overall health": "Quality sleep is essential for physical and mental health, including immune function, hormone regulation, cognitive function, mood regulation, memory consolidation, and overall vitality and well-being.",
    "What are the risk factors for developing Alzheimer's disease": "Risk factors for Alzheimer's disease include age, family history of the disease, genetics, certain medical conditions, head injuries, and lifestyle factors such as smoking, physical inactivity, and poor diet.",
    "What are the benefits of regular physical activity for children and adolescents": "Regular physical activity in children and adolescents promotes healthy growth and development, improves cardiovascular health, enhances muscular strength and endurance, supports bone health, and reduces the risk of obesity and chronic diseases later in life.",
    "How does the body metabolize carbohydrates, fats, and proteins": "Carbohydrates are broken down into glucose, fats are broken down into fatty acids and glycerol, and proteins are broken down into amino acids through digestion and metabolism, providing energy and building blocks for cellular functions and tissue repair.",
    "What are the symptoms of a concussion": "Symptoms of a concussion may include headache, dizziness, confusion, nausea or vomiting, sensitivity to light or noise, blurred vision, difficulty concentrating, memory problems, and changes in mood or behavior.",
    "How does smoking affect cardiovascular health": "Smoking damages blood vessels, increases blood pressure and heart rate, reduces oxygen supply to the heart and tissues, promotes inflammation and blood clot formation, and contributes to the development of heart disease, stroke, and peripheral artery disease.",
    "What are the different stages of sleep": "Sleep consists of multiple stages, including non-rapid eye movement (NREM) sleep stages 1, 2, and 3 (deep sleep), and rapid eye movement (REM) sleep, each serving different functions in restorative sleep, memory consolidation, and brain function.",
    "What are the benefits of vaccination": "Vaccination protects against infectious diseases by stimulating the immune system to produce antibodies and develop immunity, prevents the spread of diseases within communities, reduces illness, hospitalizations, and deaths, and contributes to public health and disease eradication efforts.",
    "How does chronic inflammation contribute to disease": "Chronic inflammation is linked to the development of various health conditions, including cardiovascular disease, diabetes, autoimmune disorders, cancer, neurodegenerative diseases, and chronic pain, by damaging tissues, disrupting normal cellular functions, and promoting disease progression.",
    "What are the signs of dehydration": "Signs of dehydration include thirst, dry mouth, dark-colored urine, infrequent urination, fatigue, dizziness, lightheadedness, confusion, dry skin, and decreased tear production, indicating a lack of adequate fluid intake and potential fluid loss from the body.",
    "How does stress impact the immune system": "Stress activates the body's stress response, releasing stress hormones such as cortisol and adrenaline, which temporarily enhance immune function but can weaken the immune system over time, increasing susceptibility to infections, inflammation, and autoimmune disorders.",
    "What are the risk factors for developing osteoarthritis": "Risk factors for osteoarthritis include age, obesity, joint injury or trauma, repetitive stress on joints, genetics, gender (more common in females), bone deformities, and certain occupations or activities involving heavy lifting or repetitive movements.",
    "How does the body regulate blood pressure": "Blood pressure is regulated by the cardiovascular and nervous systems through mechanisms such as vasoconstriction (narrowing of blood vessels) and vasodilation (expansion of blood vessels), heart rate regulation, blood volume control, and hormone signaling to maintain optimal blood flow and pressure throughout the body.",
    "What is the role of antioxidants in promoting health": "Antioxidants help neutralize harmful free radicals, unstable molecules that can damage cells and contribute to oxidative stress, inflammation, and chronic diseases such as heart disease, cancer, and neurodegenerative disorders, by preventing oxidative damage and supporting cellular repair and protection.",
    "How does the body regulate blood glucose levels": "Blood glucose levels are regulated by insulin, a hormone produced by the pancreas, which helps cells absorb glucose from the bloodstream and store it for energy or use it as fuel, maintaining blood sugar levels within a narrow range to support cellular functions and metabolism.",
    "What are the symptoms of a stroke": "Symptoms of a stroke may include sudden numbness or weakness in the face, arm, or leg (especially on one side of the body), sudden confusion, trouble speaking or understanding speech, sudden trouble seeing in one or both eyes, sudden trouble walking, dizziness, loss of balance, or coordination, and sudden severe headache with no known cause.",
    "How does the menstrual cycle affect women's health": "The menstrual cycle is a normal physiological process that involves hormonal fluctuations, ovulation, and changes in the uterine lining, which regulate menstruation, fertility, and reproductive health, and may influence mood, energy levels, and physical symptoms such as cramps and bloating.",
    "What are the benefits of maintaining a healthy weight": "Maintaining a healthy weight reduces the risk of obesity-related health problems, including heart disease, diabetes, stroke, certain cancers, osteoarthritis, and sleep apnea, improves overall health and quality of life, and supports long-term well-being and longevity.",
    "How does the immune system respond to infection": "The immune system responds to infection by detecting and recognizing foreign invaders such as bacteria, viruses, parasites, and fungi, mobilizing immune cells and antibodies to destroy pathogens, and mounting an inflammatory response to contain and eliminate infections while maintaining tissue homeostasis and repair.",
    "What are the benefits of regular cholesterol screenings": "Regular cholesterol screenings help assess cardiovascular risk, identify high cholesterol levels and lipid imbalances, guide preventive measures and lifestyle modifications to lower cholesterol levels, reduce the risk of heart disease and stroke, and promote heart-healthy behaviors and treatment interventions.",
    "How does the body maintain electrolyte balance": "Electrolyte balance is maintained through processes such as renal filtration and reabsorption, electrolyte transport across cell membranes, hormonal regulation, and fluid intake and output, ensuring optimal levels of sodium, potassium, chloride, calcium, magnesium, and phosphate for cellular function and fluid balance.",
    "What are the benefits of regular breast self-exams": "Regular breast self-exams help women become familiar with their breast tissue, detect changes such as lumps, thickening, or skin abnormalities, identify potential signs of breast cancer early, and promote breast health awareness and proactive healthcare practices.",
    "How does the body respond to acute pain": "The body responds to acute pain through a complex process involving sensory perception, nerve signaling, neurotransmitter release, and activation of pain pathways in the brain and spinal cord, triggering protective reflexes, emotional responses, and behavioral adaptations to alleviate pain and promote healing.",
    "What are the symptoms of a urinary tract infection (UTI)": "Symptoms of a urinary tract infection may include frequent urination, urgency to urinate, burning or pain during urination, cloudy or foul-smelling urine, blood in the urine, pelvic pain or discomfort, and fever or chills, indicating inflammation or infection of the urinary tract.",
    "How does sleep impact cognitive function and memory": "Sleep plays a critical role in cognitive function and memory consolidation, facilitating neural processing, synaptic plasticity, and memory storage during various stages of sleep, including slow-wave sleep (deep sleep) and rapid eye movement (REM) sleep, supporting learning, problem-solving, and information retention.",
    "What are the risk factors for developing type 2 diabetes": "Risk factors for type 2 diabetes include obesity, sedentary lifestyle, unhealthy diet, family history of diabetes, ethnicity (higher risk in African American, Hispanic, Native American, and Asian American populations), age (risk increases with age), and gestational diabetes during pregnancy.",
    "What is the importance of regular dental care in overall health": "Regular dental care promotes oral health by preventing tooth decay, gum disease, and oral infections, reducing the risk of systemic health problems such as heart disease, diabetes, and respiratory infections, and supporting overall well-being, confidence, and quality of life.",
    "What are the risk factors for developing lung cancer?":
    "Risk factors for lung cancer include smoking tobacco, exposure to secondhand smoke, occupational exposure to carcinogens (such as asbestos and radon), air pollution, genetic predisposition, and a family history of lung cancer.",
    "How does the body regulate blood sugar levels in individuals with diabetes?":
    "In individuals with diabetes, blood sugar levels are regulated through medication (such as insulin or oral hypoglycemic agents), dietary management, physical activity, and monitoring blood glucose levels regularly to prevent hyperglycemia (high blood sugar) or hypoglycemia (low blood sugar) episodes.",
    "What are the benefits of regular eye exams?":
    "Regular eye exams help detect vision problems (such as refractive errors or cataracts), monitor eye health conditions (such as glaucoma or macular degeneration), identify signs of systemic diseases (such as diabetes or hypertension), and maintain optimal visual acuity and eye function.",
    "How does the body respond to allergic reactions?":
    "The body responds to allergic reactions by releasing histamine and other chemicals, triggering inflammation, swelling, itching, and other symptoms, activating the immune system to identify and neutralize allergens, and potentially causing allergic rhinitis, asthma, hives, or anaphylaxis in severe cases.",
    "What are the benefits of breastfeeding for infants and mothers?":
    "Breastfeeding provides essential nutrients, antibodies, and immune factors for infants, promotes bonding and emotional attachment between mothers and babies, reduces the risk of infections, allergies, and chronic diseases in infants, and supports postpartum recovery and maternal health for mothers.",
    "How does the body regulate temperature during fever?":
    "During fever, the body increases its core temperature in response to infection or inflammation, activating the immune system, releasing cytokines and prostaglandins, resetting the body's thermostat in the hypothalamus, and promoting heat production, shivering, and vasoconstriction to raise body temperature and combat pathogens.",
    "What are the symptoms of an allergic reaction to food?":
    "Symptoms of a food allergy may include hives, itching, swelling (of the lips, tongue, throat, or face), abdominal pain, diarrhea, nausea, vomiting, difficulty breathing, wheezing, coughing, nasal congestion, dizziness, lightheadedness, or anaphylaxis (a severe, life-threatening allergic reaction).",
    "How does physical therapy benefit patients recovering from injuries or surgeries?":
    "Physical therapy helps patients recover from injuries or surgeries by restoring mobility, strength, flexibility, and range of motion, reducing pain and inflammation, improving balance, coordination, and posture, preventing re-injury, and promoting functional independence and quality of life.",
    "What are the risk factors for developing osteoporosis?":
    "Risk factors for osteoporosis include age (especially postmenopausal women), gender (more common in females), family history of osteoporosis, low body weight, sedentary lifestyle, smoking, excessive alcohol consumption, poor nutrition (low calcium or vitamin D intake), and certain medications (such as corticosteroids or anticonvulsants).",
    "How does stress affect gastrointestinal health?":
    "Stress can affect gastrointestinal health by altering gut motility, increasing stomach acid production, exacerbating symptoms of acid reflux or irritable bowel syndrome (IBS), disrupting the gut microbiota, impairing digestion and nutrient absorption, and contributing to gastrointestinal disorders or functional gastrointestinal disorders.",
    "What are the benefits of early detection and treatment of cancer?":
    "Early detection and treatment of cancer increase the chances of successful outcomes, improve treatment options and prognosis, reduce the risk of cancer progression or metastasis, minimize the need for aggressive interventions, and enhance quality of life and survival rates for cancer patients.",
    "How does the body metabolize medications?":
    "Medications are metabolized in the liver through enzymatic processes such as oxidation, reduction, hydrolysis, and conjugation, converting drugs into metabolites that are more easily excreted by the kidneys or eliminated from the body, affecting drug efficacy, bioavailability, and toxicity.",
    "What are the benefits of regular stretching exercises?":
    "Regular stretching exercises improve flexibility, joint range of motion, and muscle elasticity, reduce muscle tension and stiffness, alleviate muscle soreness and discomfort, improve posture and alignment, enhance athletic performance, and prevent injuries during physical activities.",
    "How does nutrition impact skin health?":
    "Nutrition plays a key role in skin health by providing essential nutrients (such as vitamins, minerals, antioxidants, and fatty acids) that support collagen production, skin regeneration, and barrier function, promoting hydration, elasticity, and resilience, and preventing premature aging, dryness, or skin disorders.",
    "What are the benefits of mindfulness-based stress reduction techniques?":
    "Mindfulness-based stress reduction techniques help individuals manage stress, anxiety, and depression, cultivate awareness, attention, and emotional regulation, promote relaxation and mindfulness practices (such as meditation, deep breathing, and body scanning), enhance resilience, and improve overall well-being and mental health.",
    "How does chronic pain affect quality of life?":
    "Chronic pain can significantly impact quality of life by causing physical discomfort, fatigue, sleep disturbances, reduced mobility and functional limitations, emotional distress (such as anxiety, depression, or irritability), social isolation, impaired work productivity, and decreased overall satisfaction and enjoyment of life.",
    "What are the benefits of regular cardiovascular exercise?":
    "Regular cardiovascular exercise strengthens the heart muscle, improves circulation and blood flow, lowers blood pressure and cholesterol levels, enhances aerobic capacity and endurance, promotes weight management, reduces the risk of cardiovascular disease, stroke, and diabetes, and supports overall cardiovascular health and longevity.",
    "How does the body respond to chronic stress?":
    "Chronic stress triggers the body's stress response, leading to sustained release of stress hormones (such as cortisol and adrenaline), dysregulation of the hypothalamic-pituitary-adrenal (HPA) axis, immune suppression, inflammation, oxidative stress, and disruptions in sleep, appetite, mood, and cognitive function, contributing to physical and mental health problems.",
    "What are the risk factors for developing rheumatoid arthritis?":
    "Risk factors for rheumatoid arthritis include genetic predisposition, family history of the disease, environmental factors (such as smoking or exposure to certain viruses or bacteria), hormonal changes, obesity, and systemic inflammation, triggering autoimmune reactions and joint inflammation.",
    "How does the body regulate blood clotting?":
    "Blood clotting (or coagulation) is regulated by a complex cascade of biochemical reactions involving platelets, clotting factors, and blood vessel walls, forming fibrin clots to stop bleeding, maintain hemostasis, and repair damaged blood vessels while preventing excessive clot formation (thrombosis) or bleeding disorders.",
    "What are the symptoms and risk factors associated with cardiovascular disease?":
    "Symptoms of cardiovascular disease may include chest pain, shortness of breath, palpitations, fatigue, and dizziness. Risk factors include high blood pressure, high cholesterol, smoking, diabetes, obesity, sedentary lifestyle, and family history of heart disease.",
    "How does the immune system respond to infections?":
    "The immune system responds to infections by recognizing pathogens, producing antibodies, activating immune cells (such as T cells and B cells), and mounting an inflammatory response to neutralize and eliminate the invading microorganisms.",
    "What are the benefits of vaccination?":
    "Vaccination helps prevent infectious diseases by stimulating the immune system to produce antibodies against specific pathogens, reducing the risk of illness, complications, and transmission of infectious agents within communities.",
    "How does exercise benefit mental health?":
    "Exercise promotes mental health by releasing endorphins and neurotransmitters (such as dopamine and serotonin), reducing stress hormones, improving mood, cognitive function, and sleep quality, and enhancing self-esteem and overall well-being.",
    "What role do vitamins and minerals play in maintaining health?":
    "Vitamins and minerals are essential nutrients that support various physiological functions, including metabolism, immune function, bone health, tissue repair, antioxidant defense, and neurotransmitter synthesis.",
    "What are the common signs and symptoms of depression?":
    "Common signs and symptoms of depression include persistent sadness, loss of interest or pleasure in activities, changes in appetite or weight, sleep disturbances, fatigue, feelings of worthlessness or guilt, difficulty concentrating, and thoughts of death or suicide.",
    "How does stress impact the gastrointestinal system?":
    "Stress can disrupt gastrointestinal function by altering gut motility, increasing gut permeability, exacerbating symptoms of irritable bowel syndrome (IBS) or inflammatory bowel disease (IBD), and contributing to gastrointestinal disorders such as ulcers or acid reflux.",
    "What are the benefits of maintaining a healthy diet?":
    "Maintaining a healthy diet provides essential nutrients, supports energy metabolism, regulates blood sugar levels, promotes cardiovascular health, reduces the risk of chronic diseases (such as diabetes, obesity, and hypertension), and supports overall well-being and longevity.",
    "How does the body regulate blood pressure?":
    "Blood pressure is regulated by the cardiovascular and nervous systems, adjusting the contraction and relaxation of blood vessels, cardiac output, and fluid balance to maintain optimal blood flow and perfusion to organs and tissues.",
    "What are the risk factors for developing osteoarthritis?":
    "Risk factors for osteoarthritis include aging, obesity, joint injury or trauma, repetitive stress on joints, genetics, and underlying conditions such as rheumatoid arthritis or joint deformities.",
    "How does the body respond to acute pain?":
    "The body responds to acute pain by releasing neurotransmitters and activating pain receptors (nociceptors), triggering an immediate protective response, such as withdrawal reflexes, increased heart rate, and stress hormone release, to signal tissue damage or injury.",
    "What are the benefits of adequate hydration?":
    "Adequate hydration supports cellular function, regulates body temperature, facilitates nutrient absorption and waste removal, lubricates joints, supports cardiovascular function, enhances cognitive performance, and promotes overall health and well-being.",
    "How does smoking tobacco affect respiratory health?":
    "Smoking tobacco damages the respiratory system by causing inflammation, narrowing airways, reducing lung function, impairing ciliary function (which clears mucus and debris), increasing mucus production, and contributing to respiratory infections, chronic bronchitis, emphysema, and lung cancer.",
    "What is the importance of regular health screenings?":
    "Regular health screenings help detect early signs of diseases or conditions, facilitate early intervention and treatment, monitor health status and risk factors, prevent complications, and promote overall health maintenance and disease prevention.",
    "How does the body regulate fluid and electrolyte balance?":
    "Fluid and electrolyte balance is regulated by the kidneys, hormones (such as aldosterone and antidiuretic hormone), and electrolyte transport mechanisms, maintaining proper hydration, osmolarity, and pH balance within the body's cells and extracellular fluid compartments.",
    "What are the benefits of practicing good sleep hygiene?":
    "Practicing good sleep hygiene promotes restful sleep by establishing a regular sleep schedule, creating a conducive sleep environment, avoiding stimulants before bedtime, engaging in relaxation techniques, and prioritizing sleep as an essential component of overall health and well-being.",
    "How does the body respond to dehydration?":
    "Dehydration triggers physiological responses such as increased thirst, reduced urine output, dry mouth, fatigue, dizziness, headaches, dark urine, and electrolyte imbalances, compromising cellular function, kidney function, and overall health.",
    "What are the benefits of regular physical activity for children and adolescents?":
    "Regular physical activity promotes healthy growth and development, strengthens muscles and bones, improves cardiovascular fitness, enhances motor skills and coordination, reduces the risk of obesity, diabetes, and hypertension, and supports overall physical and mental well-being.",
    "How does chronic inflammation contribute to the development of chronic diseases?":
    "Chronic inflammation contributes to the development of chronic diseases by damaging tissues, promoting oxidative stress, impairing immune function, disrupting cellular signaling pathways, and contributing to the pathogenesis of conditions such as cardiovascular disease, diabetes, cancer, and autoimmune disorders.",
    "What are the benefits of stress management techniques?":
    "Stress management techniques help reduce the physiological and psychological effects of stress by promoting relaxation, reducing muscle tension, improving coping skills, enhancing resilience, and preventing stress-related health problems such as anxiety, depression, and cardiovascular disease.",
    "What are the risk factors for developing type 2 diabetes?":
    "Risk factors for type 2 diabetes include obesity, sedentary lifestyle, family history of diabetes, age, high blood pressure, high cholesterol levels, and certain ethnic backgrounds.",
    "How does the body regulate blood glucose levels?":
    "Blood glucose levels are regulated by insulin and glucagon, hormones produced by the pancreas. Insulin lowers blood sugar levels by facilitating glucose uptake by cells, while glucagon raises blood sugar levels by promoting glucose release from the liver.",
    "What are the potential complications of untreated hypertension?":
    "Untreated hypertension can lead to complications such as heart disease, stroke, kidney damage, vision loss, peripheral artery disease, and cognitive decline.",
    "How does the body respond to acute inflammation?":
    "The body responds to acute inflammation by increasing blood flow to the affected area, releasing white blood cells to fight off pathogens, and triggering the production of inflammatory mediators to remove damaged cells and initiate tissue repair.",
    "What role do antioxidants play in maintaining health?":
    "Antioxidants help neutralize free radicals, which are unstable molecules that can damage cells and contribute to aging and disease. Antioxidants protect cells from oxidative stress and reduce the risk of chronic diseases.",
    "How does the body metabolize carbohydrates, fats, and proteins?":
    "Carbohydrates are broken down into glucose, fats into fatty acids, and proteins into amino acids during digestion. These nutrients are then metabolized by cells for energy production, storage, and tissue repair.",
    "What are the signs and symptoms of a stroke?":
    "Signs and symptoms of a stroke include sudden weakness or numbness of the face, arm, or leg, confusion, trouble speaking or understanding speech, trouble seeing in one or both eyes, dizziness, and severe headache.",
    "How does chronic stress affect the immune system?":
    "Chronic stress can weaken the immune system by increasing levels of stress hormones such as cortisol, which suppress immune function and make individuals more susceptible to infections and illness.",
    "What are the benefits of maintaining a healthy body weight?":
    "Maintaining a healthy body weight reduces the risk of obesity-related conditions such as type 2 diabetes, heart disease, stroke, hypertension, certain cancers, and musculoskeletal disorders.",
    "How does the body regulate hunger and satiety?":
    "Hunger and satiety are regulated by hormones such as ghrelin, which stimulates appetite, and leptin, which signals fullness and suppresses appetite. These hormones interact with the brain to regulate food intake and energy balance.",
    "What are the effects of chronic sleep deprivation?":
    "Chronic sleep deprivation can lead to cognitive impairment, mood disturbances, increased risk of accidents and injuries, weakened immune function, weight gain, diabetes, hypertension, and heart disease.",
    "How does the body adapt to regular exercise?":
    "The body adapts to regular exercise by increasing cardiovascular fitness, building muscle strength and endurance, improving flexibility and coordination, and enhancing overall physical performance and health.",
    "What are the benefits of maintaining good oral hygiene?":
    "Maintaining good oral hygiene reduces the risk of dental caries, gum disease, and tooth loss, improves oral health and breath freshness, and may lower the risk of systemic conditions such as heart disease and diabetes.",
    "How does the body respond to chronic pain?":
    "The body responds to chronic pain by sensitizing pain receptors, altering pain perception, causing changes in mood and behavior, disrupting sleep patterns, and impairing overall quality of life.",
    "What are the long-term effects of untreated mental health disorders?":
    "Untreated mental health disorders can lead to chronic psychological distress, impaired social functioning, decreased productivity, increased risk of substance abuse, and higher mortality rates.",
    "What are the benefits of regular meditation or mindfulness practice?":
    "Regular meditation or mindfulness practice can reduce stress, promote relaxation, improve emotional well-being, enhance concentration and cognitive function, and cultivate a greater sense of self-awareness and compassion.",
    "How does the body regulate blood coagulation and prevent excessive bleeding?":
    "Blood coagulation is regulated by a complex system of clotting factors and platelets that form clots to stop bleeding. The body also produces anticoagulants to prevent excessive clot formation and maintain blood flow.",
    "What are the risk factors for developing skin cancer?":
    "Risk factors for skin cancer include excessive sun exposure, history of sunburns, fair skin, family history of skin cancer, presence of moles or unusual skin lesions, and exposure to ultraviolet radiation from tanning beds or lamps.",
    "What is Coronary Artery Disease (CAD)?":
    "CAD is a condition where plaque builds up inside the coronary arteries, restricting blood flow to the heart muscle.",

    "What are the risk factors for developing CAD?":
    "Risk factors include high blood pressure, high cholesterol, smoking, diabetes, obesity, lack of physical activity, and a family history of heart disease.",

    "How does CAD typically manifest?":
    "CAD often presents as chest pain (angina), shortness of breath, fatigue, and in severe cases, heart attack.",

    "How is CAD diagnosed?":
    "Diagnosis typically involves a combination of medical history assessment, physical examination, imaging tests (like angiography), and blood tests for cardiac enzymes.",

    "What are the treatment options for CAD?":
    "Treatment may include lifestyle changes, medications (like statins and blood thinners), angioplasty, stent placement, or coronary artery bypass surgery.",

    "What is a stroke?":
    "A stroke occurs when the blood supply to part of the brain is interrupted or reduced, leading to brain tissue damage and loss of brain function.",

    "What are the main types of stroke?":
    "Ischemic stroke, caused by a blocked artery, and hemorrhagic stroke, caused by bleeding in the brain, are the two main types.",

    "What are the risk factors for stroke?":
    "Risk factors include high blood pressure, high cholesterol, smoking, diabetes, obesity, atrial fibrillation, and a family history of stroke.",

    "How is a stroke diagnosed?":
    "Diagnosis involves a physical examination, imaging tests such as CT scans or MRIs, and blood tests.",

    "What are the treatment options for stroke?":
    "Treatment may involve medications like clot-busters (thrombolytics), blood thinners, surgery to repair bleeding in the brain, and rehabilitation therapy.",

    "What is Chronic Obstructive Pulmonary Disease (COPD)?":
    "COPD is a chronic inflammatory lung disease that causes obstructed airflow from the lungs, typically due to long-term exposure to irritating gases or particulate matter, most often from cigarette smoke.",

    "What are the main risk factors for COPD?":
    "Smoking is the primary risk factor for COPD, although long-term exposure to lung irritants such as air pollution, chemical fumes, or dust may also contribute.",

    "What are the symptoms of COPD?":
    "Symptoms include chronic cough, shortness of breath (dyspnea), wheezing, chest tightness, frequent respiratory infections, and fatigue.",

    "How is COPD diagnosed?":
    "Diagnosis typically involves lung function tests, such as spirometry, chest X-rays, CT scans, and blood tests.",

    "What are the treatment options for COPD?":
    "Treatment includes smoking cessation, bronchodilators, inhaled corticosteroids, pulmonary rehabilitation programs, oxygen therapy, and in severe cases, surgery or lung transplantation.",

    "What are Lower Respiratory Infections?":
    "Lower respiratory infections are infections that affect the airways and lungs, including pneumonia, bronchitis, and bronchiolitis.",

    "What are the common causes of Lower Respiratory Infections?":
    "Lower respiratory infections are commonly caused by viruses (such as influenza and respiratory syncytial virus) or bacteria (such as Streptococcus pneumoniae and Haemophilus influenzae).",

    "What are the symptoms of Lower Respiratory Infections?":
    "Symptoms may include cough, shortness of breath, chest pain, fever, fatigue, and in severe cases, coughing up blood or cyanosis (bluish discoloration of the skin).",

    "How are Lower Respiratory Infections diagnosed and treated?":
    "Diagnosis involves physical examination, chest X-rays, sputum cultures, and blood tests. Treatment varies depending on the cause and severity of the infection and may include antibiotics, antiviral medications, supportive care, and in some cases, hospitalization.",
    "What is lung cancer?":
    "Lung cancer is a type of cancer that starts in the lungs. It is characterized by uncontrolled cell growth in lung tissues.",

    "What are the main risk factors for developing lung cancer?":
    "Smoking tobacco, exposure to secondhand smoke, exposure to radon gas, exposure to asbestos and other carcinogens, and family history of lung cancer are some of the main risk factors.",

    "What are the common symptoms of lung cancer?":
    "Persistent cough, chest pain, shortness of breath, coughing up blood, hoarseness, weight loss, and fatigue are common symptoms of lung cancer.",

    "How is lung cancer diagnosed?":
    "Diagnosis typically involves imaging tests such as chest X-rays and CT scans, as well as biopsy to examine lung tissue for cancerous cells.",

    "What are the treatment options for lung cancer?":
    "Treatment may include surgery, chemotherapy, radiation therapy, targeted therapy, and immunotherapy, depending on the type and stage of lung cancer.",

    "What is diabetes mellitus?":
    "Diabetes mellitus is a chronic metabolic disorder characterized by high blood sugar levels over a prolonged period due to the body's inability to produce enough insulin or effectively use the insulin it produces.",

    "What are the different types of diabetes mellitus?":
    "The main types include type 1 diabetes, type 2 diabetes, and gestational diabetes.",

    "What are the risk factors for developing diabetes mellitus?":
    "Risk factors include obesity, physical inactivity, family history of diabetes, ethnicity, age, and poor diet.",

    "What are the common symptoms of diabetes mellitus?":
    "Increased thirst, frequent urination, unexplained weight loss, fatigue, blurred vision, and slow wound healing are common symptoms of diabetes mellitus.",

    "How is diabetes mellitus diagnosed?":
    "Diagnosis involves blood tests such as fasting blood sugar test, oral glucose tolerance test, and A1C test to measure average blood sugar levels over the past few months.",

    "What are the complications associated with diabetes mellitus?":
    "Complications may include cardiovascular disease, neuropathy, nephropathy, retinopathy, and foot problems.",

    "What is Alzheimer's disease?":
    "Alzheimer's disease is a progressive neurological disorder that causes problems with memory, thinking, and behavior. It is the most common cause of dementia.",

    "What are the risk factors for developing Alzheimer's disease?":
    "Age, family history, genetics, head trauma, and certain lifestyle factors are associated with increased risk of Alzheimer's disease.",

    "What are the common symptoms of Alzheimer's disease?":
    "Memory loss, confusion, difficulty with language and communication, changes in mood and behavior, and difficulty performing familiar tasks are common symptoms.",

    "How is Alzheimer's disease diagnosed?":
    "Diagnosis involves a thorough medical history, physical examination, cognitive tests, and possibly brain imaging to rule out other causes of dementia.",

    "What are the treatment options for Alzheimer's disease?":
    "Treatment may include medications to manage symptoms and slow disease progression, as well as lifestyle interventions and support services for patients and caregivers.",

    "What are other types of dementia?":
    "Other types of dementia include vascular dementia, Lewy body dementia, frontotemporal dementia, and mixed dementia.",

    "What are diarrheal diseases?":
    "Diarrheal diseases are illnesses characterized by frequent, loose, or watery stools. They are usually caused by viral, bacterial, or parasitic infections.",

    "What are the common causes of diarrheal diseases?":
    "Common causes include viral infections (such as norovirus and rotavirus), bacterial infections (such as Salmonella and E. coli), and parasitic infections (such as Giardia and Cryptosporidium).",

    "How are diarrheal diseases treated?":
    "Treatment typically involves fluid replacement to prevent dehydration, dietary modifications, and sometimes medications to relieve symptoms or treat the underlying cause. Severe cases may require hospitalization and intravenous fluids.",
    "What is Tuberculosis (TB)?":
    "Tuberculosis is an infectious disease caused by the bacterium Mycobacterium tuberculosis. It primarily affects the lungs but can also affect other parts of the body.",

    "How is Tuberculosis transmitted?":
    "Tuberculosis is transmitted through the air when an infected person coughs, sneezes, or talks. It is highly contagious and can spread easily in crowded or poorly ventilated areas.",

    "What are the common symptoms of Tuberculosis?":
    "Common symptoms include persistent coughing, chest pain, coughing up blood, fatigue, fever, night sweats, and weight loss.",

    "How is Tuberculosis diagnosed?":
    "Tuberculosis can be diagnosed through a variety of tests including skin tests, blood tests, sputum tests, and chest X-rays.",

    "What is the treatment for Tuberculosis?":
    "Tuberculosis is treated with a combination of antibiotics over a period of several months. It's crucial for patients to complete the full course of treatment to prevent the development of drug-resistant strains of the bacteria.",

    "What is HIV/AIDS?":
    "HIV (Human Immunodeficiency Virus) is a virus that attacks the body's immune system, specifically targeting CD4 cells, which are crucial for fighting off infections. AIDS (Acquired Immunodeficiency Syndrome) is the late stage of HIV infection, characterized by a weakened immune system and increased susceptibility to opportunistic infections.",

    "How is HIV transmitted?":
    "HIV is transmitted through the exchange of certain body fluids, including blood, semen, vaginal fluids, and breast milk. The most common modes of transmission are through unprotected sexual intercourse, sharing needles, and from mother to child during childbirth or breastfeeding.",

    "What are the symptoms of HIV/AIDS?":
    "In the early stages of HIV infection, individuals may experience flu-like symptoms such as fever, fatigue, and swollen lymph nodes. As the disease progresses to AIDS, patients become more susceptible to opportunistic infections and may experience weight loss, chronic diarrhea, night sweats, and other severe symptoms.",

    "How is HIV/AIDS diagnosed?":
    "HIV is diagnosed through blood tests that detect antibodies to the virus or the virus itself. There are rapid tests available that can provide results in minutes.",

    "Is there a cure for HIV/AIDS?":
    "Currently, there is no cure for HIV/AIDS, but antiretroviral therapy (ART) can effectively control the virus, allowing people with HIV to live long and healthy lives.",

    "What is Hypertension?":
    "Hypertension, or high blood pressure, is a medical condition where the force of blood against the walls of the arteries is consistently too high. It is a significant risk factor for heart disease, stroke, and other complications.",

    "What are the causes of Hypertension?":
    "Hypertension can be caused by various factors including genetics, unhealthy lifestyle habits such as poor diet, lack of exercise, obesity, smoking, excessive alcohol consumption, and certain underlying health conditions.",

    "What are the symptoms of Hypertension?":
    "Hypertension is often called the 'silent killer' because it typically does not cause noticeable symptoms until it reaches a severe stage. Some people may experience headaches, shortness of breath, or nosebleeds, but these symptoms are not specific to hypertension.",

    "How is Hypertension diagnosed?":
    "Hypertension is diagnosed by measuring blood pressure using a sphygmomanometer. Blood pressure readings consist of two numbers: systolic pressure (the pressure when the heart beats) and diastolic pressure (the pressure when the heart is at rest).",

    "What are the complications of Hypertension?":
    "If left untreated, hypertension can lead to serious health complications including heart disease, stroke, kidney damage, vision loss, and cognitive decline.",

    "What is Liver Cancer?":
    "Liver cancer is a type of cancer that begins in the cells of the liver. It can either originate in the liver (primary liver cancer) or spread to the liver from other parts of the body (metastatic liver cancer).",

    "What are the risk factors for Liver Cancer?":
    "Risk factors for liver cancer include chronic infection with hepatitis B or C viruses, heavy alcohol consumption, obesity, diabetes, exposure to aflatoxins (toxins produced by certain molds), and certain inherited liver diseases.",

    "What are the symptoms of Liver Cancer?":
    "Symptoms of liver cancer may include abdominal pain or tenderness, swelling in the abdomen, unexplained weight loss, loss of appetite, nausea, vomiting, fatigue, and yellowing of the skin and eyes (jaundice).",

    "How is Liver Cancer diagnosed?":
    "Liver cancer may be diagnosed through imaging tests such as ultrasound, CT scan, or MRI, as well as through blood tests to assess liver function and tumor markers. A biopsy may also be performed to confirm the diagnosis.",

    "What are the treatment options for Liver Cancer?":
    "Treatment options for liver cancer depend on the stage of the cancer and may include surgery, chemotherapy, radiation therapy, targeted therapy, immunotherapy, and liver transplantation. Treatment plans are personalized based on individual factors such as overall health and the extent of the disease.",
    "What is Stomach Cancer?":
    "Stomach cancer, also known as gastric cancer, is a disease in which malignant cells form in the lining of the stomach. It is one of the most common types of cancer worldwide.",

    "What are the risk factors for Stomach Cancer?":
    "Risk factors for stomach cancer include infection with Helicobacter pylori bacteria, a diet high in salty and smoked foods, family history of stomach cancer, smoking, obesity, and certain genetic conditions.",

    "What are the symptoms of Stomach Cancer?":
    "Symptoms of stomach cancer may include abdominal pain or discomfort, nausea, vomiting, bloating, feeling full after eating small amounts of food, unintentional weight loss, difficulty swallowing, and blood in the stool.",

    "How is Stomach Cancer diagnosed?":
    "Stomach cancer may be diagnosed through imaging tests such as endoscopy, biopsy, CT scan, MRI, and PET scan. Blood tests may also be conducted to assess overall health and the presence of tumor markers.",

    "What are the treatment options for Stomach Cancer?":
    "Treatment options for stomach cancer depend on the stage of the cancer and may include surgery to remove the tumor, chemotherapy, radiation therapy, targeted therapy, and immunotherapy. Treatment plans are individualized based on factors such as the patient's overall health and the extent of the disease.",

    "What are Road Traffic Injuries?":
    "Road traffic injuries refer to injuries or fatalities resulting from accidents involving motor vehicles, pedestrians, cyclists, and other road users. They are a significant public health concern worldwide.",

    "What are the leading causes of Road Traffic Injuries?":
    "Leading causes of road traffic injuries include speeding, drunk driving, distracted driving (e.g., texting while driving), failure to use seat belts or helmets, inadequate road infrastructure, and poor enforcement of traffic laws.",

    "How can Road Traffic Injuries be prevented?":
    "Road traffic injuries can be prevented through various measures including enforcing speed limits, implementing strict laws against drunk driving, promoting the use of seat belts and helmets, improving road infrastructure, enhancing public transportation systems, and raising awareness about road safety.",

    "What are the consequences of Road Traffic Injuries?":
    "Consequences of road traffic injuries can range from minor cuts and bruises to severe injuries such as fractures, traumatic brain injuries, spinal cord injuries, and fatalities. They can result in long-term disabilities, emotional trauma, and economic burden on individuals and societies.",

    "What is Chronic Kidney Disease (CKD)?":
    "Chronic Kidney Disease (CKD) is a progressive condition characterized by the gradual loss of kidney function over time. It can lead to kidney failure if left untreated, requiring dialysis or kidney transplantation for survival.",

    "What are the risk factors for Chronic Kidney Disease?":
    "Risk factors for CKD include diabetes, high blood pressure, family history of kidney disease, aging, obesity, smoking, cardiovascular disease, and certain ethnicities (e.g., African American, Hispanic, Native American).",

    "What are the symptoms of Chronic Kidney Disease?":
    "In the early stages, CKD may not cause noticeable symptoms. As the disease progresses, symptoms may include fatigue, swelling in the ankles, feet, or hands, shortness of breath, nausea, vomiting, loss of appetite, difficulty concentrating, and changes in urination patterns.",

    "How is Chronic Kidney Disease diagnosed?":
    "CKD is diagnosed through blood tests to measure kidney function (e.g., serum creatinine, glomerular filtration rate) and urine tests to assess for the presence of protein or blood in the urine. Imaging tests such as ultrasound may also be performed.",

    "What are the treatment options for Chronic Kidney Disease?":
    "Treatment options for CKD focus on slowing the progression of the disease and managing complications. This may include lifestyle changes (e.g., dietary modifications, exercise), medications to control blood pressure and blood sugar levels, and, in advanced stages, dialysis or kidney transplantation.",

    "What is Cirrhosis of the Liver?":
    "Cirrhosis of the liver is a late stage of scarring (fibrosis) of the liver caused by many forms of liver diseases and conditions, such as hepatitis and chronic alcoholism.",

    "What are the causes of Cirrhosis of the Liver?":
    "Cirrhosis of the liver can be caused by chronic alcohol abuse, chronic viral hepatitis (hepatitis B, C, and D), fatty liver disease, autoimmune hepatitis, and certain genetic disorders affecting the liver.",

    "What are the symptoms of Cirrhosis of the Liver?":
    "Symptoms of cirrhosis may include fatigue, weakness, easy bruising, jaundice (yellowing of the skin and eyes), itching, swelling in the abdomen (ascites) and legs (edema), loss of appetite, nausea, vomiting, and weight loss.",

    "How is Cirrhosis of the Liver diagnosed?":
    "Cirrhosis of the liver may be diagnosed through blood tests to assess liver function, imaging tests such as ultrasound, CT scan, or MRI, and liver biopsy to examine a sample of liver tissue for signs of damage and scarring.",

    "What are the complications of Cirrhosis of the Liver?":
    "Complications of cirrhosis include portal hypertension, which can lead to varices (enlarged veins in the esophagus or stomach) and bleeding, ascites, hepatic encephalopathy (confusion and impaired brain function), liver cancer, and liver failure.",

    "What are the treatment options for Cirrhosis of the Liver?":
    "Treatment for cirrhosis focuses on managing symptoms, preventing complications, and treating the underlying cause of the disease. This may include lifestyle changes (e.g., abstinence from alcohol, dietary modifications), medications to manage symptoms and complications, and in some cases, liver transplantation.",
    "What are Neonatal Disorders?":
    "Neonatal disorders are health conditions that affect newborn babies, typically within the first 28 days of life. These disorders can range from congenital abnormalities to infections acquired during the perinatal period.",

    "What are some examples of Neonatal Disorders?":
    "Examples of neonatal disorders include respiratory distress syndrome, jaundice, birth injuries, prematurity complications, neonatal infections (such as sepsis and pneumonia), congenital heart defects, and neurological disorders like hypoxic-ischemic encephalopathy.",

    "How are Neonatal Disorders diagnosed?":
    "Neonatal disorders are diagnosed through physical examination, laboratory tests (including blood tests, imaging studies, and genetic testing), and monitoring of vital signs and developmental milestones in newborns.",

    "What are the risk factors for Neonatal Disorders?":
    "Risk factors for neonatal disorders include prematurity, low birth weight, maternal infections during pregnancy, maternal substance abuse, maternal age, genetic factors, and complications during labor and delivery.",

    "What are the treatment options for Neonatal Disorders?":
    "Treatment for neonatal disorders varies depending on the specific condition and its severity. It may include supportive care, medications, surgery, respiratory support (such as mechanical ventilation), phototherapy for jaundice, and interventions to manage complications.",

    "What is Ischemic Heart Disease?":
    "Ischemic heart disease, also known as coronary artery disease, is a condition characterized by reduced blood flow to the heart muscle due to the narrowing or blockage of coronary arteries by atherosclerosis (plaque buildup).",

    "What are the risk factors for Ischemic Heart Disease?":
    "Risk factors for ischemic heart disease include high blood pressure, high cholesterol levels, smoking, diabetes, obesity, physical inactivity, unhealthy diet, family history of heart disease, and age.",

    "What are the symptoms of Ischemic Heart Disease?":
    "Symptoms of ischemic heart disease may include chest pain or discomfort (angina), shortness of breath, fatigue, weakness, nausea, indigestion, and pain or discomfort in the arms, back, neck, jaw, or stomach.",

    "How is Ischemic Heart Disease diagnosed?":
    "Ischemic heart disease is diagnosed through a combination of medical history assessment, physical examination, electrocardiogram (ECG/EKG), stress tests, echocardiogram, coronary angiography, and blood tests to assess cardiac enzymes and biomarkers.",

    "What are the treatment options for Ischemic Heart Disease?":
    "Treatment for ischemic heart disease aims to relieve symptoms, prevent complications, and reduce the risk of heart attacks and other cardiovascular events. It may include lifestyle modifications (such as diet, exercise, and smoking cessation), medications (such as aspirin, statins, beta-blockers, and ACE inhibitors), revascularization procedures (such as angioplasty and bypass surgery), and cardiac rehabilitation.",

    "What is Colon and Rectal Cancer?":
    "Colon and rectal cancer, also known as colorectal cancer, is a type of cancer that originates in the colon or rectum, which are parts of the digestive system.",

    "What are the risk factors for Colon and Rectal Cancer?":
    "Risk factors for colon and rectal cancer include age (risk increases with age), family history of colorectal cancer or polyps, personal history of inflammatory bowel disease (such as Crohn's disease or ulcerative colitis), inherited genetic syndromes (such as Lynch syndrome and familial adenomatous polyposis), unhealthy diet (high in red meat and processed foods, low in fiber), obesity, smoking, excessive alcohol consumption, and sedentary lifestyle.",

    "What are the symptoms of Colon and Rectal Cancer?":
    "Symptoms of colon and rectal cancer may include changes in bowel habits (such as diarrhea or constipation), blood in the stool, abdominal discomfort or pain, unexplained weight loss, fatigue, weakness, and feeling of incomplete bowel emptying.",

    "How is Colon and Rectal Cancer diagnosed?":
    "Colon and rectal cancer are diagnosed through various tests including colonoscopy, sigmoidoscopy, fecal occult blood test, imaging tests (such as CT scan and MRI), and biopsy to examine tissue samples for the presence of cancer cells.",

    "What are the treatment options for Colon and Rectal Cancer?":
    "Treatment for colon and rectal cancer depends on the stage of the cancer and may include surgery to remove the tumor, chemotherapy, radiation therapy, targeted therapy, and immunotherapy. Treatment plans are individualized based on factors such as the location and extent of the tumor, as well as the patient's overall health and preferences.",

    "What is Chronic Liver Disease and Cirrhosis?":
    "Chronic liver disease refers to a progressive deterioration of liver function over time, leading to cirrhosis, a late-stage scarring of the liver tissue. Chronic liver disease and cirrhosis can result from various causes, including chronic alcohol abuse, viral hepatitis (such as hepatitis B and C), non-alcoholic fatty liver disease, autoimmune hepatitis, and certain genetic disorders.",

    "What are the risk factors for Chronic Liver Disease and Cirrhosis?":
    "Risk factors for chronic liver disease and cirrhosis include chronic alcohol abuse, viral hepatitis infections, obesity, diabetes, exposure to toxins or environmental pollutants, certain medications, and genetic predisposition.",

    "What are the symptoms of Chronic Liver Disease and Cirrhosis?":
    "Symptoms of chronic liver disease and cirrhosis may include fatigue, weakness, jaundice (yellowing of the skin and eyes), abdominal swelling (ascites), leg swelling (edema), easy bruising or bleeding, itching, nausea, loss of appetite, weight loss, and confusion (hepatic encephalopathy).",

    "How are Chronic Liver Disease and Cirrhosis diagnosed?":
    "Chronic liver disease and cirrhosis are diagnosed through a combination of medical history assessment, physical examination, blood tests (including liver function tests and viral hepatitis markers), imaging studies (such as ultrasound, CT scan, and MRI), liver biopsy, and transient elastography (FibroScan) to assess liver stiffness.",

    "What are the treatment options for Chronic Liver Disease and Cirrhosis?":
    "Treatment for chronic liver disease and cirrhosis focuses on managing symptoms, slowing disease progression, preventing complications, and addressing the underlying cause of liver damage. Treatment may include lifestyle modifications (such as abstinence from alcohol, weight loss, and dietary changes), medications to manage symptoms and complications (such as diuretics and beta-blockers), treatment of underlying liver diseases (such as antiviral therapy for hepatitis B and C), liver transplantation, and supportive care.",
    "What is Breast Cancer?":
    "Breast cancer is a type of cancer that forms in the cells of the breasts. It can occur in both men and women, although it is much more common in women. Breast cancer usually begins in the ducts or lobules of the breast and can spread to other parts of the body if not treated early.",

    "What are the risk factors for Breast Cancer?":
    "Risk factors for breast cancer include being female, increasing age, family history of breast cancer, inherited gene mutations (such as BRCA1 and BRCA2), personal history of breast cancer or certain non-cancerous breast conditions, dense breast tissue, early menstruation or late menopause, hormone replacement therapy, obesity, alcohol consumption, and radiation exposure.",

    "What are the symptoms of Breast Cancer?":
    "Symptoms of breast cancer may include a lump or thickening in the breast or underarm area, changes in breast size or shape, dimpling or puckering of the skin, nipple discharge (other than breast milk), nipple inversion or changes in nipple appearance, and redness or scaling of the breast skin.",

    "How is Breast Cancer diagnosed?":
    "Breast cancer is diagnosed through a combination of imaging tests (such as mammography, ultrasound, and MRI) and biopsy to examine tissue samples from the breast for the presence of cancer cells.",

    "What are the treatment options for Breast Cancer?":
    "Treatment for breast cancer depends on the stage of the cancer, as well as other factors such as the type of breast cancer, hormone receptor status, and overall health. Treatment options may include surgery (such as lumpectomy or mastectomy), radiation therapy, chemotherapy, hormone therapy, targeted therapy, and immunotherapy.",

    "What is Prostate Cancer?":
    "Prostate cancer is a type of cancer that develops in the prostate gland, which is a small gland located below the bladder and in front of the rectum in men. Prostate cancer is one of the most common types of cancer in men.",

    "What are the risk factors for Prostate Cancer?":
    "Risk factors for prostate cancer include increasing age (risk rises with age), family history of prostate cancer, African American ethnicity, certain genetic mutations, and obesity.",

    "What are the symptoms of Prostate Cancer?":
    "In the early stages, prostate cancer may not cause noticeable symptoms. As the cancer progresses, symptoms may include difficulty urinating, weak or interrupted urine flow, frequent urination (especially at night), blood in the urine or semen, erectile dysfunction, pain or discomfort in the pelvic area, and bone pain.",

    "How is Prostate Cancer diagnosed?":
    "Prostate cancer is diagnosed through a combination of tests including digital rectal examination (DRE), prostate-specific antigen (PSA) blood test, imaging tests (such as ultrasound, MRI, and CT scan), and biopsy to examine tissue samples from the prostate for the presence of cancer cells.",

    "What are the treatment options for Prostate Cancer?":
    "Treatment for prostate cancer depends on the stage and aggressiveness of the cancer, as well as the patient's overall health and preferences. Treatment options may include active surveillance (close monitoring without immediate treatment), surgery (such as radical prostatectomy), radiation therapy, hormone therapy, chemotherapy, immunotherapy, and targeted therapy.",

    "What is Malaria?":
    "Malaria is a life-threatening disease caused by parasites of the Plasmodium genus. It is transmitted to humans through the bite of infected female Anopheles mosquitoes. Malaria is a significant global health problem, particularly in tropical and subtropical regions.",

    "What are the symptoms of Malaria?":
    "Symptoms of malaria include fever, chills, sweats, headache, body aches, fatigue, nausea, and vomiting. In severe cases, malaria can lead to complications such as organ failure, severe anemia, cerebral malaria (affecting the brain), and death.",

    "How is Malaria diagnosed?":
    "Malaria is diagnosed through laboratory tests, including microscopic examination of blood smears to detect the presence of malaria parasites, rapid diagnostic tests (RDTs) that detect malaria antigens, and polymerase chain reaction (PCR) tests for accurate identification of the parasite species.",

    "What are the treatment options for Malaria?":
    "Treatment for malaria depends on the species of Plasmodium causing the infection, as well as the severity of the illness and the patient's age and health status. Commonly used antimalarial drugs include artemisinin-based combination therapies (ACTs), chloroquine, quinine, mefloquine, and atovaquone-proguanil.",

    "What is Kidney Cancer?":
    "Kidney cancer, also known as renal cell carcinoma, is a type of cancer that originates in the cells of the kidneys. It most commonly affects adults and occurs more frequently in men than women.",

    "What are the risk factors for Kidney Cancer?":
    "Risk factors for kidney cancer include smoking, obesity, high blood pressure, family history of kidney cancer, certain genetic conditions (such as von Hippel-Lindau disease and hereditary papillary renal cell carcinoma), and long-term dialysis treatment.",

    "What are the symptoms of Kidney Cancer?":
    "Symptoms of kidney cancer may include blood in the urine, pain or discomfort in the side or back, a lump or mass in the side or abdomen, unexplained weight loss, fatigue, loss of appetite, and fever that persists for an extended period.",

    "How is Kidney Cancer diagnosed?":
    "Kidney cancer is diagnosed through a combination of imaging tests (such as ultrasound, CT scan, MRI, and PET scan) and biopsy to examine tissue samples from the kidney for the presence of cancer cells.",

    "What are the treatment options for Kidney Cancer?":
    "Treatment for kidney cancer depends on the stage and extent of the cancer, as well as the patient's overall health and preferences. Treatment options may include surgery to remove the tumor (partial or radical nephrectomy), targeted therapy, immunotherapy, radiation therapy, chemotherapy, and active surveillance for small, slow-growing tumors.",

    "What is the prognosis for Kidney Cancer?":
    "The prognosis for kidney cancer varies depending on factors such as the stage of the cancer at diagnosis, the type of kidney cancer, the patient's age and overall health, and the response to treatment. Early detection and treatment can improve outcomes, particularly for localized kidney cancer.",
    "What is Rheumatoid Arthritis?":
    "Rheumatoid arthritis is an autoimmune disease that causes chronic inflammation of the joints. It can lead to joint pain, stiffness, swelling, and loss of function. In severe cases, it can also affect other organs in the body.",

    "What are the risk factors for Rheumatoid Arthritis?":
    "Risk factors for rheumatoid arthritis include genetics, environmental factors, such as smoking, obesity, and certain infections. Women are also more likely to develop rheumatoid arthritis than men.",

    "What are the symptoms of Rheumatoid Arthritis?":
    "Symptoms of rheumatoid arthritis include joint pain, stiffness, swelling, and redness, particularly in the small joints of the hands and feet. Fatigue, fever, and weight loss can also occur.",

    "How is Rheumatoid Arthritis diagnosed?":
    "Rheumatoid arthritis is diagnosed based on a combination of medical history, physical examination, blood tests (such as rheumatoid factor and anti-cyclic citrullinated peptide antibodies), imaging tests (such as X-rays and ultrasound), and evaluation of symptoms.",

    "What are the treatment options for Rheumatoid Arthritis?":
    "Treatment for rheumatoid arthritis aims to reduce inflammation, relieve symptoms, prevent joint damage, and improve quality of life. Treatment may include medications (such as nonsteroidal anti-inflammatory drugs, disease-modifying antirheumatic drugs, and biologic agents), physical therapy, and lifestyle changes.",

    "What are Congenital Anomalies?":
    "Congenital anomalies, also known as birth defects, are structural or functional abnormalities present at birth. They can occur due to genetic factors, environmental exposures during pregnancy, or a combination of both.",

    "What are the causes of Congenital Anomalies?":
    "Congenital anomalies can be caused by genetic mutations, chromosomal abnormalities, maternal infections during pregnancy, exposure to toxins or medications, maternal health conditions (such as diabetes or obesity), and advanced maternal age.",

    "What are examples of Congenital Anomalies?":
    "Examples of congenital anomalies include structural defects (such as cleft lip and palate, heart defects, and neural tube defects), genetic disorders (such as Down syndrome and cystic fibrosis), and functional abnormalities affecting organs or systems.",
    "How are Congenital Anomalies diagnosed?":
    "Congenital anomalies may be diagnosed prenatally through prenatal screening tests (such as ultrasound, amniocentesis, and chorionic villus sampling) or postnatally through physical examination, imaging studies, and genetic testing.",
    "What are the treatment options for Congenital Anomalies?":
    "Treatment for congenital anomalies depends on the type and severity of the anomaly. It may include surgical correction, medications to manage symptoms or complications, assistive devices, physical therapy, and supportive care.",
    "What is Esophageal Cancer?": "Esophageal cancer is a malignant tumor that develops in the esophagus, the muscular tube that connects the throat to the stomach. It is often diagnosed at an advanced stage and can be challenging to treat.",
    "What are the risk factors for Esophageal Cancer?": "Risk factors for esophageal cancer include smoking, heavy alcohol consumption, chronic acid reflux (gastroesophageal reflux disease, or GERD), obesity, poor diet lacking in fruits and vegetables, Barrett's esophagus (a condition in which the lining of the esophagus changes), and certain medical conditions such as achalasia.",
    "What are the symptoms of Esophageal Cancer?": "Symptoms of esophageal cancer may include difficulty swallowing (dysphagia), unintentional weight loss, chest pain or discomfort, persistent indigestion or heartburn, hoarseness, chronic cough, and vomiting blood.",
    "How is Esophageal Cancer diagnosed?": "Esophageal cancer is diagnosed through a combination of medical history assessment, physical examination, imaging tests (such as barium swallow, CT scan, PET scan), endoscopy with biopsy, and laboratory tests to evaluate blood counts and liver function.",
    "What are the treatment options for Esophageal Cancer?": "Treatment for esophageal cancer depends on the stage and location of the tumor, as well as the overall health of the patient. Treatment options may include surgery, chemotherapy, radiation therapy, targeted therapy, immunotherapy, and palliative care to manage symptoms and improve quality of life."
};
export default questionAnswerMap;