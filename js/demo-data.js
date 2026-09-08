// ========================================================
// PhysioFlow Demo - Preloaded Showcase Data (185 Patients & 2 Months History)
// ========================================================

export const DEMO_PATIENTS = [
  {
    "id": "demo-p-1",
    "name": "دعاء شريف منصور",
    "age": 33,
    "phone": "01586848884",
    "address": "القاهرة - مدينة نصر",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "createdAt": "2026-06-08T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-2",
    "name": "ندى علي قاسم",
    "age": 19,
    "phone": "01552175656",
    "address": "الإسكندرية - رشدي",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-12T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-3",
    "name": "محمود هيثم سالم",
    "age": 24,
    "phone": "01248601278",
    "address": "الإسكندرية - بحري",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "بوبا (Bupa)",
    "contractType": "direct",
    "createdAt": "2026-08-01T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "تمزق أربطة الكاحل وتأهيل التواء المزمن",
      "affectedArea": "الكاحل الخارجي والقدم",
      "modalities": [
        "كمادات باردة / ثلج (Cryotherapy)",
        "Ultrasound (موجات صوتية)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين الاتزان والتوازن (Balance & Proprioception)",
        "تمارين التقوية العضلية (Strengthening)"
      ],
      "exerciseDetails": "الوقوف على لوح الاتزان (Wobble board) لدقيقة، تقوية عضلات الشظية بالثيرا باند (Theraband)",
      "plannedSessions": "8 جلسات",
      "doctorNotes": "استعادة الثبات الحركي الكامل وزوال الألم أثناء المشي السريع",
      "lastUpdated": "2026-08-01 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-4",
    "name": "شيرين معتز موسى",
    "age": 74,
    "phone": "01067102035",
    "address": "القاهرة - المعادي",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-17T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-5",
    "name": "سامح شريف عفيفي",
    "age": 70,
    "phone": "01087244482",
    "address": "الإسكندرية - سابا باشا",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "نكست كير (NextCare)",
    "contractType": "indirect",
    "createdAt": "2026-08-23T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "خشونة متقدمة بمفصل الركبة (Grade 2 Knee OA)",
      "affectedArea": "الركبة اليمنى والمفصل الرضفي",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات ساخنة (Hot Pack)",
        "ليزر علاجي (Laser Therapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين المدى الحركي (Range of Motion)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين تقوية العضلة الرباعية (Quadriceps isometrics)، تمرين رفع الساق مستقيمة (SLR) 3×10",
      "plannedSessions": "10 جلسات (جلستان أسبوعياً)",
      "doctorNotes": "زيادة المدى الحركي للثني إلى 115 درجة وتراجع التورم",
      "lastUpdated": "2026-08-23 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-6",
    "name": "إبراهيم حازم البنا",
    "age": 59,
    "phone": "01573002611",
    "address": "القاهرة - مدينة نصر",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "بوبا (Bupa)",
    "contractType": "direct",
    "createdAt": "2026-08-18T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "تمزق أربطة الكاحل وتأهيل التواء المزمن",
      "affectedArea": "الكاحل الخارجي والقدم",
      "modalities": [
        "كمادات باردة / ثلج (Cryotherapy)",
        "Ultrasound (موجات صوتية)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين الاتزان والتوازن (Balance & Proprioception)",
        "تمارين التقوية العضلية (Strengthening)"
      ],
      "exerciseDetails": "الوقوف على لوح الاتزان (Wobble board) لدقيقة، تقوية عضلات الشظية بالثيرا باند (Theraband)",
      "plannedSessions": "8 جلسات",
      "doctorNotes": "استعادة الثبات الحركي الكامل وزوال الألم أثناء المشي السريع",
      "lastUpdated": "2026-08-18 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-7",
    "name": "مصطفى كريم رضوان",
    "age": 37,
    "phone": "01211245123",
    "address": "الإسكندرية - سيدي جابر",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "createdAt": "2026-08-26T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-8",
    "name": "منار حسن موسى",
    "age": 48,
    "phone": "01568281295",
    "address": "القاهرة - مدينة نصر",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "مصر للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-06-15T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود",
    "clinicalSheet": {
      "diagnosis": "متلازمة النفق الرسغي والتهاب أوتار اليد",
      "affectedArea": "الرسغ واليد اليسرى",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات باردة / ثلج (Cryotherapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "exerciseDetails": "تمارين انزلاق العصب الأوسط (Nerve gliding exercises) وإطالة قابضات الرسغ",
      "plannedSessions": "6 جلسات",
      "doctorNotes": "اختفاء التنميل الليلي وتحسن قوة القبضة",
      "lastUpdated": "2026-06-15 11:30 ص",
      "updatedBy": "د. مصطفى محمود"
    }
  },
  {
    "id": "demo-p-9",
    "name": "شريف حسن قاسم",
    "age": 30,
    "phone": "01574309920",
    "address": "الإسكندرية - لوران",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "مصر للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-06-04T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل"
  },
  {
    "id": "demo-p-10",
    "name": "مروة زياد عبد العزيز",
    "age": 24,
    "phone": "01070563108",
    "address": "القاهرة - مصر الجديدة",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "ميتلايف (MetLife)",
    "contractType": "direct",
    "createdAt": "2026-06-08T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-11",
    "name": "حسن وليد الجمال",
    "age": 28,
    "phone": "01052069571",
    "address": "القاهرة - مصر الجديدة",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "أليانز (Allianz)",
    "contractType": "direct",
    "createdAt": "2026-06-18T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "خشونة متقدمة بمفصل الركبة (Grade 2 Knee OA)",
      "affectedArea": "الركبة اليمنى والمفصل الرضفي",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات ساخنة (Hot Pack)",
        "ليزر علاجي (Laser Therapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين المدى الحركي (Range of Motion)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين تقوية العضلة الرباعية (Quadriceps isometrics)، تمرين رفع الساق مستقيمة (SLR) 3×10",
      "plannedSessions": "10 جلسات (جلستان أسبوعياً)",
      "doctorNotes": "زيادة المدى الحركي للثني إلى 115 درجة وتراجع التورم",
      "lastUpdated": "2026-06-18 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-12",
    "name": "معتز تامر عيسى",
    "age": 37,
    "phone": "01066073339",
    "address": "الإسكندرية - الإبراهيمية",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "بوبا (Bupa)",
    "contractType": "direct",
    "createdAt": "2026-07-17T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "خشونة متقدمة بمفصل الركبة (Grade 2 Knee OA)",
      "affectedArea": "الركبة اليمنى والمفصل الرضفي",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات ساخنة (Hot Pack)",
        "ليزر علاجي (Laser Therapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين المدى الحركي (Range of Motion)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين تقوية العضلة الرباعية (Quadriceps isometrics)، تمرين رفع الساق مستقيمة (SLR) 3×10",
      "plannedSessions": "10 جلسات (جلستان أسبوعياً)",
      "doctorNotes": "زيادة المدى الحركي للثني إلى 115 درجة وتراجع التورم",
      "lastUpdated": "2026-07-17 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-13",
    "name": "خالد مصطفى عبد العزيز",
    "age": 25,
    "phone": "01519856055",
    "address": "الإسكندرية - سيدي جابر",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "أكسا (AXA)",
    "contractType": "direct",
    "createdAt": "2026-08-01T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "متلازمة النفق الرسغي والتهاب أوتار اليد",
      "affectedArea": "الرسغ واليد اليسرى",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات باردة / ثلج (Cryotherapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "exerciseDetails": "تمارين انزلاق العصب الأوسط (Nerve gliding exercises) وإطالة قابضات الرسغ",
      "plannedSessions": "6 جلسات",
      "doctorNotes": "اختفاء التنميل الليلي وتحسن قوة القبضة",
      "lastUpdated": "2026-08-01 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-14",
    "name": "هبة زياد البنا",
    "age": 50,
    "phone": "01586721298",
    "address": "القاهرة - التجمع الخامس",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-17T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "متلازمة الكتف المتجمد (Frozen Shoulder)",
      "affectedArea": "مفصل الكتف الأيسر واللوح",
      "modalities": [
        "كمادات ساخنة (Hot Pack)",
        "TENS (تيار تنبيهي)",
        "موجات تصادمية (Shockwave)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "تمارين الاتزان والتوازن (Balance & Proprioception)"
      ],
      "exerciseDetails": "تمرين عصا البندول (Codman exercises)، تمارين التسلق على الحائط، إطالة الكبسولة الخلفية",
      "plannedSessions": "15 جلسة",
      "doctorNotes": "تحسن في الدوران الخارجي ورفع الذراع للأعلى بمقدار 25 درجة",
      "lastUpdated": "2026-06-17 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-15",
    "name": "إبراهيم وليد الشافعي",
    "age": 54,
    "phone": "01514583896",
    "address": "الإسكندرية - رشدي",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-18T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "متلازمة النفق الرسغي والتهاب أوتار اليد",
      "affectedArea": "الرسغ واليد اليسرى",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات باردة / ثلج (Cryotherapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "exerciseDetails": "تمارين انزلاق العصب الأوسط (Nerve gliding exercises) وإطالة قابضات الرسغ",
      "plannedSessions": "6 جلسات",
      "doctorNotes": "اختفاء التنميل الليلي وتحسن قوة القبضة",
      "lastUpdated": "2026-06-18 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-16",
    "name": "هند وليد إبراهيم",
    "age": 27,
    "phone": "01179370789",
    "address": "الإسكندرية - ميامي",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "أليانز (Allianz)",
    "contractType": "direct",
    "createdAt": "2026-07-13T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "تمزق أربطة الكاحل وتأهيل التواء المزمن",
      "affectedArea": "الكاحل الخارجي والقدم",
      "modalities": [
        "كمادات باردة / ثلج (Cryotherapy)",
        "Ultrasound (موجات صوتية)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين الاتزان والتوازن (Balance & Proprioception)",
        "تمارين التقوية العضلية (Strengthening)"
      ],
      "exerciseDetails": "الوقوف على لوح الاتزان (Wobble board) لدقيقة، تقوية عضلات الشظية بالثيرا باند (Theraband)",
      "plannedSessions": "8 جلسات",
      "doctorNotes": "استعادة الثبات الحركي الكامل وزوال الألم أثناء المشي السريع",
      "lastUpdated": "2026-07-13 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-17",
    "name": "مصطفى حسين عوض",
    "age": 41,
    "phone": "01145358813",
    "address": "الإسكندرية - بحري",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "المهندس للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-07-10T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "شلل الوجه النصفي (Bell's Palsy)",
      "affectedArea": "عضلات الوجه النصف الأيمن",
      "modalities": [
        "أشعة تحت الحمراء (Infrared)",
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)"
      ],
      "customModalities": "",
      "procedures": [
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين إغلاق العين والابتسام والنفخ أمام المرآة 4 مرات يومياً",
      "plannedSessions": "20 جلسة",
      "doctorNotes": "استعادة حركة زاوية الفم وإغلاق الجفن بنسبة 80%",
      "lastUpdated": "2026-07-10 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-18",
    "name": "علي شريف عفيفي",
    "age": 69,
    "phone": "01222692439",
    "address": "الإسكندرية - رشدي",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-03T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-19",
    "name": "يارا ياسر عوض",
    "age": 20,
    "phone": "01231039853",
    "address": "الإسكندرية - العجمي",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-23T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-20",
    "name": "خالد ماجد رمضان",
    "age": 55,
    "phone": "01299967131",
    "address": "القاهرة - مدينة نصر",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-09T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-21",
    "name": "وفاء محمد الجمال",
    "age": 65,
    "phone": "01196697188",
    "address": "الإسكندرية - جليم",
    "doctor": "د. سارة عادل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-27T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "متلازمة الكتف المتجمد (Frozen Shoulder)",
      "affectedArea": "مفصل الكتف الأيسر واللوح",
      "modalities": [
        "كمادات ساخنة (Hot Pack)",
        "TENS (تيار تنبيهي)",
        "موجات تصادمية (Shockwave)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "تمارين الاتزان والتوازن (Balance & Proprioception)"
      ],
      "exerciseDetails": "تمرين عصا البندول (Codman exercises)، تمارين التسلق على الحائط، إطالة الكبسولة الخلفية",
      "plannedSessions": "15 جلسة",
      "doctorNotes": "تحسن في الدوران الخارجي ورفع الذراع للأعلى بمقدار 25 درجة",
      "lastUpdated": "2026-06-27 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-22",
    "name": "دينا محمود عبد العزيز",
    "age": 45,
    "phone": "01265637040",
    "address": "الإسكندرية - سموحة",
    "doctor": "د. مصطفى محمود",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-01T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود",
    "clinicalSheet": {
      "diagnosis": "متلازمة النفق الرسغي والتهاب أوتار اليد",
      "affectedArea": "الرسغ واليد اليسرى",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات باردة / ثلج (Cryotherapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "exerciseDetails": "تمارين انزلاق العصب الأوسط (Nerve gliding exercises) وإطالة قابضات الرسغ",
      "plannedSessions": "6 جلسات",
      "doctorNotes": "اختفاء التنميل الليلي وتحسن قوة القبضة",
      "lastUpdated": "2026-07-01 11:30 ص",
      "updatedBy": "د. مصطفى محمود"
    }
  },
  {
    "id": "demo-p-23",
    "name": "زياد حازم الجمال",
    "age": 39,
    "phone": "01591504394",
    "address": "القاهرة - التجمع الخامس",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "مصر للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-06-20T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-24",
    "name": "وفاء معتز البنا",
    "age": 62,
    "phone": "01277278217",
    "address": "الإسكندرية - كفر عبده",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-27T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "متلازمة النفق الرسغي والتهاب أوتار اليد",
      "affectedArea": "الرسغ واليد اليسرى",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات باردة / ثلج (Cryotherapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "exerciseDetails": "تمارين انزلاق العصب الأوسط (Nerve gliding exercises) وإطالة قابضات الرسغ",
      "plannedSessions": "6 جلسات",
      "doctorNotes": "اختفاء التنميل الليلي وتحسن قوة القبضة",
      "lastUpdated": "2026-07-27 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-25",
    "name": "فاطمة حسين سالم",
    "age": 37,
    "phone": "01049854883",
    "address": "الإسكندرية - الشاطبي",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "أكسا (AXA)",
    "contractType": "direct",
    "createdAt": "2026-07-18T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "انزلاق غضروفي قطني L4-L5 مع عرق النسا",
      "affectedArea": "الفقرات القطنية والطرف السفلي الأيمن",
      "modalities": [
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)",
        "الشد الفقري (Traction)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين عضلات الجذع (Core Stability)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمرين الجسر (Bridging) 3×10، إطالة العضلة الكمثرية 30 ثانية، تمارين ماكنزي لأسفل الظهر",
      "plannedSessions": "12 جلسة (3 جلسات أسبوعياً)",
      "doctorNotes": "تحسن ملحوظ في الحركة وانخفاض حدة الألم بنسبة 50%",
      "lastUpdated": "2026-07-18 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-26",
    "name": "علي عمرو البنا",
    "age": 26,
    "phone": "01026868746",
    "address": "القاهرة - المعادي",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "بوبا (Bupa)",
    "contractType": "direct",
    "createdAt": "2026-07-01T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل"
  },
  {
    "id": "demo-p-27",
    "name": "شيرين مصطفى حمدي",
    "age": 68,
    "phone": "01598931731",
    "address": "الإسكندرية - سابا باشا",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-01T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-28",
    "name": "عادل مصطفى زهران",
    "age": 69,
    "phone": "01140635974",
    "address": "الإسكندرية - سموحة",
    "doctor": "د. مصطفى محمود",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-16T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود",
    "clinicalSheet": {
      "diagnosis": "متلازمة الكتف المتجمد (Frozen Shoulder)",
      "affectedArea": "مفصل الكتف الأيسر واللوح",
      "modalities": [
        "كمادات ساخنة (Hot Pack)",
        "TENS (تيار تنبيهي)",
        "موجات تصادمية (Shockwave)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "تمارين الاتزان والتوازن (Balance & Proprioception)"
      ],
      "exerciseDetails": "تمرين عصا البندول (Codman exercises)، تمارين التسلق على الحائط، إطالة الكبسولة الخلفية",
      "plannedSessions": "15 جلسة",
      "doctorNotes": "تحسن في الدوران الخارجي ورفع الذراع للأعلى بمقدار 25 درجة",
      "lastUpdated": "2026-07-16 11:30 ص",
      "updatedBy": "د. مصطفى محمود"
    }
  },
  {
    "id": "demo-p-29",
    "name": "حنان ماجد العطار",
    "age": 72,
    "phone": "01184220003",
    "address": "الإسكندرية - سيدي جابر",
    "doctor": "د. سارة عادل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-17T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "متلازمة النفق الرسغي والتهاب أوتار اليد",
      "affectedArea": "الرسغ واليد اليسرى",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات باردة / ثلج (Cryotherapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "exerciseDetails": "تمارين انزلاق العصب الأوسط (Nerve gliding exercises) وإطالة قابضات الرسغ",
      "plannedSessions": "6 جلسات",
      "doctorNotes": "اختفاء التنميل الليلي وتحسن قوة القبضة",
      "lastUpdated": "2026-08-17 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-30",
    "name": "إسلام إبراهيم السيد",
    "age": 22,
    "phone": "01178265854",
    "address": "الإسكندرية - ميامي",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "مصر للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-06-26T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-31",
    "name": "بسمة خالد مراد",
    "age": 41,
    "phone": "01595498222",
    "address": "الإسكندرية - بحري",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "بوبا (Bupa)",
    "contractType": "direct",
    "createdAt": "2026-06-07T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-32",
    "name": "سلوى أحمد الجمال",
    "age": 71,
    "phone": "01515034008",
    "address": "الإسكندرية - الإبراهيمية",
    "doctor": "د. مصطفى محمود",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-18T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود",
    "clinicalSheet": {
      "diagnosis": "متلازمة النفق الرسغي والتهاب أوتار اليد",
      "affectedArea": "الرسغ واليد اليسرى",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات باردة / ثلج (Cryotherapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "exerciseDetails": "تمارين انزلاق العصب الأوسط (Nerve gliding exercises) وإطالة قابضات الرسغ",
      "plannedSessions": "6 جلسات",
      "doctorNotes": "اختفاء التنميل الليلي وتحسن قوة القبضة",
      "lastUpdated": "2026-08-18 11:30 ص",
      "updatedBy": "د. مصطفى محمود"
    }
  },
  {
    "id": "demo-p-33",
    "name": "معتز أحمد غنيم",
    "age": 32,
    "phone": "01286857008",
    "address": "الإسكندرية - سيدي جابر",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-17T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-34",
    "name": "علي محمود خليل",
    "age": 65,
    "phone": "01554776368",
    "address": "القاهرة - مدينة نصر",
    "doctor": "د. سارة عادل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-24T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل"
  },
  {
    "id": "demo-p-35",
    "name": "سلوى حسين رمضان",
    "age": 53,
    "phone": "01257945702",
    "address": "الإسكندرية - ميامي",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-24T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "شلل الوجه النصفي (Bell's Palsy)",
      "affectedArea": "عضلات الوجه النصف الأيمن",
      "modalities": [
        "أشعة تحت الحمراء (Infrared)",
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)"
      ],
      "customModalities": "",
      "procedures": [
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين إغلاق العين والابتسام والنفخ أمام المرآة 4 مرات يومياً",
      "plannedSessions": "20 جلسة",
      "doctorNotes": "استعادة حركة زاوية الفم وإغلاق الجفن بنسبة 80%",
      "lastUpdated": "2026-08-24 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-36",
    "name": "كريم يوسف غنيم",
    "age": 29,
    "phone": "01034108605",
    "address": "الإسكندرية - محرم بك",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-04T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-37",
    "name": "أيمن أحمد مراد",
    "age": 23,
    "phone": "01250620832",
    "address": "الإسكندرية - رشدي",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "ميتلايف (MetLife)",
    "contractType": "direct",
    "createdAt": "2026-06-05T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-38",
    "name": "حازم ياسر الشافعي",
    "age": 43,
    "phone": "01292806254",
    "address": "الإسكندرية - كليوباترا",
    "doctor": "د. مصطفى محمود",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-16T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-39",
    "name": "نهى وليد الجندي",
    "age": 56,
    "phone": "01221079602",
    "address": "الإسكندرية - لوران",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "بوبا (Bupa)",
    "contractType": "direct",
    "createdAt": "2026-08-09T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود",
    "clinicalSheet": {
      "diagnosis": "متلازمة الكتف المتجمد (Frozen Shoulder)",
      "affectedArea": "مفصل الكتف الأيسر واللوح",
      "modalities": [
        "كمادات ساخنة (Hot Pack)",
        "TENS (تيار تنبيهي)",
        "موجات تصادمية (Shockwave)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "تمارين الاتزان والتوازن (Balance & Proprioception)"
      ],
      "exerciseDetails": "تمرين عصا البندول (Codman exercises)، تمارين التسلق على الحائط، إطالة الكبسولة الخلفية",
      "plannedSessions": "15 جلسة",
      "doctorNotes": "تحسن في الدوران الخارجي ورفع الذراع للأعلى بمقدار 25 درجة",
      "lastUpdated": "2026-08-09 11:30 ص",
      "updatedBy": "د. مصطفى محمود"
    }
  },
  {
    "id": "demo-p-40",
    "name": "هاجر طارق جاد",
    "age": 65,
    "phone": "01564099053",
    "address": "الإسكندرية - محرم بك",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-15T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-41",
    "name": "أيمن وائل الجمال",
    "age": 45,
    "phone": "01538571671",
    "address": "الإسكندرية - ميامي",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "أليانز (Allianz)",
    "contractType": "direct",
    "createdAt": "2026-07-14T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "انزلاق غضروفي قطني L4-L5 مع عرق النسا",
      "affectedArea": "الفقرات القطنية والطرف السفلي الأيمن",
      "modalities": [
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)",
        "الشد الفقري (Traction)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين عضلات الجذع (Core Stability)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمرين الجسر (Bridging) 3×10، إطالة العضلة الكمثرية 30 ثانية، تمارين ماكنزي لأسفل الظهر",
      "plannedSessions": "12 جلسة (3 جلسات أسبوعياً)",
      "doctorNotes": "تحسن ملحوظ في الحركة وانخفاض حدة الألم بنسبة 50%",
      "lastUpdated": "2026-07-14 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-42",
    "name": "ندى حازم قاسم",
    "age": 35,
    "phone": "01183164356",
    "address": "الإسكندرية - كفر عبده",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-05T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-43",
    "name": "مها هشام الحداد",
    "age": 44,
    "phone": "01083784068",
    "address": "الإسكندرية - محرم بك",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-22T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-44",
    "name": "ياسر وليد غنيم",
    "age": 52,
    "phone": "01166966881",
    "address": "الإسكندرية - العجمي",
    "doctor": "د. سارة عادل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-13T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "متلازمة الكتف المتجمد (Frozen Shoulder)",
      "affectedArea": "مفصل الكتف الأيسر واللوح",
      "modalities": [
        "كمادات ساخنة (Hot Pack)",
        "TENS (تيار تنبيهي)",
        "موجات تصادمية (Shockwave)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "تمارين الاتزان والتوازن (Balance & Proprioception)"
      ],
      "exerciseDetails": "تمرين عصا البندول (Codman exercises)، تمارين التسلق على الحائط، إطالة الكبسولة الخلفية",
      "plannedSessions": "15 جلسة",
      "doctorNotes": "تحسن في الدوران الخارجي ورفع الذراع للأعلى بمقدار 25 درجة",
      "lastUpdated": "2026-08-13 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-45",
    "name": "حسن عمر سالم",
    "age": 56,
    "phone": "01573879958",
    "address": "الإسكندرية - زيزينيا",
    "doctor": "د. سارة عادل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-25T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل"
  },
  {
    "id": "demo-p-46",
    "name": "حسن طارق إبراهيم",
    "age": 68,
    "phone": "01171355838",
    "address": "القاهرة - المعادي",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "مصر للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-08-03T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل"
  },
  {
    "id": "demo-p-47",
    "name": "أحمد علي خليل",
    "age": 40,
    "phone": "01172205072",
    "address": "الإسكندرية - رشدي",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "نكست كير (NextCare)",
    "contractType": "indirect",
    "createdAt": "2026-07-19T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-48",
    "name": "عادل عمر منصور",
    "age": 20,
    "phone": "01266309126",
    "address": "الإسكندرية - سيدي جابر",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "ميتلايف (MetLife)",
    "contractType": "direct",
    "createdAt": "2026-08-16T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-49",
    "name": "هبة أشرف السيد",
    "age": 35,
    "phone": "01553893672",
    "address": "الإسكندرية - كفر عبده",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "أليانز (Allianz)",
    "contractType": "direct",
    "createdAt": "2026-07-01T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-50",
    "name": "منى هشام رضوان",
    "age": 42,
    "phone": "01278758900",
    "address": "الإسكندرية - السيوف",
    "doctor": "د. سارة عادل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-02T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل"
  },
  {
    "id": "demo-p-51",
    "name": "إسلام وليد عيسى",
    "age": 62,
    "phone": "01274773101",
    "address": "القاهرة - التجمع الخامس",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "مصر للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-07-16T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-52",
    "name": "سارة عادل عوض",
    "age": 67,
    "phone": "01280866014",
    "address": "القاهرة - المعادي",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "ميتلايف (MetLife)",
    "contractType": "direct",
    "createdAt": "2026-07-01T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "تمزق أربطة الكاحل وتأهيل التواء المزمن",
      "affectedArea": "الكاحل الخارجي والقدم",
      "modalities": [
        "كمادات باردة / ثلج (Cryotherapy)",
        "Ultrasound (موجات صوتية)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين الاتزان والتوازن (Balance & Proprioception)",
        "تمارين التقوية العضلية (Strengthening)"
      ],
      "exerciseDetails": "الوقوف على لوح الاتزان (Wobble board) لدقيقة، تقوية عضلات الشظية بالثيرا باند (Theraband)",
      "plannedSessions": "8 جلسات",
      "doctorNotes": "استعادة الثبات الحركي الكامل وزوال الألم أثناء المشي السريع",
      "lastUpdated": "2026-07-01 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-53",
    "name": "شريف عمر عيسى",
    "age": 32,
    "phone": "01275576576",
    "address": "الإسكندرية - ميامي",
    "doctor": "د. سارة عادل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-21T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "متلازمة النفق الرسغي والتهاب أوتار اليد",
      "affectedArea": "الرسغ واليد اليسرى",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات باردة / ثلج (Cryotherapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "exerciseDetails": "تمارين انزلاق العصب الأوسط (Nerve gliding exercises) وإطالة قابضات الرسغ",
      "plannedSessions": "6 جلسات",
      "doctorNotes": "اختفاء التنميل الليلي وتحسن قوة القبضة",
      "lastUpdated": "2026-07-21 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-54",
    "name": "عمر أشرف خليل",
    "age": 65,
    "phone": "01127616973",
    "address": "القاهرة - مصر الجديدة",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "أكسا (AXA)",
    "contractType": "direct",
    "createdAt": "2026-07-09T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-55",
    "name": "دينا عادل الجمال",
    "age": 27,
    "phone": "01532588066",
    "address": "الإسكندرية - الإبراهيمية",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "أليانز (Allianz)",
    "contractType": "direct",
    "createdAt": "2026-08-14T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-56",
    "name": "أحمد حسين الصاوي",
    "age": 51,
    "phone": "01282846122",
    "address": "الإسكندرية - لوران",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "المهندس للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-07-05T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "شلل الوجه النصفي (Bell's Palsy)",
      "affectedArea": "عضلات الوجه النصف الأيمن",
      "modalities": [
        "أشعة تحت الحمراء (Infrared)",
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)"
      ],
      "customModalities": "",
      "procedures": [
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين إغلاق العين والابتسام والنفخ أمام المرآة 4 مرات يومياً",
      "plannedSessions": "20 جلسة",
      "doctorNotes": "استعادة حركة زاوية الفم وإغلاق الجفن بنسبة 80%",
      "lastUpdated": "2026-07-05 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-57",
    "name": "فاطمة محمد منصور",
    "age": 41,
    "phone": "01254126987",
    "address": "الإسكندرية - سموحة",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "نكست كير (NextCare)",
    "contractType": "indirect",
    "createdAt": "2026-08-14T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "خشونة متقدمة بمفصل الركبة (Grade 2 Knee OA)",
      "affectedArea": "الركبة اليمنى والمفصل الرضفي",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات ساخنة (Hot Pack)",
        "ليزر علاجي (Laser Therapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين المدى الحركي (Range of Motion)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين تقوية العضلة الرباعية (Quadriceps isometrics)، تمرين رفع الساق مستقيمة (SLR) 3×10",
      "plannedSessions": "10 جلسات (جلستان أسبوعياً)",
      "doctorNotes": "زيادة المدى الحركي للثني إلى 115 درجة وتراجع التورم",
      "lastUpdated": "2026-08-14 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-58",
    "name": "وفاء سامح الشناوي",
    "age": 42,
    "phone": "01181922129",
    "address": "الإسكندرية - الشاطبي",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "مصر للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-06-23T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-59",
    "name": "هشام زياد السيد",
    "age": 24,
    "phone": "01136232379",
    "address": "الإسكندرية - جليم",
    "doctor": "د. مصطفى محمود",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-22T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-60",
    "name": "منار إسلام زكي",
    "age": 31,
    "phone": "01514093885",
    "address": "القاهرة - مدينة نصر",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "بوبا (Bupa)",
    "contractType": "direct",
    "createdAt": "2026-08-10T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "انزلاق غضروفي قطني L4-L5 مع عرق النسا",
      "affectedArea": "الفقرات القطنية والطرف السفلي الأيمن",
      "modalities": [
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)",
        "الشد الفقري (Traction)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين عضلات الجذع (Core Stability)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمرين الجسر (Bridging) 3×10، إطالة العضلة الكمثرية 30 ثانية، تمارين ماكنزي لأسفل الظهر",
      "plannedSessions": "12 جلسة (3 جلسات أسبوعياً)",
      "doctorNotes": "تحسن ملحوظ في الحركة وانخفاض حدة الألم بنسبة 50%",
      "lastUpdated": "2026-08-10 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-61",
    "name": "هشام معتز المهدي",
    "age": 72,
    "phone": "01275521258",
    "address": "الإسكندرية - ميامي",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "ميتلايف (MetLife)",
    "contractType": "direct",
    "createdAt": "2026-07-12T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود",
    "clinicalSheet": {
      "diagnosis": "متلازمة النفق الرسغي والتهاب أوتار اليد",
      "affectedArea": "الرسغ واليد اليسرى",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات باردة / ثلج (Cryotherapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "exerciseDetails": "تمارين انزلاق العصب الأوسط (Nerve gliding exercises) وإطالة قابضات الرسغ",
      "plannedSessions": "6 جلسات",
      "doctorNotes": "اختفاء التنميل الليلي وتحسن قوة القبضة",
      "lastUpdated": "2026-07-12 11:30 ص",
      "updatedBy": "د. مصطفى محمود"
    }
  },
  {
    "id": "demo-p-62",
    "name": "زياد تامر جاد",
    "age": 67,
    "phone": "01220580092",
    "address": "الإسكندرية - بحري",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-27T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-63",
    "name": "ياسر حسن رمضان",
    "age": 21,
    "phone": "01089216444",
    "address": "الإسكندرية - سيدي جابر",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "createdAt": "2026-06-19T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود",
    "clinicalSheet": {
      "diagnosis": "متلازمة النفق الرسغي والتهاب أوتار اليد",
      "affectedArea": "الرسغ واليد اليسرى",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات باردة / ثلج (Cryotherapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "exerciseDetails": "تمارين انزلاق العصب الأوسط (Nerve gliding exercises) وإطالة قابضات الرسغ",
      "plannedSessions": "6 جلسات",
      "doctorNotes": "اختفاء التنميل الليلي وتحسن قوة القبضة",
      "lastUpdated": "2026-06-19 11:30 ص",
      "updatedBy": "د. مصطفى محمود"
    }
  },
  {
    "id": "demo-p-64",
    "name": "هشام أشرف السيد",
    "age": 53,
    "phone": "01030549175",
    "address": "الإسكندرية - محرم بك",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-13T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "متلازمة الكتف المتجمد (Frozen Shoulder)",
      "affectedArea": "مفصل الكتف الأيسر واللوح",
      "modalities": [
        "كمادات ساخنة (Hot Pack)",
        "TENS (تيار تنبيهي)",
        "موجات تصادمية (Shockwave)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "تمارين الاتزان والتوازن (Balance & Proprioception)"
      ],
      "exerciseDetails": "تمرين عصا البندول (Codman exercises)، تمارين التسلق على الحائط، إطالة الكبسولة الخلفية",
      "plannedSessions": "15 جلسة",
      "doctorNotes": "تحسن في الدوران الخارجي ورفع الذراع للأعلى بمقدار 25 درجة",
      "lastUpdated": "2026-06-13 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-65",
    "name": "مريم هيثم الشافعي",
    "age": 67,
    "phone": "01054951322",
    "address": "الإسكندرية - ميامي",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "ميتلايف (MetLife)",
    "contractType": "direct",
    "createdAt": "2026-08-11T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل"
  },
  {
    "id": "demo-p-66",
    "name": "مصطفى إبراهيم عيسى",
    "age": 74,
    "phone": "01266219399",
    "address": "الإسكندرية - سيدي جابر",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-06T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "انزلاق غضروفي قطني L4-L5 مع عرق النسا",
      "affectedArea": "الفقرات القطنية والطرف السفلي الأيمن",
      "modalities": [
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)",
        "الشد الفقري (Traction)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين عضلات الجذع (Core Stability)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمرين الجسر (Bridging) 3×10، إطالة العضلة الكمثرية 30 ثانية، تمارين ماكنزي لأسفل الظهر",
      "plannedSessions": "12 جلسة (3 جلسات أسبوعياً)",
      "doctorNotes": "تحسن ملحوظ في الحركة وانخفاض حدة الألم بنسبة 50%",
      "lastUpdated": "2026-07-06 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-67",
    "name": "ماجد مصطفى السيد",
    "age": 52,
    "phone": "01076968603",
    "address": "الإسكندرية - رشدي",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "createdAt": "2026-06-26T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "شلل الوجه النصفي (Bell's Palsy)",
      "affectedArea": "عضلات الوجه النصف الأيمن",
      "modalities": [
        "أشعة تحت الحمراء (Infrared)",
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)"
      ],
      "customModalities": "",
      "procedures": [
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين إغلاق العين والابتسام والنفخ أمام المرآة 4 مرات يومياً",
      "plannedSessions": "20 جلسة",
      "doctorNotes": "استعادة حركة زاوية الفم وإغلاق الجفن بنسبة 80%",
      "lastUpdated": "2026-06-26 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-68",
    "name": "منى كريم إبراهيم",
    "age": 41,
    "phone": "01181185819",
    "address": "الإسكندرية - جليم",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "نكست كير (NextCare)",
    "contractType": "indirect",
    "createdAt": "2026-06-18T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "انزلاق غضروفي قطني L4-L5 مع عرق النسا",
      "affectedArea": "الفقرات القطنية والطرف السفلي الأيمن",
      "modalities": [
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)",
        "الشد الفقري (Traction)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين عضلات الجذع (Core Stability)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمرين الجسر (Bridging) 3×10، إطالة العضلة الكمثرية 30 ثانية، تمارين ماكنزي لأسفل الظهر",
      "plannedSessions": "12 جلسة (3 جلسات أسبوعياً)",
      "doctorNotes": "تحسن ملحوظ في الحركة وانخفاض حدة الألم بنسبة 50%",
      "lastUpdated": "2026-06-18 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-69",
    "name": "وائل كريم الحداد",
    "age": 19,
    "phone": "01136393021",
    "address": "الإسكندرية - سيدي جابر",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "أليانز (Allianz)",
    "contractType": "direct",
    "createdAt": "2026-07-17T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل"
  },
  {
    "id": "demo-p-70",
    "name": "آية زياد حسام الدين",
    "age": 32,
    "phone": "01070048482",
    "address": "القاهرة - مدينة نصر",
    "doctor": "د. مصطفى محمود",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-23T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-71",
    "name": "زياد محمد رضوان",
    "age": 60,
    "phone": "01516310160",
    "address": "الإسكندرية - كليوباترا",
    "doctor": "د. مصطفى محمود",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-03T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود",
    "clinicalSheet": {
      "diagnosis": "متلازمة الكتف المتجمد (Frozen Shoulder)",
      "affectedArea": "مفصل الكتف الأيسر واللوح",
      "modalities": [
        "كمادات ساخنة (Hot Pack)",
        "TENS (تيار تنبيهي)",
        "موجات تصادمية (Shockwave)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "تمارين الاتزان والتوازن (Balance & Proprioception)"
      ],
      "exerciseDetails": "تمرين عصا البندول (Codman exercises)، تمارين التسلق على الحائط، إطالة الكبسولة الخلفية",
      "plannedSessions": "15 جلسة",
      "doctorNotes": "تحسن في الدوران الخارجي ورفع الذراع للأعلى بمقدار 25 درجة",
      "lastUpdated": "2026-07-03 11:30 ص",
      "updatedBy": "د. مصطفى محمود"
    }
  },
  {
    "id": "demo-p-72",
    "name": "محمد سامح زهران",
    "age": 23,
    "phone": "01183477995",
    "address": "القاهرة - المعادي",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "أكسا (AXA)",
    "contractType": "direct",
    "createdAt": "2026-07-18T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "تمزق أربطة الكاحل وتأهيل التواء المزمن",
      "affectedArea": "الكاحل الخارجي والقدم",
      "modalities": [
        "كمادات باردة / ثلج (Cryotherapy)",
        "Ultrasound (موجات صوتية)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين الاتزان والتوازن (Balance & Proprioception)",
        "تمارين التقوية العضلية (Strengthening)"
      ],
      "exerciseDetails": "الوقوف على لوح الاتزان (Wobble board) لدقيقة، تقوية عضلات الشظية بالثيرا باند (Theraband)",
      "plannedSessions": "8 جلسات",
      "doctorNotes": "استعادة الثبات الحركي الكامل وزوال الألم أثناء المشي السريع",
      "lastUpdated": "2026-07-18 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-73",
    "name": "إبراهيم محمد عبد العزيز",
    "age": 45,
    "phone": "01584609197",
    "address": "الإسكندرية - لوران",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "أليانز (Allianz)",
    "contractType": "direct",
    "createdAt": "2026-06-06T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "خشونة متقدمة بمفصل الركبة (Grade 2 Knee OA)",
      "affectedArea": "الركبة اليمنى والمفصل الرضفي",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات ساخنة (Hot Pack)",
        "ليزر علاجي (Laser Therapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين المدى الحركي (Range of Motion)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين تقوية العضلة الرباعية (Quadriceps isometrics)، تمرين رفع الساق مستقيمة (SLR) 3×10",
      "plannedSessions": "10 جلسات (جلستان أسبوعياً)",
      "doctorNotes": "زيادة المدى الحركي للثني إلى 115 درجة وتراجع التورم",
      "lastUpdated": "2026-06-06 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-74",
    "name": "طارق مصطفى المهدي",
    "age": 60,
    "phone": "01172828591",
    "address": "الإسكندرية - لوران",
    "doctor": "د. مصطفى محمود",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-24T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-75",
    "name": "شريف أيمن حمدي",
    "age": 71,
    "phone": "01529996329",
    "address": "الإسكندرية - محرم بك",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "نكست كير (NextCare)",
    "contractType": "indirect",
    "createdAt": "2026-06-05T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-76",
    "name": "هند سامح البدري",
    "age": 61,
    "phone": "01278761242",
    "address": "الإسكندرية - العجمي",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "أكسا (AXA)",
    "contractType": "direct",
    "createdAt": "2026-07-21T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود",
    "clinicalSheet": {
      "diagnosis": "تمزق أربطة الكاحل وتأهيل التواء المزمن",
      "affectedArea": "الكاحل الخارجي والقدم",
      "modalities": [
        "كمادات باردة / ثلج (Cryotherapy)",
        "Ultrasound (موجات صوتية)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين الاتزان والتوازن (Balance & Proprioception)",
        "تمارين التقوية العضلية (Strengthening)"
      ],
      "exerciseDetails": "الوقوف على لوح الاتزان (Wobble board) لدقيقة، تقوية عضلات الشظية بالثيرا باند (Theraband)",
      "plannedSessions": "8 جلسات",
      "doctorNotes": "استعادة الثبات الحركي الكامل وزوال الألم أثناء المشي السريع",
      "lastUpdated": "2026-07-21 11:30 ص",
      "updatedBy": "د. مصطفى محمود"
    }
  },
  {
    "id": "demo-p-77",
    "name": "حسين أشرف عوض",
    "age": 38,
    "phone": "01013832199",
    "address": "الإسكندرية - محرم بك",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "نكست كير (NextCare)",
    "contractType": "indirect",
    "createdAt": "2026-08-08T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "خشونة متقدمة بمفصل الركبة (Grade 2 Knee OA)",
      "affectedArea": "الركبة اليمنى والمفصل الرضفي",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات ساخنة (Hot Pack)",
        "ليزر علاجي (Laser Therapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين المدى الحركي (Range of Motion)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين تقوية العضلة الرباعية (Quadriceps isometrics)، تمرين رفع الساق مستقيمة (SLR) 3×10",
      "plannedSessions": "10 جلسات (جلستان أسبوعياً)",
      "doctorNotes": "زيادة المدى الحركي للثني إلى 115 درجة وتراجع التورم",
      "lastUpdated": "2026-08-08 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-78",
    "name": "شريف زياد السيد",
    "age": 26,
    "phone": "01027069024",
    "address": "الإسكندرية - سموحة",
    "doctor": "د. سارة عادل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-09T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "متلازمة الكتف المتجمد (Frozen Shoulder)",
      "affectedArea": "مفصل الكتف الأيسر واللوح",
      "modalities": [
        "كمادات ساخنة (Hot Pack)",
        "TENS (تيار تنبيهي)",
        "موجات تصادمية (Shockwave)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "تمارين الاتزان والتوازن (Balance & Proprioception)"
      ],
      "exerciseDetails": "تمرين عصا البندول (Codman exercises)، تمارين التسلق على الحائط، إطالة الكبسولة الخلفية",
      "plannedSessions": "15 جلسة",
      "doctorNotes": "تحسن في الدوران الخارجي ورفع الذراع للأعلى بمقدار 25 درجة",
      "lastUpdated": "2026-06-09 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-79",
    "name": "مصطفى إسلام عبد العزيز",
    "age": 47,
    "phone": "01022916212",
    "address": "الإسكندرية - سابا باشا",
    "doctor": "د. سارة عادل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-03T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل"
  },
  {
    "id": "demo-p-80",
    "name": "مروة هيثم عثمان",
    "age": 35,
    "phone": "01593490816",
    "address": "الإسكندرية - الشاطبي",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-11T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "شلل الوجه النصفي (Bell's Palsy)",
      "affectedArea": "عضلات الوجه النصف الأيمن",
      "modalities": [
        "أشعة تحت الحمراء (Infrared)",
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)"
      ],
      "customModalities": "",
      "procedures": [
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين إغلاق العين والابتسام والنفخ أمام المرآة 4 مرات يومياً",
      "plannedSessions": "20 جلسة",
      "doctorNotes": "استعادة حركة زاوية الفم وإغلاق الجفن بنسبة 80%",
      "lastUpdated": "2026-06-11 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-81",
    "name": "منار تامر رمضان",
    "age": 64,
    "phone": "01540178681",
    "address": "الإسكندرية - محرم بك",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "ميتلايف (MetLife)",
    "contractType": "direct",
    "createdAt": "2026-06-13T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-82",
    "name": "مصطفى خالد عثمان",
    "age": 53,
    "phone": "01545387288",
    "address": "الإسكندرية - العجمي",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-17T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "شلل الوجه النصفي (Bell's Palsy)",
      "affectedArea": "عضلات الوجه النصف الأيمن",
      "modalities": [
        "أشعة تحت الحمراء (Infrared)",
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)"
      ],
      "customModalities": "",
      "procedures": [
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين إغلاق العين والابتسام والنفخ أمام المرآة 4 مرات يومياً",
      "plannedSessions": "20 جلسة",
      "doctorNotes": "استعادة حركة زاوية الفم وإغلاق الجفن بنسبة 80%",
      "lastUpdated": "2026-07-17 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-83",
    "name": "حسين عمرو زكي",
    "age": 61,
    "phone": "01169703912",
    "address": "الإسكندرية - السيوف",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "بوبا (Bupa)",
    "contractType": "direct",
    "createdAt": "2026-06-24T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-84",
    "name": "عادل حسين البدري",
    "age": 33,
    "phone": "01299232172",
    "address": "القاهرة - التجمع الخامس",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "مصر للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-07-25T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "انزلاق غضروفي قطني L4-L5 مع عرق النسا",
      "affectedArea": "الفقرات القطنية والطرف السفلي الأيمن",
      "modalities": [
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)",
        "الشد الفقري (Traction)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين عضلات الجذع (Core Stability)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمرين الجسر (Bridging) 3×10، إطالة العضلة الكمثرية 30 ثانية، تمارين ماكنزي لأسفل الظهر",
      "plannedSessions": "12 جلسة (3 جلسات أسبوعياً)",
      "doctorNotes": "تحسن ملحوظ في الحركة وانخفاض حدة الألم بنسبة 50%",
      "lastUpdated": "2026-07-25 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-85",
    "name": "سلمى مصطفى مراد",
    "age": 73,
    "phone": "01185056370",
    "address": "القاهرة - مصر الجديدة",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-24T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "خشونة متقدمة بمفصل الركبة (Grade 2 Knee OA)",
      "affectedArea": "الركبة اليمنى والمفصل الرضفي",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات ساخنة (Hot Pack)",
        "ليزر علاجي (Laser Therapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين المدى الحركي (Range of Motion)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين تقوية العضلة الرباعية (Quadriceps isometrics)، تمرين رفع الساق مستقيمة (SLR) 3×10",
      "plannedSessions": "10 جلسات (جلستان أسبوعياً)",
      "doctorNotes": "زيادة المدى الحركي للثني إلى 115 درجة وتراجع التورم",
      "lastUpdated": "2026-06-24 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-86",
    "name": "داليا مصطفى السيد",
    "age": 71,
    "phone": "01168444785",
    "address": "القاهرة - المعادي",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-18T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-87",
    "name": "شيرين علي الجندي",
    "age": 57,
    "phone": "01295351976",
    "address": "القاهرة - المعادي",
    "doctor": "د. مصطفى محمود",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-11T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-88",
    "name": "سارة أيمن سالم",
    "age": 61,
    "phone": "01171864847",
    "address": "الإسكندرية - الشاطبي",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "ميتلايف (MetLife)",
    "contractType": "direct",
    "createdAt": "2026-08-28T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-89",
    "name": "آية علي العطار",
    "age": 41,
    "phone": "01130051879",
    "address": "الإسكندرية - بحري",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "نكست كير (NextCare)",
    "contractType": "indirect",
    "createdAt": "2026-07-18T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-90",
    "name": "فاطمة وليد الجندي",
    "age": 46,
    "phone": "01069296377",
    "address": "الإسكندرية - زيزينيا",
    "doctor": "د. مصطفى محمود",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-12T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود",
    "clinicalSheet": {
      "diagnosis": "انزلاق غضروفي قطني L4-L5 مع عرق النسا",
      "affectedArea": "الفقرات القطنية والطرف السفلي الأيمن",
      "modalities": [
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)",
        "الشد الفقري (Traction)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين عضلات الجذع (Core Stability)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمرين الجسر (Bridging) 3×10، إطالة العضلة الكمثرية 30 ثانية، تمارين ماكنزي لأسفل الظهر",
      "plannedSessions": "12 جلسة (3 جلسات أسبوعياً)",
      "doctorNotes": "تحسن ملحوظ في الحركة وانخفاض حدة الألم بنسبة 50%",
      "lastUpdated": "2026-08-12 11:30 ص",
      "updatedBy": "د. مصطفى محمود"
    }
  },
  {
    "id": "demo-p-91",
    "name": "سلمى إسلام الشافعي",
    "age": 35,
    "phone": "01166990323",
    "address": "الإسكندرية - جليم",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "أكسا (AXA)",
    "contractType": "direct",
    "createdAt": "2026-06-28T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل"
  },
  {
    "id": "demo-p-92",
    "name": "حسن أيمن زكي",
    "age": 69,
    "phone": "01040390973",
    "address": "الإسكندرية - العجمي",
    "doctor": "د. مصطفى محمود",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-21T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-93",
    "name": "طارق كريم عثمان",
    "age": 33,
    "phone": "01180809146",
    "address": "الإسكندرية - الشاطبي",
    "doctor": "د. سارة عادل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-20T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "متلازمة الكتف المتجمد (Frozen Shoulder)",
      "affectedArea": "مفصل الكتف الأيسر واللوح",
      "modalities": [
        "كمادات ساخنة (Hot Pack)",
        "TENS (تيار تنبيهي)",
        "موجات تصادمية (Shockwave)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "تمارين الاتزان والتوازن (Balance & Proprioception)"
      ],
      "exerciseDetails": "تمرين عصا البندول (Codman exercises)، تمارين التسلق على الحائط، إطالة الكبسولة الخلفية",
      "plannedSessions": "15 جلسة",
      "doctorNotes": "تحسن في الدوران الخارجي ورفع الذراع للأعلى بمقدار 25 درجة",
      "lastUpdated": "2026-07-20 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-94",
    "name": "بسمة حازم زهران",
    "age": 32,
    "phone": "01531874926",
    "address": "الإسكندرية - العجمي",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "بوبا (Bupa)",
    "contractType": "direct",
    "createdAt": "2026-08-04T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "خشونة متقدمة بمفصل الركبة (Grade 2 Knee OA)",
      "affectedArea": "الركبة اليمنى والمفصل الرضفي",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات ساخنة (Hot Pack)",
        "ليزر علاجي (Laser Therapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين المدى الحركي (Range of Motion)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين تقوية العضلة الرباعية (Quadriceps isometrics)، تمرين رفع الساق مستقيمة (SLR) 3×10",
      "plannedSessions": "10 جلسات (جلستان أسبوعياً)",
      "doctorNotes": "زيادة المدى الحركي للثني إلى 115 درجة وتراجع التورم",
      "lastUpdated": "2026-08-04 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-95",
    "name": "طارق تامر جاد",
    "age": 65,
    "phone": "01098718942",
    "address": "الإسكندرية - محرم بك",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "createdAt": "2026-07-20T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-96",
    "name": "حازم ياسر زكي",
    "age": 67,
    "phone": "01588430264",
    "address": "الإسكندرية - محرم بك",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-25T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "متلازمة الكتف المتجمد (Frozen Shoulder)",
      "affectedArea": "مفصل الكتف الأيسر واللوح",
      "modalities": [
        "كمادات ساخنة (Hot Pack)",
        "TENS (تيار تنبيهي)",
        "موجات تصادمية (Shockwave)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "تمارين الاتزان والتوازن (Balance & Proprioception)"
      ],
      "exerciseDetails": "تمرين عصا البندول (Codman exercises)، تمارين التسلق على الحائط، إطالة الكبسولة الخلفية",
      "plannedSessions": "15 جلسة",
      "doctorNotes": "تحسن في الدوران الخارجي ورفع الذراع للأعلى بمقدار 25 درجة",
      "lastUpdated": "2026-07-25 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-97",
    "name": "وائل سامح عبد العزيز",
    "age": 42,
    "phone": "01572542393",
    "address": "الإسكندرية - سيدي جابر",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "بوبا (Bupa)",
    "contractType": "direct",
    "createdAt": "2026-08-18T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-98",
    "name": "هبة كريم زهران",
    "age": 43,
    "phone": "01244542869",
    "address": "الإسكندرية - سموحة",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-03T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "متلازمة النفق الرسغي والتهاب أوتار اليد",
      "affectedArea": "الرسغ واليد اليسرى",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات باردة / ثلج (Cryotherapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "exerciseDetails": "تمارين انزلاق العصب الأوسط (Nerve gliding exercises) وإطالة قابضات الرسغ",
      "plannedSessions": "6 جلسات",
      "doctorNotes": "اختفاء التنميل الليلي وتحسن قوة القبضة",
      "lastUpdated": "2026-06-03 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-99",
    "name": "بسمة أشرف غنيم",
    "age": 48,
    "phone": "01092211969",
    "address": "القاهرة - مدينة نصر",
    "doctor": "د. مصطفى محمود",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-04T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود",
    "clinicalSheet": {
      "diagnosis": "متلازمة النفق الرسغي والتهاب أوتار اليد",
      "affectedArea": "الرسغ واليد اليسرى",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات باردة / ثلج (Cryotherapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "exerciseDetails": "تمارين انزلاق العصب الأوسط (Nerve gliding exercises) وإطالة قابضات الرسغ",
      "plannedSessions": "6 جلسات",
      "doctorNotes": "اختفاء التنميل الليلي وتحسن قوة القبضة",
      "lastUpdated": "2026-07-04 11:30 ص",
      "updatedBy": "د. مصطفى محمود"
    }
  },
  {
    "id": "demo-p-100",
    "name": "زياد علي الشافعي",
    "age": 56,
    "phone": "01514938359",
    "address": "الإسكندرية - ميامي",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "أكسا (AXA)",
    "contractType": "direct",
    "createdAt": "2026-07-25T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "متلازمة الكتف المتجمد (Frozen Shoulder)",
      "affectedArea": "مفصل الكتف الأيسر واللوح",
      "modalities": [
        "كمادات ساخنة (Hot Pack)",
        "TENS (تيار تنبيهي)",
        "موجات تصادمية (Shockwave)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "تمارين الاتزان والتوازن (Balance & Proprioception)"
      ],
      "exerciseDetails": "تمرين عصا البندول (Codman exercises)، تمارين التسلق على الحائط، إطالة الكبسولة الخلفية",
      "plannedSessions": "15 جلسة",
      "doctorNotes": "تحسن في الدوران الخارجي ورفع الذراع للأعلى بمقدار 25 درجة",
      "lastUpdated": "2026-07-25 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-101",
    "name": "ياسر وائل قاسم",
    "age": 31,
    "phone": "01065653827",
    "address": "الإسكندرية - كليوباترا",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-18T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-102",
    "name": "محمود هشام البدري",
    "age": 71,
    "phone": "01569202219",
    "address": "الإسكندرية - ميامي",
    "doctor": "د. مصطفى محمود",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-25T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-103",
    "name": "دينا هيثم الجندي",
    "age": 52,
    "phone": "01137589331",
    "address": "الإسكندرية - محرم بك",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "بوبا (Bupa)",
    "contractType": "direct",
    "createdAt": "2026-06-01T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "تمزق أربطة الكاحل وتأهيل التواء المزمن",
      "affectedArea": "الكاحل الخارجي والقدم",
      "modalities": [
        "كمادات باردة / ثلج (Cryotherapy)",
        "Ultrasound (موجات صوتية)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين الاتزان والتوازن (Balance & Proprioception)",
        "تمارين التقوية العضلية (Strengthening)"
      ],
      "exerciseDetails": "الوقوف على لوح الاتزان (Wobble board) لدقيقة، تقوية عضلات الشظية بالثيرا باند (Theraband)",
      "plannedSessions": "8 جلسات",
      "doctorNotes": "استعادة الثبات الحركي الكامل وزوال الألم أثناء المشي السريع",
      "lastUpdated": "2026-06-01 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-104",
    "name": "شيرين محمود عبد العزيز",
    "age": 42,
    "phone": "01047104462",
    "address": "القاهرة - مدينة نصر",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-09T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "شلل الوجه النصفي (Bell's Palsy)",
      "affectedArea": "عضلات الوجه النصف الأيمن",
      "modalities": [
        "أشعة تحت الحمراء (Infrared)",
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)"
      ],
      "customModalities": "",
      "procedures": [
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين إغلاق العين والابتسام والنفخ أمام المرآة 4 مرات يومياً",
      "plannedSessions": "20 جلسة",
      "doctorNotes": "استعادة حركة زاوية الفم وإغلاق الجفن بنسبة 80%",
      "lastUpdated": "2026-06-09 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-105",
    "name": "هاجر محمود الصاوي",
    "age": 48,
    "phone": "01228479467",
    "address": "الإسكندرية - الإبراهيمية",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-09T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "متلازمة الكتف المتجمد (Frozen Shoulder)",
      "affectedArea": "مفصل الكتف الأيسر واللوح",
      "modalities": [
        "كمادات ساخنة (Hot Pack)",
        "TENS (تيار تنبيهي)",
        "موجات تصادمية (Shockwave)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "تمارين الاتزان والتوازن (Balance & Proprioception)"
      ],
      "exerciseDetails": "تمرين عصا البندول (Codman exercises)، تمارين التسلق على الحائط، إطالة الكبسولة الخلفية",
      "plannedSessions": "15 جلسة",
      "doctorNotes": "تحسن في الدوران الخارجي ورفع الذراع للأعلى بمقدار 25 درجة",
      "lastUpdated": "2026-08-09 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-106",
    "name": "سامح يوسف رضوان",
    "age": 31,
    "phone": "01158268763",
    "address": "الإسكندرية - زيزينيا",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "أليانز (Allianz)",
    "contractType": "direct",
    "createdAt": "2026-07-20T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-107",
    "name": "محمد عادل الجمال",
    "age": 73,
    "phone": "01147051126",
    "address": "الإسكندرية - زيزينيا",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "أليانز (Allianz)",
    "contractType": "direct",
    "createdAt": "2026-07-09T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود",
    "clinicalSheet": {
      "diagnosis": "متلازمة النفق الرسغي والتهاب أوتار اليد",
      "affectedArea": "الرسغ واليد اليسرى",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات باردة / ثلج (Cryotherapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "exerciseDetails": "تمارين انزلاق العصب الأوسط (Nerve gliding exercises) وإطالة قابضات الرسغ",
      "plannedSessions": "6 جلسات",
      "doctorNotes": "اختفاء التنميل الليلي وتحسن قوة القبضة",
      "lastUpdated": "2026-07-09 11:30 ص",
      "updatedBy": "د. مصطفى محمود"
    }
  },
  {
    "id": "demo-p-108",
    "name": "إيمان علي زهران",
    "age": 62,
    "phone": "01519642412",
    "address": "الإسكندرية - زيزينيا",
    "doctor": "د. سارة عادل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-05T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل"
  },
  {
    "id": "demo-p-109",
    "name": "سارة حسين زكي",
    "age": 24,
    "phone": "01197800506",
    "address": "الإسكندرية - رشدي",
    "doctor": "د. مصطفى محمود",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-11T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود",
    "clinicalSheet": {
      "diagnosis": "متلازمة الكتف المتجمد (Frozen Shoulder)",
      "affectedArea": "مفصل الكتف الأيسر واللوح",
      "modalities": [
        "كمادات ساخنة (Hot Pack)",
        "TENS (تيار تنبيهي)",
        "موجات تصادمية (Shockwave)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "تمارين الاتزان والتوازن (Balance & Proprioception)"
      ],
      "exerciseDetails": "تمرين عصا البندول (Codman exercises)، تمارين التسلق على الحائط، إطالة الكبسولة الخلفية",
      "plannedSessions": "15 جلسة",
      "doctorNotes": "تحسن في الدوران الخارجي ورفع الذراع للأعلى بمقدار 25 درجة",
      "lastUpdated": "2026-06-11 11:30 ص",
      "updatedBy": "د. مصطفى محمود"
    }
  },
  {
    "id": "demo-p-110",
    "name": "أميرة شريف البدري",
    "age": 62,
    "phone": "01282559699",
    "address": "القاهرة - التجمع الخامس",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-27T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-111",
    "name": "وليد سامح زكي",
    "age": 22,
    "phone": "01258731652",
    "address": "الإسكندرية - رشدي",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "مصر للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-07-26T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "انزلاق غضروفي قطني L4-L5 مع عرق النسا",
      "affectedArea": "الفقرات القطنية والطرف السفلي الأيمن",
      "modalities": [
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)",
        "الشد الفقري (Traction)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين عضلات الجذع (Core Stability)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمرين الجسر (Bridging) 3×10، إطالة العضلة الكمثرية 30 ثانية، تمارين ماكنزي لأسفل الظهر",
      "plannedSessions": "12 جلسة (3 جلسات أسبوعياً)",
      "doctorNotes": "تحسن ملحوظ في الحركة وانخفاض حدة الألم بنسبة 50%",
      "lastUpdated": "2026-07-26 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-112",
    "name": "معتز أيمن إبراهيم",
    "age": 46,
    "phone": "01517021049",
    "address": "القاهرة - التجمع الخامس",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "createdAt": "2026-06-13T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-113",
    "name": "يوسف علي زهران",
    "age": 26,
    "phone": "01166730253",
    "address": "الإسكندرية - سابا باشا",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-07T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-114",
    "name": "مريم هيثم عفيفي",
    "age": 49,
    "phone": "01233175402",
    "address": "الإسكندرية - السيوف",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "بوبا (Bupa)",
    "contractType": "direct",
    "createdAt": "2026-07-06T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-115",
    "name": "ندى كريم زكي",
    "age": 31,
    "phone": "01063222909",
    "address": "الإسكندرية - السيوف",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "createdAt": "2026-07-09T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل"
  },
  {
    "id": "demo-p-116",
    "name": "سلوى وائل سالم",
    "age": 54,
    "phone": "01036110201",
    "address": "الإسكندرية - كفر عبده",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-06T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-117",
    "name": "إيمان أشرف البدري",
    "age": 48,
    "phone": "01515760107",
    "address": "الإسكندرية - كفر عبده",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "أكسا (AXA)",
    "contractType": "direct",
    "createdAt": "2026-07-09T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "انزلاق غضروفي قطني L4-L5 مع عرق النسا",
      "affectedArea": "الفقرات القطنية والطرف السفلي الأيمن",
      "modalities": [
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)",
        "الشد الفقري (Traction)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين عضلات الجذع (Core Stability)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمرين الجسر (Bridging) 3×10، إطالة العضلة الكمثرية 30 ثانية، تمارين ماكنزي لأسفل الظهر",
      "plannedSessions": "12 جلسة (3 جلسات أسبوعياً)",
      "doctorNotes": "تحسن ملحوظ في الحركة وانخفاض حدة الألم بنسبة 50%",
      "lastUpdated": "2026-07-09 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-118",
    "name": "معتز شريف عيسى",
    "age": 46,
    "phone": "01266226916",
    "address": "الإسكندرية - لوران",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "بوبا (Bupa)",
    "contractType": "direct",
    "createdAt": "2026-08-04T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود",
    "clinicalSheet": {
      "diagnosis": "خشونة متقدمة بمفصل الركبة (Grade 2 Knee OA)",
      "affectedArea": "الركبة اليمنى والمفصل الرضفي",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات ساخنة (Hot Pack)",
        "ليزر علاجي (Laser Therapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين المدى الحركي (Range of Motion)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين تقوية العضلة الرباعية (Quadriceps isometrics)، تمرين رفع الساق مستقيمة (SLR) 3×10",
      "plannedSessions": "10 جلسات (جلستان أسبوعياً)",
      "doctorNotes": "زيادة المدى الحركي للثني إلى 115 درجة وتراجع التورم",
      "lastUpdated": "2026-08-04 11:30 ص",
      "updatedBy": "د. مصطفى محمود"
    }
  },
  {
    "id": "demo-p-119",
    "name": "هبة وائل جاد",
    "age": 33,
    "phone": "01292429979",
    "address": "الإسكندرية - كفر عبده",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "أليانز (Allianz)",
    "contractType": "direct",
    "createdAt": "2026-07-19T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-120",
    "name": "دعاء أيمن الشافعي",
    "age": 68,
    "phone": "01145687515",
    "address": "الإسكندرية - كفر عبده",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-13T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-121",
    "name": "هاجر تامر عبد العزيز",
    "age": 66,
    "phone": "01019329696",
    "address": "الإسكندرية - سيدي جابر",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "أكسا (AXA)",
    "contractType": "direct",
    "createdAt": "2026-07-21T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-122",
    "name": "أميرة محمد إبراهيم",
    "age": 56,
    "phone": "01069550658",
    "address": "الإسكندرية - سيدي جابر",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "أليانز (Allianz)",
    "contractType": "direct",
    "createdAt": "2026-06-16T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-123",
    "name": "مروة محمد رضوان",
    "age": 21,
    "phone": "01280498733",
    "address": "القاهرة - المعادي",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-17T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-124",
    "name": "تامر مصطفى الشافعي",
    "age": 25,
    "phone": "01263782093",
    "address": "الإسكندرية - سابا باشا",
    "doctor": "د. سارة عادل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-01T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "شلل الوجه النصفي (Bell's Palsy)",
      "affectedArea": "عضلات الوجه النصف الأيمن",
      "modalities": [
        "أشعة تحت الحمراء (Infrared)",
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)"
      ],
      "customModalities": "",
      "procedures": [
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين إغلاق العين والابتسام والنفخ أمام المرآة 4 مرات يومياً",
      "plannedSessions": "20 جلسة",
      "doctorNotes": "استعادة حركة زاوية الفم وإغلاق الجفن بنسبة 80%",
      "lastUpdated": "2026-06-01 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-125",
    "name": "مريم محمد عثمان",
    "age": 19,
    "phone": "01110462465",
    "address": "الإسكندرية - سموحة",
    "doctor": "د. سارة عادل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-07T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل"
  },
  {
    "id": "demo-p-126",
    "name": "سامح علي سالم",
    "age": 41,
    "phone": "01189400188",
    "address": "الإسكندرية - سابا باشا",
    "doctor": "د. مصطفى محمود",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-05T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود",
    "clinicalSheet": {
      "diagnosis": "شلل الوجه النصفي (Bell's Palsy)",
      "affectedArea": "عضلات الوجه النصف الأيمن",
      "modalities": [
        "أشعة تحت الحمراء (Infrared)",
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)"
      ],
      "customModalities": "",
      "procedures": [
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين إغلاق العين والابتسام والنفخ أمام المرآة 4 مرات يومياً",
      "plannedSessions": "20 جلسة",
      "doctorNotes": "استعادة حركة زاوية الفم وإغلاق الجفن بنسبة 80%",
      "lastUpdated": "2026-07-05 11:30 ص",
      "updatedBy": "د. مصطفى محمود"
    }
  },
  {
    "id": "demo-p-127",
    "name": "وائل عمر قاسم",
    "age": 49,
    "phone": "01055524540",
    "address": "الإسكندرية - زيزينيا",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "أليانز (Allianz)",
    "contractType": "direct",
    "createdAt": "2026-08-07T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-128",
    "name": "سلوى معتز رضوان",
    "age": 31,
    "phone": "01518242695",
    "address": "الإسكندرية - ميامي",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "نكست كير (NextCare)",
    "contractType": "indirect",
    "createdAt": "2026-07-17T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "شلل الوجه النصفي (Bell's Palsy)",
      "affectedArea": "عضلات الوجه النصف الأيمن",
      "modalities": [
        "أشعة تحت الحمراء (Infrared)",
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)"
      ],
      "customModalities": "",
      "procedures": [
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين إغلاق العين والابتسام والنفخ أمام المرآة 4 مرات يومياً",
      "plannedSessions": "20 جلسة",
      "doctorNotes": "استعادة حركة زاوية الفم وإغلاق الجفن بنسبة 80%",
      "lastUpdated": "2026-07-17 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-129",
    "name": "عمر ياسر منصور",
    "age": 37,
    "phone": "01513107436",
    "address": "الإسكندرية - السيوف",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "مصر للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-08-09T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-130",
    "name": "شيرين إبراهيم سالم",
    "age": 25,
    "phone": "01576886309",
    "address": "الإسكندرية - الشاطبي",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "مصر للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-07-19T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "شلل الوجه النصفي (Bell's Palsy)",
      "affectedArea": "عضلات الوجه النصف الأيمن",
      "modalities": [
        "أشعة تحت الحمراء (Infrared)",
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)"
      ],
      "customModalities": "",
      "procedures": [
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين إغلاق العين والابتسام والنفخ أمام المرآة 4 مرات يومياً",
      "plannedSessions": "20 جلسة",
      "doctorNotes": "استعادة حركة زاوية الفم وإغلاق الجفن بنسبة 80%",
      "lastUpdated": "2026-07-19 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-131",
    "name": "عمر حسن البنا",
    "age": 48,
    "phone": "01160473889",
    "address": "الإسكندرية - كفر عبده",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "المهندس للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-06-13T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "خشونة متقدمة بمفصل الركبة (Grade 2 Knee OA)",
      "affectedArea": "الركبة اليمنى والمفصل الرضفي",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات ساخنة (Hot Pack)",
        "ليزر علاجي (Laser Therapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين المدى الحركي (Range of Motion)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين تقوية العضلة الرباعية (Quadriceps isometrics)، تمرين رفع الساق مستقيمة (SLR) 3×10",
      "plannedSessions": "10 جلسات (جلستان أسبوعياً)",
      "doctorNotes": "زيادة المدى الحركي للثني إلى 115 درجة وتراجع التورم",
      "lastUpdated": "2026-06-13 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-132",
    "name": "وليد حازم عوض",
    "age": 19,
    "phone": "01151624168",
    "address": "الإسكندرية - ميامي",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-10T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "شلل الوجه النصفي (Bell's Palsy)",
      "affectedArea": "عضلات الوجه النصف الأيمن",
      "modalities": [
        "أشعة تحت الحمراء (Infrared)",
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)"
      ],
      "customModalities": "",
      "procedures": [
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين إغلاق العين والابتسام والنفخ أمام المرآة 4 مرات يومياً",
      "plannedSessions": "20 جلسة",
      "doctorNotes": "استعادة حركة زاوية الفم وإغلاق الجفن بنسبة 80%",
      "lastUpdated": "2026-06-10 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-133",
    "name": "مروة تامر إبراهيم",
    "age": 69,
    "phone": "01215929479",
    "address": "الإسكندرية - السيوف",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "نكست كير (NextCare)",
    "contractType": "indirect",
    "createdAt": "2026-08-18T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-134",
    "name": "أحمد حسين البنا",
    "age": 39,
    "phone": "01072083883",
    "address": "القاهرة - مدينة نصر",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "ميتلايف (MetLife)",
    "contractType": "direct",
    "createdAt": "2026-08-08T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-135",
    "name": "آية مصطفى مراد",
    "age": 66,
    "phone": "01536117720",
    "address": "الإسكندرية - زيزينيا",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "المهندس للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-06-23T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل"
  },
  {
    "id": "demo-p-136",
    "name": "هند حازم الحداد",
    "age": 59,
    "phone": "01033468329",
    "address": "الإسكندرية - جليم",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "مصر للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-06-13T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "انزلاق غضروفي قطني L4-L5 مع عرق النسا",
      "affectedArea": "الفقرات القطنية والطرف السفلي الأيمن",
      "modalities": [
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)",
        "الشد الفقري (Traction)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين عضلات الجذع (Core Stability)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمرين الجسر (Bridging) 3×10، إطالة العضلة الكمثرية 30 ثانية، تمارين ماكنزي لأسفل الظهر",
      "plannedSessions": "12 جلسة (3 جلسات أسبوعياً)",
      "doctorNotes": "تحسن ملحوظ في الحركة وانخفاض حدة الألم بنسبة 50%",
      "lastUpdated": "2026-06-13 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-137",
    "name": "منار عادل الحداد",
    "age": 67,
    "phone": "01590720397",
    "address": "الإسكندرية - محرم بك",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-05T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "تمزق أربطة الكاحل وتأهيل التواء المزمن",
      "affectedArea": "الكاحل الخارجي والقدم",
      "modalities": [
        "كمادات باردة / ثلج (Cryotherapy)",
        "Ultrasound (موجات صوتية)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين الاتزان والتوازن (Balance & Proprioception)",
        "تمارين التقوية العضلية (Strengthening)"
      ],
      "exerciseDetails": "الوقوف على لوح الاتزان (Wobble board) لدقيقة، تقوية عضلات الشظية بالثيرا باند (Theraband)",
      "plannedSessions": "8 جلسات",
      "doctorNotes": "استعادة الثبات الحركي الكامل وزوال الألم أثناء المشي السريع",
      "lastUpdated": "2026-07-05 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-138",
    "name": "حازم طارق حسام الدين",
    "age": 23,
    "phone": "01158575520",
    "address": "الإسكندرية - جليم",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "أكسا (AXA)",
    "contractType": "direct",
    "createdAt": "2026-06-14T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-139",
    "name": "محمود هيثم السيد",
    "age": 23,
    "phone": "01032689444",
    "address": "الإسكندرية - كفر عبده",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-12T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "شلل الوجه النصفي (Bell's Palsy)",
      "affectedArea": "عضلات الوجه النصف الأيمن",
      "modalities": [
        "أشعة تحت الحمراء (Infrared)",
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)"
      ],
      "customModalities": "",
      "procedures": [
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين إغلاق العين والابتسام والنفخ أمام المرآة 4 مرات يومياً",
      "plannedSessions": "20 جلسة",
      "doctorNotes": "استعادة حركة زاوية الفم وإغلاق الجفن بنسبة 80%",
      "lastUpdated": "2026-06-12 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-140",
    "name": "داليا حازم البدري",
    "age": 53,
    "phone": "01024139927",
    "address": "الإسكندرية - محرم بك",
    "doctor": "د. سارة عادل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-13T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "متلازمة النفق الرسغي والتهاب أوتار اليد",
      "affectedArea": "الرسغ واليد اليسرى",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات باردة / ثلج (Cryotherapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "exerciseDetails": "تمارين انزلاق العصب الأوسط (Nerve gliding exercises) وإطالة قابضات الرسغ",
      "plannedSessions": "6 جلسات",
      "doctorNotes": "اختفاء التنميل الليلي وتحسن قوة القبضة",
      "lastUpdated": "2026-06-13 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-141",
    "name": "عمر عمرو الجمال",
    "age": 19,
    "phone": "01124597160",
    "address": "الإسكندرية - العجمي",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-23T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "شلل الوجه النصفي (Bell's Palsy)",
      "affectedArea": "عضلات الوجه النصف الأيمن",
      "modalities": [
        "أشعة تحت الحمراء (Infrared)",
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)"
      ],
      "customModalities": "",
      "procedures": [
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين إغلاق العين والابتسام والنفخ أمام المرآة 4 مرات يومياً",
      "plannedSessions": "20 جلسة",
      "doctorNotes": "استعادة حركة زاوية الفم وإغلاق الجفن بنسبة 80%",
      "lastUpdated": "2026-06-23 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-142",
    "name": "أشرف إسلام زهران",
    "age": 71,
    "phone": "01078479872",
    "address": "الإسكندرية - رشدي",
    "doctor": "د. سارة عادل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-01T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "خشونة متقدمة بمفصل الركبة (Grade 2 Knee OA)",
      "affectedArea": "الركبة اليمنى والمفصل الرضفي",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات ساخنة (Hot Pack)",
        "ليزر علاجي (Laser Therapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين المدى الحركي (Range of Motion)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين تقوية العضلة الرباعية (Quadriceps isometrics)، تمرين رفع الساق مستقيمة (SLR) 3×10",
      "plannedSessions": "10 جلسات (جلستان أسبوعياً)",
      "doctorNotes": "زيادة المدى الحركي للثني إلى 115 درجة وتراجع التورم",
      "lastUpdated": "2026-08-01 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-143",
    "name": "مصطفى هيثم الشافعي",
    "age": 71,
    "phone": "01160324648",
    "address": "الإسكندرية - ميامي",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "أليانز (Allianz)",
    "contractType": "direct",
    "createdAt": "2026-06-06T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-144",
    "name": "وائل شريف توفيق",
    "age": 32,
    "phone": "01581447513",
    "address": "الإسكندرية - بحري",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-10T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "متلازمة الكتف المتجمد (Frozen Shoulder)",
      "affectedArea": "مفصل الكتف الأيسر واللوح",
      "modalities": [
        "كمادات ساخنة (Hot Pack)",
        "TENS (تيار تنبيهي)",
        "موجات تصادمية (Shockwave)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "تمارين الاتزان والتوازن (Balance & Proprioception)"
      ],
      "exerciseDetails": "تمرين عصا البندول (Codman exercises)، تمارين التسلق على الحائط، إطالة الكبسولة الخلفية",
      "plannedSessions": "15 جلسة",
      "doctorNotes": "تحسن في الدوران الخارجي ورفع الذراع للأعلى بمقدار 25 درجة",
      "lastUpdated": "2026-08-10 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-145",
    "name": "حسين ياسر توفيق",
    "age": 52,
    "phone": "01248503818",
    "address": "الإسكندرية - ميامي",
    "doctor": "د. سارة عادل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-15T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "انزلاق غضروفي قطني L4-L5 مع عرق النسا",
      "affectedArea": "الفقرات القطنية والطرف السفلي الأيمن",
      "modalities": [
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)",
        "الشد الفقري (Traction)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين عضلات الجذع (Core Stability)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمرين الجسر (Bridging) 3×10، إطالة العضلة الكمثرية 30 ثانية، تمارين ماكنزي لأسفل الظهر",
      "plannedSessions": "12 جلسة (3 جلسات أسبوعياً)",
      "doctorNotes": "تحسن ملحوظ في الحركة وانخفاض حدة الألم بنسبة 50%",
      "lastUpdated": "2026-07-15 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-146",
    "name": "عمرو أشرف موسى",
    "age": 38,
    "phone": "01294914852",
    "address": "الإسكندرية - بحري",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-09T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "خشونة متقدمة بمفصل الركبة (Grade 2 Knee OA)",
      "affectedArea": "الركبة اليمنى والمفصل الرضفي",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات ساخنة (Hot Pack)",
        "ليزر علاجي (Laser Therapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين المدى الحركي (Range of Motion)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين تقوية العضلة الرباعية (Quadriceps isometrics)، تمرين رفع الساق مستقيمة (SLR) 3×10",
      "plannedSessions": "10 جلسات (جلستان أسبوعياً)",
      "doctorNotes": "زيادة المدى الحركي للثني إلى 115 درجة وتراجع التورم",
      "lastUpdated": "2026-08-09 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-147",
    "name": "مصطفى هيثم النجار",
    "age": 61,
    "phone": "01255705413",
    "address": "الإسكندرية - سموحة",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "مصر للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-06-15T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل"
  },
  {
    "id": "demo-p-148",
    "name": "سلمى حسن الصاوي",
    "age": 33,
    "phone": "01178295787",
    "address": "الإسكندرية - بحري",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-28T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "انزلاق غضروفي قطني L4-L5 مع عرق النسا",
      "affectedArea": "الفقرات القطنية والطرف السفلي الأيمن",
      "modalities": [
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)",
        "الشد الفقري (Traction)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين عضلات الجذع (Core Stability)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمرين الجسر (Bridging) 3×10، إطالة العضلة الكمثرية 30 ثانية، تمارين ماكنزي لأسفل الظهر",
      "plannedSessions": "12 جلسة (3 جلسات أسبوعياً)",
      "doctorNotes": "تحسن ملحوظ في الحركة وانخفاض حدة الألم بنسبة 50%",
      "lastUpdated": "2026-07-28 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-149",
    "name": "زياد أشرف الحداد",
    "age": 37,
    "phone": "01248430671",
    "address": "الإسكندرية - السيوف",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "أكسا (AXA)",
    "contractType": "direct",
    "createdAt": "2026-07-08T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "متلازمة الكتف المتجمد (Frozen Shoulder)",
      "affectedArea": "مفصل الكتف الأيسر واللوح",
      "modalities": [
        "كمادات ساخنة (Hot Pack)",
        "TENS (تيار تنبيهي)",
        "موجات تصادمية (Shockwave)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "تمارين الاتزان والتوازن (Balance & Proprioception)"
      ],
      "exerciseDetails": "تمرين عصا البندول (Codman exercises)، تمارين التسلق على الحائط، إطالة الكبسولة الخلفية",
      "plannedSessions": "15 جلسة",
      "doctorNotes": "تحسن في الدوران الخارجي ورفع الذراع للأعلى بمقدار 25 درجة",
      "lastUpdated": "2026-07-08 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-150",
    "name": "رانيا ياسر سليمان",
    "age": 71,
    "phone": "01562208722",
    "address": "الإسكندرية - سموحة",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-17T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-151",
    "name": "سلمى هيثم عثمان",
    "age": 53,
    "phone": "01077050221",
    "address": "القاهرة - مدينة نصر",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-08T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "خشونة متقدمة بمفصل الركبة (Grade 2 Knee OA)",
      "affectedArea": "الركبة اليمنى والمفصل الرضفي",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات ساخنة (Hot Pack)",
        "ليزر علاجي (Laser Therapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين المدى الحركي (Range of Motion)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين تقوية العضلة الرباعية (Quadriceps isometrics)، تمرين رفع الساق مستقيمة (SLR) 3×10",
      "plannedSessions": "10 جلسات (جلستان أسبوعياً)",
      "doctorNotes": "زيادة المدى الحركي للثني إلى 115 درجة وتراجع التورم",
      "lastUpdated": "2026-08-08 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-152",
    "name": "حنان عادل قاسم",
    "age": 45,
    "phone": "01243323512",
    "address": "القاهرة - التجمع الخامس",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-06-01T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-153",
    "name": "وائل سامح البدري",
    "age": 61,
    "phone": "01013952661",
    "address": "الإسكندرية - الإبراهيمية",
    "doctor": "د. أحمد خليل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-01T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "انزلاق غضروفي قطني L4-L5 مع عرق النسا",
      "affectedArea": "الفقرات القطنية والطرف السفلي الأيمن",
      "modalities": [
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)",
        "الشد الفقري (Traction)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين عضلات الجذع (Core Stability)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمرين الجسر (Bridging) 3×10، إطالة العضلة الكمثرية 30 ثانية، تمارين ماكنزي لأسفل الظهر",
      "plannedSessions": "12 جلسة (3 جلسات أسبوعياً)",
      "doctorNotes": "تحسن ملحوظ في الحركة وانخفاض حدة الألم بنسبة 50%",
      "lastUpdated": "2026-07-01 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-154",
    "name": "وائل كريم خليل",
    "age": 58,
    "phone": "01251941310",
    "address": "الإسكندرية - الإبراهيمية",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "أكسا (AXA)",
    "contractType": "direct",
    "createdAt": "2026-07-23T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-155",
    "name": "حسن حازم المهدي",
    "age": 32,
    "phone": "01072680196",
    "address": "الإسكندرية - بحري",
    "doctor": "د. سارة عادل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-26T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "خشونة متقدمة بمفصل الركبة (Grade 2 Knee OA)",
      "affectedArea": "الركبة اليمنى والمفصل الرضفي",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات ساخنة (Hot Pack)",
        "ليزر علاجي (Laser Therapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين المدى الحركي (Range of Motion)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين تقوية العضلة الرباعية (Quadriceps isometrics)، تمرين رفع الساق مستقيمة (SLR) 3×10",
      "plannedSessions": "10 جلسات (جلستان أسبوعياً)",
      "doctorNotes": "زيادة المدى الحركي للثني إلى 115 درجة وتراجع التورم",
      "lastUpdated": "2026-07-26 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-156",
    "name": "علي كريم السيد",
    "age": 47,
    "phone": "01590015431",
    "address": "الإسكندرية - الإبراهيمية",
    "doctor": "د. مصطفى محمود",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-23T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-157",
    "name": "منى حسين عثمان",
    "age": 47,
    "phone": "01568950486",
    "address": "الإسكندرية - ميامي",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "نكست كير (NextCare)",
    "contractType": "indirect",
    "createdAt": "2026-08-18T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل"
  },
  {
    "id": "demo-p-158",
    "name": "خالد عمرو الشافعي",
    "age": 27,
    "phone": "01563166708",
    "address": "القاهرة - المعادي",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "أليانز (Allianz)",
    "contractType": "direct",
    "createdAt": "2026-07-06T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-159",
    "name": "منار أيمن البنا",
    "age": 30,
    "phone": "01275610752",
    "address": "الإسكندرية - لوران",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "أليانز (Allianz)",
    "contractType": "direct",
    "createdAt": "2026-08-21T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل"
  },
  {
    "id": "demo-p-160",
    "name": "داليا عمرو النجار",
    "age": 50,
    "phone": "01232963858",
    "address": "الإسكندرية - محرم بك",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "createdAt": "2026-08-19T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "انزلاق غضروفي قطني L4-L5 مع عرق النسا",
      "affectedArea": "الفقرات القطنية والطرف السفلي الأيمن",
      "modalities": [
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)",
        "الشد الفقري (Traction)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين عضلات الجذع (Core Stability)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمرين الجسر (Bridging) 3×10، إطالة العضلة الكمثرية 30 ثانية، تمارين ماكنزي لأسفل الظهر",
      "plannedSessions": "12 جلسة (3 جلسات أسبوعياً)",
      "doctorNotes": "تحسن ملحوظ في الحركة وانخفاض حدة الألم بنسبة 50%",
      "lastUpdated": "2026-08-19 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-161",
    "name": "مصطفى خالد رمضان",
    "age": 39,
    "phone": "01167698641",
    "address": "الإسكندرية - سيدي جابر",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "بوبا (Bupa)",
    "contractType": "direct",
    "createdAt": "2026-06-11T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-162",
    "name": "إيمان يوسف رمضان",
    "age": 45,
    "phone": "01086867385",
    "address": "الإسكندرية - الشاطبي",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "بوبا (Bupa)",
    "contractType": "direct",
    "createdAt": "2026-08-11T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل"
  },
  {
    "id": "demo-p-163",
    "name": "مروة إسلام المهدي",
    "age": 64,
    "phone": "01225467899",
    "address": "الإسكندرية - كليوباترا",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "نكست كير (NextCare)",
    "contractType": "indirect",
    "createdAt": "2026-06-07T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود",
    "clinicalSheet": {
      "diagnosis": "متلازمة الكتف المتجمد (Frozen Shoulder)",
      "affectedArea": "مفصل الكتف الأيسر واللوح",
      "modalities": [
        "كمادات ساخنة (Hot Pack)",
        "TENS (تيار تنبيهي)",
        "موجات تصادمية (Shockwave)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "تمارين الاتزان والتوازن (Balance & Proprioception)"
      ],
      "exerciseDetails": "تمرين عصا البندول (Codman exercises)، تمارين التسلق على الحائط، إطالة الكبسولة الخلفية",
      "plannedSessions": "15 جلسة",
      "doctorNotes": "تحسن في الدوران الخارجي ورفع الذراع للأعلى بمقدار 25 درجة",
      "lastUpdated": "2026-06-07 11:30 ص",
      "updatedBy": "د. مصطفى محمود"
    }
  },
  {
    "id": "demo-p-164",
    "name": "دينا أيمن إبراهيم",
    "age": 54,
    "phone": "01172312590",
    "address": "القاهرة - المعادي",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "المهندس للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-06-03T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود",
    "clinicalSheet": {
      "diagnosis": "انزلاق غضروفي قطني L4-L5 مع عرق النسا",
      "affectedArea": "الفقرات القطنية والطرف السفلي الأيمن",
      "modalities": [
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)",
        "الشد الفقري (Traction)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين عضلات الجذع (Core Stability)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمرين الجسر (Bridging) 3×10، إطالة العضلة الكمثرية 30 ثانية، تمارين ماكنزي لأسفل الظهر",
      "plannedSessions": "12 جلسة (3 جلسات أسبوعياً)",
      "doctorNotes": "تحسن ملحوظ في الحركة وانخفاض حدة الألم بنسبة 50%",
      "lastUpdated": "2026-06-03 11:30 ص",
      "updatedBy": "د. مصطفى محمود"
    }
  },
  {
    "id": "demo-p-165",
    "name": "زياد ياسر سالم",
    "age": 64,
    "phone": "01245298530",
    "address": "الإسكندرية - كليوباترا",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-04T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-166",
    "name": "وفاء إبراهيم سليمان",
    "age": 67,
    "phone": "01016667344",
    "address": "الإسكندرية - الإبراهيمية",
    "doctor": "د. سارة عادل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-28T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "متلازمة النفق الرسغي والتهاب أوتار اليد",
      "affectedArea": "الرسغ واليد اليسرى",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات باردة / ثلج (Cryotherapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "exerciseDetails": "تمارين انزلاق العصب الأوسط (Nerve gliding exercises) وإطالة قابضات الرسغ",
      "plannedSessions": "6 جلسات",
      "doctorNotes": "اختفاء التنميل الليلي وتحسن قوة القبضة",
      "lastUpdated": "2026-08-28 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-167",
    "name": "ياسر عمرو الشافعي",
    "age": 54,
    "phone": "01048042962",
    "address": "القاهرة - مصر الجديدة",
    "doctor": "د. سارة عادل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-03T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "تمزق أربطة الكاحل وتأهيل التواء المزمن",
      "affectedArea": "الكاحل الخارجي والقدم",
      "modalities": [
        "كمادات باردة / ثلج (Cryotherapy)",
        "Ultrasound (موجات صوتية)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين الاتزان والتوازن (Balance & Proprioception)",
        "تمارين التقوية العضلية (Strengthening)"
      ],
      "exerciseDetails": "الوقوف على لوح الاتزان (Wobble board) لدقيقة، تقوية عضلات الشظية بالثيرا باند (Theraband)",
      "plannedSessions": "8 جلسات",
      "doctorNotes": "استعادة الثبات الحركي الكامل وزوال الألم أثناء المشي السريع",
      "lastUpdated": "2026-07-03 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-168",
    "name": "خالد إسلام توفيق",
    "age": 60,
    "phone": "01585994901",
    "address": "الإسكندرية - محرم بك",
    "doctor": "د. مصطفى محمود",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-11T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود",
    "clinicalSheet": {
      "diagnosis": "تمزق أربطة الكاحل وتأهيل التواء المزمن",
      "affectedArea": "الكاحل الخارجي والقدم",
      "modalities": [
        "كمادات باردة / ثلج (Cryotherapy)",
        "Ultrasound (موجات صوتية)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين الاتزان والتوازن (Balance & Proprioception)",
        "تمارين التقوية العضلية (Strengthening)"
      ],
      "exerciseDetails": "الوقوف على لوح الاتزان (Wobble board) لدقيقة، تقوية عضلات الشظية بالثيرا باند (Theraband)",
      "plannedSessions": "8 جلسات",
      "doctorNotes": "استعادة الثبات الحركي الكامل وزوال الألم أثناء المشي السريع",
      "lastUpdated": "2026-07-11 11:30 ص",
      "updatedBy": "د. مصطفى محمود"
    }
  },
  {
    "id": "demo-p-169",
    "name": "سلوى هيثم عيسى",
    "age": 19,
    "phone": "01288144268",
    "address": "الإسكندرية - كفر عبده",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "مصر للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-08-12T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-170",
    "name": "هيثم وائل سليمان",
    "age": 67,
    "phone": "01234328805",
    "address": "القاهرة - مدينة نصر",
    "doctor": "د. سارة عادل",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-25T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "شلل الوجه النصفي (Bell's Palsy)",
      "affectedArea": "عضلات الوجه النصف الأيمن",
      "modalities": [
        "أشعة تحت الحمراء (Infrared)",
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)"
      ],
      "customModalities": "",
      "procedures": [
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين إغلاق العين والابتسام والنفخ أمام المرآة 4 مرات يومياً",
      "plannedSessions": "20 جلسة",
      "doctorNotes": "استعادة حركة زاوية الفم وإغلاق الجفن بنسبة 80%",
      "lastUpdated": "2026-07-25 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-171",
    "name": "كريم تامر الشناوي",
    "age": 35,
    "phone": "01096569989",
    "address": "الإسكندرية - العجمي",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-12T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-172",
    "name": "مها تامر رمضان",
    "age": 29,
    "phone": "01597046473",
    "address": "الإسكندرية - السيوف",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "ميتلايف (MetLife)",
    "contractType": "direct",
    "createdAt": "2026-06-08T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود",
    "clinicalSheet": {
      "diagnosis": "انزلاق غضروفي قطني L4-L5 مع عرق النسا",
      "affectedArea": "الفقرات القطنية والطرف السفلي الأيمن",
      "modalities": [
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)",
        "الشد الفقري (Traction)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين عضلات الجذع (Core Stability)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمرين الجسر (Bridging) 3×10، إطالة العضلة الكمثرية 30 ثانية، تمارين ماكنزي لأسفل الظهر",
      "plannedSessions": "12 جلسة (3 جلسات أسبوعياً)",
      "doctorNotes": "تحسن ملحوظ في الحركة وانخفاض حدة الألم بنسبة 50%",
      "lastUpdated": "2026-06-08 11:30 ص",
      "updatedBy": "د. مصطفى محمود"
    }
  },
  {
    "id": "demo-p-173",
    "name": "إبراهيم تامر إبراهيم",
    "age": 50,
    "phone": "01271769057",
    "address": "الإسكندرية - بحري",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-08-22T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "تمزق أربطة الكاحل وتأهيل التواء المزمن",
      "affectedArea": "الكاحل الخارجي والقدم",
      "modalities": [
        "كمادات باردة / ثلج (Cryotherapy)",
        "Ultrasound (موجات صوتية)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين الاتزان والتوازن (Balance & Proprioception)",
        "تمارين التقوية العضلية (Strengthening)"
      ],
      "exerciseDetails": "الوقوف على لوح الاتزان (Wobble board) لدقيقة، تقوية عضلات الشظية بالثيرا باند (Theraband)",
      "plannedSessions": "8 جلسات",
      "doctorNotes": "استعادة الثبات الحركي الكامل وزوال الألم أثناء المشي السريع",
      "lastUpdated": "2026-08-22 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-174",
    "name": "محمود عادل عبد العزيز",
    "age": 38,
    "phone": "01220072959",
    "address": "القاهرة - المعادي",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "ميتلايف (MetLife)",
    "contractType": "direct",
    "createdAt": "2026-08-21T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "تمزق أربطة الكاحل وتأهيل التواء المزمن",
      "affectedArea": "الكاحل الخارجي والقدم",
      "modalities": [
        "كمادات باردة / ثلج (Cryotherapy)",
        "Ultrasound (موجات صوتية)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين الاتزان والتوازن (Balance & Proprioception)",
        "تمارين التقوية العضلية (Strengthening)"
      ],
      "exerciseDetails": "الوقوف على لوح الاتزان (Wobble board) لدقيقة، تقوية عضلات الشظية بالثيرا باند (Theraband)",
      "plannedSessions": "8 جلسات",
      "doctorNotes": "استعادة الثبات الحركي الكامل وزوال الألم أثناء المشي السريع",
      "lastUpdated": "2026-08-21 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-175",
    "name": "طارق كريم الصاوي",
    "age": 25,
    "phone": "01235288573",
    "address": "القاهرة - مصر الجديدة",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "المهندس للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-06-25T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "متلازمة النفق الرسغي والتهاب أوتار اليد",
      "affectedArea": "الرسغ واليد اليسرى",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات باردة / ثلج (Cryotherapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "exerciseDetails": "تمارين انزلاق العصب الأوسط (Nerve gliding exercises) وإطالة قابضات الرسغ",
      "plannedSessions": "6 جلسات",
      "doctorNotes": "اختفاء التنميل الليلي وتحسن قوة القبضة",
      "lastUpdated": "2026-06-25 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-176",
    "name": "منى يوسف توفيق",
    "age": 47,
    "phone": "01076566778",
    "address": "الإسكندرية - ميامي",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "المهندس للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-06-10T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "خشونة متقدمة بمفصل الركبة (Grade 2 Knee OA)",
      "affectedArea": "الركبة اليمنى والمفصل الرضفي",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات ساخنة (Hot Pack)",
        "ليزر علاجي (Laser Therapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين المدى الحركي (Range of Motion)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين تقوية العضلة الرباعية (Quadriceps isometrics)، تمرين رفع الساق مستقيمة (SLR) 3×10",
      "plannedSessions": "10 جلسات (جلستان أسبوعياً)",
      "doctorNotes": "زيادة المدى الحركي للثني إلى 115 درجة وتراجع التورم",
      "lastUpdated": "2026-06-10 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-177",
    "name": "معتز زياد عبد العزيز",
    "age": 30,
    "phone": "01283539296",
    "address": "الإسكندرية - محرم بك",
    "doctor": "د. أحمد خليل",
    "billing": "insurance",
    "insuranceCompany": "مصر للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-08-27T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. أحمد خليل",
    "clinicalSheet": {
      "diagnosis": "خشونة متقدمة بمفصل الركبة (Grade 2 Knee OA)",
      "affectedArea": "الركبة اليمنى والمفصل الرضفي",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات ساخنة (Hot Pack)",
        "ليزر علاجي (Laser Therapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين المدى الحركي (Range of Motion)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين تقوية العضلة الرباعية (Quadriceps isometrics)، تمرين رفع الساق مستقيمة (SLR) 3×10",
      "plannedSessions": "10 جلسات (جلستان أسبوعياً)",
      "doctorNotes": "زيادة المدى الحركي للثني إلى 115 درجة وتراجع التورم",
      "lastUpdated": "2026-08-27 11:30 ص",
      "updatedBy": "د. أحمد خليل"
    }
  },
  {
    "id": "demo-p-178",
    "name": "معتز إسلام الجندي",
    "age": 67,
    "phone": "01581755029",
    "address": "الإسكندرية - لوران",
    "doctor": "د. كريم إبراهيم",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-17T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "شلل الوجه النصفي (Bell's Palsy)",
      "affectedArea": "عضلات الوجه النصف الأيمن",
      "modalities": [
        "أشعة تحت الحمراء (Infrared)",
        "TENS (تيار تنبيهي)",
        "كمادات ساخنة (Hot Pack)"
      ],
      "customModalities": "",
      "procedures": [
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين إغلاق العين والابتسام والنفخ أمام المرآة 4 مرات يومياً",
      "plannedSessions": "20 جلسة",
      "doctorNotes": "استعادة حركة زاوية الفم وإغلاق الجفن بنسبة 80%",
      "lastUpdated": "2026-07-17 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  },
  {
    "id": "demo-p-179",
    "name": "مصطفى أيمن البنا",
    "age": 50,
    "phone": "01582612937",
    "address": "الإسكندرية - العجمي",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "المهندس للتأمين",
    "contractType": "indirect",
    "createdAt": "2026-06-14T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل"
  },
  {
    "id": "demo-p-180",
    "name": "منى حسين عفيفي",
    "age": 31,
    "phone": "01575540097",
    "address": "الإسكندرية - سيدي جابر",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "ميتلايف (MetLife)",
    "contractType": "direct",
    "createdAt": "2026-07-03T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-181",
    "name": "إيمان معتز عفيفي",
    "age": 48,
    "phone": "01075648388",
    "address": "الإسكندرية - بحري",
    "doctor": "د. سارة عادل",
    "billing": "insurance",
    "insuranceCompany": "ميتلايف (MetLife)",
    "contractType": "direct",
    "createdAt": "2026-08-14T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. سارة عادل",
    "clinicalSheet": {
      "diagnosis": "خشونة متقدمة بمفصل الركبة (Grade 2 Knee OA)",
      "affectedArea": "الركبة اليمنى والمفصل الرضفي",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات ساخنة (Hot Pack)",
        "ليزر علاجي (Laser Therapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "تدليك علاجي عميق (Deep Tissue Massage)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين التقوية العضلية (Strengthening)",
        "تمارين المدى الحركي (Range of Motion)",
        "برنامج التمارين المنزلية (Home Exercise Program)"
      ],
      "exerciseDetails": "تمارين تقوية العضلة الرباعية (Quadriceps isometrics)، تمرين رفع الساق مستقيمة (SLR) 3×10",
      "plannedSessions": "10 جلسات (جلستان أسبوعياً)",
      "doctorNotes": "زيادة المدى الحركي للثني إلى 115 درجة وتراجع التورم",
      "lastUpdated": "2026-08-14 11:30 ص",
      "updatedBy": "د. سارة عادل"
    }
  },
  {
    "id": "demo-p-182",
    "name": "سارة ماجد العطار",
    "age": 47,
    "phone": "01128497433",
    "address": "القاهرة - التجمع الخامس",
    "doctor": "د. مصطفى محمود",
    "billing": "cash",
    "insuranceCompany": "",
    "contractType": "",
    "createdAt": "2026-07-11T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود",
    "clinicalSheet": {
      "diagnosis": "متلازمة الكتف المتجمد (Frozen Shoulder)",
      "affectedArea": "مفصل الكتف الأيسر واللوح",
      "modalities": [
        "كمادات ساخنة (Hot Pack)",
        "TENS (تيار تنبيهي)",
        "موجات تصادمية (Shockwave)"
      ],
      "customModalities": "",
      "procedures": [
        "تحريك المفاصل (Joint Mobilization)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "تمارين الاتزان والتوازن (Balance & Proprioception)"
      ],
      "exerciseDetails": "تمرين عصا البندول (Codman exercises)، تمارين التسلق على الحائط، إطالة الكبسولة الخلفية",
      "plannedSessions": "15 جلسة",
      "doctorNotes": "تحسن في الدوران الخارجي ورفع الذراع للأعلى بمقدار 25 درجة",
      "lastUpdated": "2026-07-11 11:30 ص",
      "updatedBy": "د. مصطفى محمود"
    }
  },
  {
    "id": "demo-p-183",
    "name": "سامح ياسر موسى",
    "age": 48,
    "phone": "01250537092",
    "address": "الإسكندرية - العجمي",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "أكسا (AXA)",
    "contractType": "direct",
    "createdAt": "2026-07-04T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم"
  },
  {
    "id": "demo-p-184",
    "name": "زياد أشرف الشناوي",
    "age": 66,
    "phone": "01128868607",
    "address": "الإسكندرية - بحري",
    "doctor": "د. مصطفى محمود",
    "billing": "insurance",
    "insuranceCompany": "بوبا (Bupa)",
    "contractType": "direct",
    "createdAt": "2026-06-11T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. مصطفى محمود"
  },
  {
    "id": "demo-p-185",
    "name": "هبة حازم البنا",
    "age": 26,
    "phone": "01287182438",
    "address": "الإسكندرية - رشدي",
    "doctor": "د. كريم إبراهيم",
    "billing": "insurance",
    "insuranceCompany": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "createdAt": "2026-07-07T09:30:00",
    "createdBy": "أ. منار خالد (استقبال)",
    "lastUpdatedBy": "د. كريم إبراهيم",
    "clinicalSheet": {
      "diagnosis": "متلازمة النفق الرسغي والتهاب أوتار اليد",
      "affectedArea": "الرسغ واليد اليسرى",
      "modalities": [
        "Ultrasound (موجات صوتية)",
        "كمادات باردة / ثلج (Cryotherapy)"
      ],
      "customModalities": "",
      "procedures": [
        "تحرير اللفافة العضلية (Myofascial Release)",
        "الأشرطة اللاصقة الحركية (Kinesio Taping)"
      ],
      "customProcedures": "",
      "exercises": [
        "تمارين المدى الحركي (Range of Motion)",
        "إطالات عضلية (Muscle Stretching)"
      ],
      "exerciseDetails": "تمارين انزلاق العصب الأوسط (Nerve gliding exercises) وإطالة قابضات الرسغ",
      "plannedSessions": "6 جلسات",
      "doctorNotes": "اختفاء التنميل الليلي وتحسن قوة القبضة",
      "lastUpdated": "2026-07-07 11:30 ص",
      "updatedBy": "د. كريم إبراهيم"
    }
  }
];

export const DEMO_SESSIONS = [

  {
    "id": "demo-sess-today-1",
    "date": "2026-09-03",
    "patientId": "demo-p-1",
    "patientName": "أحمد محمود العطار",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تحسن كبير في المدى الحركي وانخفاض الألم",
    "recordedAt": "09:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-today-2",
    "date": "2026-09-03",
    "patientId": "demo-p-2",
    "patientName": "سارة إبراهيم الشناوي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "جلسة ليزر وموجات صوتية للكتف",
    "recordedAt": "10:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-today-3",
    "date": "2026-09-03",
    "patientId": "demo-p-3",
    "patientName": "كريم حسن الصاوي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "علاج يدوي وإطالات عضلية",
    "recordedAt": "11:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-today-4",
    "date": "2026-09-03",
    "patientId": "demo-p-4",
    "patientName": "منار علي النجار",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "برنامج تمارين تقوية عضلات الفخذ",
    "recordedAt": "11:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-today-5",
    "date": "2026-09-03",
    "patientId": "demo-p-5",
    "patientName": "محمد عثمان البنا",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "أسفل الظهر / الفقرات القطنية"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "شد فقري وكمادات ساخنة",
    "recordedAt": "12:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-today-6",
    "date": "2026-09-03",
    "patientId": "demo-p-6",
    "patientName": "ياسمين خالد زهران",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "اتزان وتأهيل التواء الكاحل",
    "recordedAt": "01:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-today-7",
    "date": "2026-09-03",
    "patientId": "demo-p-7",
    "patientName": "طارق يوسف الشافعي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "جلسة كهرومغناطيسية وتمارين علاجية",
    "recordedAt": "02:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-today-8",
    "date": "2026-09-03",
    "patientId": "demo-p-8",
    "patientName": "دينا عمرو رضوان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "تأهيل الكتف المتجمد والموجات التصادمية",
    "recordedAt": "02:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  }
,
  {
    "id": "demo-sess-1",
    "date": "2026-07-01",
    "patientId": "demo-p-124",
    "patientName": "تامر مصطفى الشافعي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة",
      "مفصل الكوع / اليد",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "11:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-2",
    "date": "2026-07-01",
    "patientId": "demo-p-35",
    "patientName": "سلوى حسين رمضان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "8:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-3",
    "date": "2026-07-01",
    "patientId": "demo-p-65",
    "patientName": "مريم هيثم الشافعي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "3:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-4",
    "date": "2026-07-01",
    "patientId": "demo-p-134",
    "patientName": "أحمد حسين البنا",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة",
      "الفقرات القطنية / أسفل الظهر",
      "الكتف"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "",
    "recordedAt": "12:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-5",
    "date": "2026-07-01",
    "patientId": "demo-p-24",
    "patientName": "وفاء معتز البنا",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الكتف",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "1:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-6",
    "date": "2026-07-01",
    "patientId": "demo-p-84",
    "patientName": "عادل حسين البدري",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 70,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "10:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-7",
    "date": "2026-07-01",
    "patientId": "demo-p-178",
    "patientName": "معتز إسلام الجندي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "3:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-8",
    "date": "2026-07-01",
    "patientId": "demo-p-21",
    "patientName": "وفاء محمد الجمال",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "",
    "recordedAt": "3:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-9",
    "date": "2026-07-01",
    "patientId": "demo-p-61",
    "patientName": "هشام معتز المهدي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكاحل والقدم",
      "الفقرات القطنية / أسفل الظهر",
      "الركبة"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "10:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-10",
    "date": "2026-07-01",
    "patientId": "demo-p-38",
    "patientName": "حازم ياسر الشافعي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "3:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-11",
    "date": "2026-07-02",
    "patientId": "demo-p-24",
    "patientName": "وفاء معتز البنا",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "4:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-12",
    "date": "2026-07-02",
    "patientId": "demo-p-99",
    "patientName": "بسمة أشرف غنيم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "11:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-13",
    "date": "2026-07-02",
    "patientId": "demo-p-69",
    "patientName": "وائل كريم الحداد",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "11:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-14",
    "date": "2026-07-02",
    "patientId": "demo-p-184",
    "patientName": "زياد أشرف الشناوي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "5:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-15",
    "date": "2026-07-02",
    "patientId": "demo-p-61",
    "patientName": "هشام معتز المهدي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "6:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-16",
    "date": "2026-07-02",
    "patientId": "demo-p-30",
    "patientName": "إسلام إبراهيم السيد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "2:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-17",
    "date": "2026-07-02",
    "patientId": "demo-p-80",
    "patientName": "مروة هيثم عثمان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "4:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-18",
    "date": "2026-07-02",
    "patientId": "demo-p-170",
    "patientName": "هيثم وائل سليمان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكاحل والقدم",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "",
    "recordedAt": "6:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-19",
    "date": "2026-07-02",
    "patientId": "demo-p-43",
    "patientName": "مها هشام الحداد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم",
      "الفقرات القطنية / أسفل الظهر",
      "الرقبة"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "8:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-20",
    "date": "2026-07-02",
    "patientId": "demo-p-24",
    "patientName": "وفاء معتز البنا",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "7:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-21",
    "date": "2026-07-02",
    "patientId": "demo-p-94",
    "patientName": "بسمة حازم زهران",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكاحل والقدم",
      "الفقرات القطنية / أسفل الظهر",
      "الكتف"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "5:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-22",
    "date": "2026-07-03",
    "patientId": "demo-p-30",
    "patientName": "إسلام إبراهيم السيد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 70,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "10:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-23",
    "date": "2026-07-03",
    "patientId": "demo-p-62",
    "patientName": "زياد تامر جاد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "4:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-24",
    "date": "2026-07-03",
    "patientId": "demo-p-117",
    "patientName": "إيمان أشرف البدري",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "",
    "recordedAt": "9:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-25",
    "date": "2026-07-04",
    "patientId": "demo-p-41",
    "patientName": "أيمن وائل الجمال",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "1:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-26",
    "date": "2026-07-04",
    "patientId": "demo-p-127",
    "patientName": "وائل عمر قاسم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "9:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-27",
    "date": "2026-07-04",
    "patientId": "demo-p-31",
    "patientName": "بسمة خالد مراد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "3:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-28",
    "date": "2026-07-04",
    "patientId": "demo-p-176",
    "patientName": "منى يوسف توفيق",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "11:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-29",
    "date": "2026-07-04",
    "patientId": "demo-p-166",
    "patientName": "وفاء إبراهيم سليمان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "7:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-30",
    "date": "2026-07-04",
    "patientId": "demo-p-6",
    "patientName": "إبراهيم حازم البنا",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "",
    "recordedAt": "5:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-31",
    "date": "2026-07-04",
    "patientId": "demo-p-148",
    "patientName": "سلمى حسن الصاوي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "6:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-32",
    "date": "2026-07-04",
    "patientId": "demo-p-122",
    "patientName": "أميرة محمد إبراهيم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "2:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-33",
    "date": "2026-07-04",
    "patientId": "demo-p-100",
    "patientName": "زياد علي الشافعي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "3:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-34",
    "date": "2026-07-04",
    "patientId": "demo-p-115",
    "patientName": "ندى كريم زكي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة",
      "الرقبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "6:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-35",
    "date": "2026-07-04",
    "patientId": "demo-p-117",
    "patientName": "إيمان أشرف البدري",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "12:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-36",
    "date": "2026-07-04",
    "patientId": "demo-p-181",
    "patientName": "إيمان معتز عفيفي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة",
      "الفقرات القطنية / أسفل الظهر",
      "الركبة"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "7:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-37",
    "date": "2026-07-05",
    "patientId": "demo-p-69",
    "patientName": "وائل كريم الحداد",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "4:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-38",
    "date": "2026-07-05",
    "patientId": "demo-p-56",
    "patientName": "أحمد حسين الصاوي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "3:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-39",
    "date": "2026-07-05",
    "patientId": "demo-p-4",
    "patientName": "شيرين معتز موسى",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "",
    "recordedAt": "10:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-40",
    "date": "2026-07-05",
    "patientId": "demo-p-61",
    "patientName": "هشام معتز المهدي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "2:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-41",
    "date": "2026-07-05",
    "patientId": "demo-p-171",
    "patientName": "كريم تامر الشناوي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "12:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-42",
    "date": "2026-07-05",
    "patientId": "demo-p-107",
    "patientName": "محمد عادل الجمال",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "8:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-43",
    "date": "2026-07-05",
    "patientId": "demo-p-178",
    "patientName": "معتز إسلام الجندي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الفقرات القطنية / أسفل الظهر",
      "الرقبة"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "3:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-44",
    "date": "2026-07-05",
    "patientId": "demo-p-23",
    "patientName": "زياد حازم الجمال",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الرقبة",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "2:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-45",
    "date": "2026-07-05",
    "patientId": "demo-p-84",
    "patientName": "عادل حسين البدري",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "8:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-46",
    "date": "2026-07-05",
    "patientId": "demo-p-14",
    "patientName": "هبة زياد البنا",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "3:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-47",
    "date": "2026-07-05",
    "patientId": "demo-p-153",
    "patientName": "وائل سامح البدري",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "",
    "recordedAt": "3:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-48",
    "date": "2026-07-06",
    "patientId": "demo-p-19",
    "patientName": "يارا ياسر عوض",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "",
    "recordedAt": "5:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-49",
    "date": "2026-07-06",
    "patientId": "demo-p-132",
    "patientName": "وليد حازم عوض",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الكاحل والقدم",
      "الركبة"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "6:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-50",
    "date": "2026-07-06",
    "patientId": "demo-p-157",
    "patientName": "منى حسين عثمان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "8:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-51",
    "date": "2026-07-06",
    "patientId": "demo-p-65",
    "patientName": "مريم هيثم الشافعي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكاحل والقدم",
      "الكتف",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "5:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-52",
    "date": "2026-07-06",
    "patientId": "demo-p-155",
    "patientName": "حسن حازم المهدي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "12:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-53",
    "date": "2026-07-06",
    "patientId": "demo-p-77",
    "patientName": "حسين أشرف عوض",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "6:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-54",
    "date": "2026-07-06",
    "patientId": "demo-p-123",
    "patientName": "مروة محمد رضوان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "12:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-55",
    "date": "2026-07-06",
    "patientId": "demo-p-178",
    "patientName": "معتز إسلام الجندي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "5:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-56",
    "date": "2026-07-06",
    "patientId": "demo-p-23",
    "patientName": "زياد حازم الجمال",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "",
    "recordedAt": "6:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-57",
    "date": "2026-07-06",
    "patientId": "demo-p-28",
    "patientName": "عادل مصطفى زهران",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة",
      "الرقبة",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "6:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-58",
    "date": "2026-07-06",
    "patientId": "demo-p-170",
    "patientName": "هيثم وائل سليمان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "8:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-59",
    "date": "2026-07-06",
    "patientId": "demo-p-87",
    "patientName": "شيرين علي الجندي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "8:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-60",
    "date": "2026-07-06",
    "patientId": "demo-p-35",
    "patientName": "سلوى حسين رمضان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "",
    "recordedAt": "2:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-61",
    "date": "2026-07-07",
    "patientId": "demo-p-109",
    "patientName": "سارة حسين زكي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "5:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-62",
    "date": "2026-07-07",
    "patientId": "demo-p-40",
    "patientName": "هاجر طارق جاد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "6:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-63",
    "date": "2026-07-07",
    "patientId": "demo-p-132",
    "patientName": "وليد حازم عوض",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الرقبة",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "",
    "recordedAt": "9:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-64",
    "date": "2026-07-07",
    "patientId": "demo-p-29",
    "patientName": "حنان ماجد العطار",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة",
      "الكتف",
      "الرقبة"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "4:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-65",
    "date": "2026-07-07",
    "patientId": "demo-p-10",
    "patientName": "مروة زياد عبد العزيز",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "4:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-66",
    "date": "2026-07-07",
    "patientId": "demo-p-116",
    "patientName": "سلوى وائل سالم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "9:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-67",
    "date": "2026-07-07",
    "patientId": "demo-p-130",
    "patientName": "شيرين إبراهيم سالم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "9:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-68",
    "date": "2026-07-07",
    "patientId": "demo-p-111",
    "patientName": "وليد سامح زكي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 70,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "10:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-69",
    "date": "2026-07-07",
    "patientId": "demo-p-128",
    "patientName": "سلوى معتز رضوان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 70,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "7:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-70",
    "date": "2026-07-07",
    "patientId": "demo-p-177",
    "patientName": "معتز زياد عبد العزيز",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "",
    "recordedAt": "3:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-71",
    "date": "2026-07-07",
    "patientId": "demo-p-142",
    "patientName": "أشرف إسلام زهران",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "4:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-72",
    "date": "2026-07-07",
    "patientId": "demo-p-9",
    "patientName": "شريف حسن قاسم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "8:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-73",
    "date": "2026-07-07",
    "patientId": "demo-p-110",
    "patientName": "أميرة شريف البدري",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "6:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-74",
    "date": "2026-07-08",
    "patientId": "demo-p-34",
    "patientName": "علي محمود خليل",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "1:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-75",
    "date": "2026-07-08",
    "patientId": "demo-p-115",
    "patientName": "ندى كريم زكي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "8:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-76",
    "date": "2026-07-08",
    "patientId": "demo-p-147",
    "patientName": "مصطفى هيثم النجار",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكاحل والقدم",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "1:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-77",
    "date": "2026-07-08",
    "patientId": "demo-p-12",
    "patientName": "معتز تامر عيسى",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "12:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-78",
    "date": "2026-07-08",
    "patientId": "demo-p-26",
    "patientName": "علي عمرو البنا",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "11:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-79",
    "date": "2026-07-08",
    "patientId": "demo-p-10",
    "patientName": "مروة زياد عبد العزيز",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "1:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-80",
    "date": "2026-07-08",
    "patientId": "demo-p-32",
    "patientName": "سلوى أحمد الجمال",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "4:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-81",
    "date": "2026-07-08",
    "patientId": "demo-p-27",
    "patientName": "شيرين مصطفى حمدي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "8:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-82",
    "date": "2026-07-08",
    "patientId": "demo-p-157",
    "patientName": "منى حسين عثمان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "2:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-83",
    "date": "2026-07-08",
    "patientId": "demo-p-31",
    "patientName": "بسمة خالد مراد",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "",
    "recordedAt": "4:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-84",
    "date": "2026-07-08",
    "patientId": "demo-p-163",
    "patientName": "مروة إسلام المهدي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "3:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-85",
    "date": "2026-07-08",
    "patientId": "demo-p-28",
    "patientName": "عادل مصطفى زهران",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "8:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-86",
    "date": "2026-07-08",
    "patientId": "demo-p-141",
    "patientName": "عمر عمرو الجمال",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "",
    "recordedAt": "7:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-87",
    "date": "2026-07-08",
    "patientId": "demo-p-85",
    "patientName": "سلمى مصطفى مراد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "",
    "recordedAt": "9:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-88",
    "date": "2026-07-09",
    "patientId": "demo-p-57",
    "patientName": "فاطمة محمد منصور",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "6:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-89",
    "date": "2026-07-09",
    "patientId": "demo-p-7",
    "patientName": "مصطفى كريم رضوان",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "6:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-90",
    "date": "2026-07-09",
    "patientId": "demo-p-75",
    "patientName": "شريف أيمن حمدي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "5:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-91",
    "date": "2026-07-09",
    "patientId": "demo-p-173",
    "patientName": "إبراهيم تامر إبراهيم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "10:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-92",
    "date": "2026-07-09",
    "patientId": "demo-p-37",
    "patientName": "أيمن أحمد مراد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "5:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-93",
    "date": "2026-07-09",
    "patientId": "demo-p-1",
    "patientName": "دعاء شريف منصور",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "1:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-94",
    "date": "2026-07-09",
    "patientId": "demo-p-33",
    "patientName": "معتز أحمد غنيم",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "2:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-95",
    "date": "2026-07-09",
    "patientId": "demo-p-99",
    "patientName": "بسمة أشرف غنيم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "9:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-96",
    "date": "2026-07-09",
    "patientId": "demo-p-6",
    "patientName": "إبراهيم حازم البنا",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "4:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-97",
    "date": "2026-07-09",
    "patientId": "demo-p-184",
    "patientName": "زياد أشرف الشناوي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "6:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-98",
    "date": "2026-07-10",
    "patientId": "demo-p-116",
    "patientName": "سلوى وائل سالم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "11:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-99",
    "date": "2026-07-11",
    "patientId": "demo-p-145",
    "patientName": "حسين ياسر توفيق",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "8:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-100",
    "date": "2026-07-11",
    "patientId": "demo-p-49",
    "patientName": "هبة أشرف السيد",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "3:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-101",
    "date": "2026-07-11",
    "patientId": "demo-p-10",
    "patientName": "مروة زياد عبد العزيز",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "2:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-102",
    "date": "2026-07-11",
    "patientId": "demo-p-10",
    "patientName": "مروة زياد عبد العزيز",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "1:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-103",
    "date": "2026-07-11",
    "patientId": "demo-p-179",
    "patientName": "مصطفى أيمن البنا",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "6:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-104",
    "date": "2026-07-11",
    "patientId": "demo-p-118",
    "patientName": "معتز شريف عيسى",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "10:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-105",
    "date": "2026-07-11",
    "patientId": "demo-p-120",
    "patientName": "دعاء أيمن الشافعي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "",
    "recordedAt": "2:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-106",
    "date": "2026-07-11",
    "patientId": "demo-p-15",
    "patientName": "إبراهيم وليد الشافعي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "1:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-107",
    "date": "2026-07-11",
    "patientId": "demo-p-148",
    "patientName": "سلمى حسن الصاوي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "9:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-108",
    "date": "2026-07-11",
    "patientId": "demo-p-114",
    "patientName": "مريم هيثم عفيفي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "10:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-109",
    "date": "2026-07-12",
    "patientId": "demo-p-27",
    "patientName": "شيرين مصطفى حمدي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "9:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-110",
    "date": "2026-07-12",
    "patientId": "demo-p-10",
    "patientName": "مروة زياد عبد العزيز",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "",
    "recordedAt": "7:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-111",
    "date": "2026-07-12",
    "patientId": "demo-p-185",
    "patientName": "هبة حازم البنا",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "12:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-112",
    "date": "2026-07-12",
    "patientId": "demo-p-74",
    "patientName": "طارق مصطفى المهدي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "5:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-113",
    "date": "2026-07-12",
    "patientId": "demo-p-33",
    "patientName": "معتز أحمد غنيم",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "7:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-114",
    "date": "2026-07-12",
    "patientId": "demo-p-118",
    "patientName": "معتز شريف عيسى",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "3:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-115",
    "date": "2026-07-12",
    "patientId": "demo-p-113",
    "patientName": "يوسف علي زهران",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "6:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-116",
    "date": "2026-07-12",
    "patientId": "demo-p-50",
    "patientName": "منى هشام رضوان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "",
    "recordedAt": "4:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-117",
    "date": "2026-07-12",
    "patientId": "demo-p-85",
    "patientName": "سلمى مصطفى مراد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "4:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-118",
    "date": "2026-07-12",
    "patientId": "demo-p-101",
    "patientName": "ياسر وائل قاسم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "8:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-119",
    "date": "2026-07-12",
    "patientId": "demo-p-55",
    "patientName": "دينا عادل الجمال",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "3:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-120",
    "date": "2026-07-12",
    "patientId": "demo-p-27",
    "patientName": "شيرين مصطفى حمدي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "9:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-121",
    "date": "2026-07-12",
    "patientId": "demo-p-66",
    "patientName": "مصطفى إبراهيم عيسى",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "5:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-122",
    "date": "2026-07-12",
    "patientId": "demo-p-166",
    "patientName": "وفاء إبراهيم سليمان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "",
    "recordedAt": "2:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-123",
    "date": "2026-07-13",
    "patientId": "demo-p-150",
    "patientName": "رانيا ياسر سليمان",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة",
      "مفصل الكوع / اليد",
      "الرقبة"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "12:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-124",
    "date": "2026-07-13",
    "patientId": "demo-p-158",
    "patientName": "خالد عمرو الشافعي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "8:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-125",
    "date": "2026-07-13",
    "patientId": "demo-p-125",
    "patientName": "مريم محمد عثمان",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "10:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-126",
    "date": "2026-07-13",
    "patientId": "demo-p-108",
    "patientName": "إيمان علي زهران",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "",
    "recordedAt": "8:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-127",
    "date": "2026-07-13",
    "patientId": "demo-p-98",
    "patientName": "هبة كريم زهران",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "11:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-128",
    "date": "2026-07-13",
    "patientId": "demo-p-84",
    "patientName": "عادل حسين البدري",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكاحل والقدم",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "7:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-129",
    "date": "2026-07-13",
    "patientId": "demo-p-57",
    "patientName": "فاطمة محمد منصور",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "2:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-130",
    "date": "2026-07-13",
    "patientId": "demo-p-77",
    "patientName": "حسين أشرف عوض",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "12:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-131",
    "date": "2026-07-13",
    "patientId": "demo-p-80",
    "patientName": "مروة هيثم عثمان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "12:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-132",
    "date": "2026-07-13",
    "patientId": "demo-p-182",
    "patientName": "سارة ماجد العطار",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "4:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-133",
    "date": "2026-07-13",
    "patientId": "demo-p-145",
    "patientName": "حسين ياسر توفيق",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "",
    "recordedAt": "8:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-134",
    "date": "2026-07-14",
    "patientId": "demo-p-22",
    "patientName": "دينا محمود عبد العزيز",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الكتف",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "4:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-135",
    "date": "2026-07-14",
    "patientId": "demo-p-7",
    "patientName": "مصطفى كريم رضوان",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "9:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-136",
    "date": "2026-07-14",
    "patientId": "demo-p-32",
    "patientName": "سلوى أحمد الجمال",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكاحل والقدم",
      "الركبة",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "11:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-137",
    "date": "2026-07-14",
    "patientId": "demo-p-3",
    "patientName": "محمود هيثم سالم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "1:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-138",
    "date": "2026-07-14",
    "patientId": "demo-p-172",
    "patientName": "مها تامر رمضان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "3:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-139",
    "date": "2026-07-14",
    "patientId": "demo-p-117",
    "patientName": "إيمان أشرف البدري",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "5:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-140",
    "date": "2026-07-14",
    "patientId": "demo-p-64",
    "patientName": "هشام أشرف السيد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "12:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-141",
    "date": "2026-07-14",
    "patientId": "demo-p-88",
    "patientName": "سارة أيمن سالم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "10:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-142",
    "date": "2026-07-14",
    "patientId": "demo-p-4",
    "patientName": "شيرين معتز موسى",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "11:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-143",
    "date": "2026-07-14",
    "patientId": "demo-p-43",
    "patientName": "مها هشام الحداد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "6:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-144",
    "date": "2026-07-14",
    "patientId": "demo-p-32",
    "patientName": "سلوى أحمد الجمال",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "",
    "recordedAt": "5:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-145",
    "date": "2026-07-14",
    "patientId": "demo-p-174",
    "patientName": "محمود عادل عبد العزيز",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "11:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-146",
    "date": "2026-07-14",
    "patientId": "demo-p-29",
    "patientName": "حنان ماجد العطار",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "",
    "recordedAt": "10:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-147",
    "date": "2026-07-14",
    "patientId": "demo-p-96",
    "patientName": "حازم ياسر زكي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "9:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-148",
    "date": "2026-07-15",
    "patientId": "demo-p-160",
    "patientName": "داليا عمرو النجار",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "9:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-149",
    "date": "2026-07-15",
    "patientId": "demo-p-72",
    "patientName": "محمد سامح زهران",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "5:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-150",
    "date": "2026-07-15",
    "patientId": "demo-p-22",
    "patientName": "دينا محمود عبد العزيز",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "10:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-151",
    "date": "2026-07-15",
    "patientId": "demo-p-119",
    "patientName": "هبة وائل جاد",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "11:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-152",
    "date": "2026-07-15",
    "patientId": "demo-p-70",
    "patientName": "آية زياد حسام الدين",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكاحل والقدم",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "1:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-153",
    "date": "2026-07-15",
    "patientId": "demo-p-67",
    "patientName": "ماجد مصطفى السيد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "10:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-154",
    "date": "2026-07-15",
    "patientId": "demo-p-70",
    "patientName": "آية زياد حسام الدين",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "9:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-155",
    "date": "2026-07-15",
    "patientId": "demo-p-127",
    "patientName": "وائل عمر قاسم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "6:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-156",
    "date": "2026-07-15",
    "patientId": "demo-p-45",
    "patientName": "حسن عمر سالم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "11:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-157",
    "date": "2026-07-15",
    "patientId": "demo-p-169",
    "patientName": "سلوى هيثم عيسى",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكاحل والقدم",
      "مفصل الكوع / اليد",
      "الرقبة"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "3:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-158",
    "date": "2026-07-15",
    "patientId": "demo-p-61",
    "patientName": "هشام معتز المهدي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "9:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-159",
    "date": "2026-07-15",
    "patientId": "demo-p-81",
    "patientName": "منار تامر رمضان",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "8:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-160",
    "date": "2026-07-15",
    "patientId": "demo-p-127",
    "patientName": "وائل عمر قاسم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "6:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-161",
    "date": "2026-07-15",
    "patientId": "demo-p-53",
    "patientName": "شريف عمر عيسى",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "4:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-162",
    "date": "2026-07-16",
    "patientId": "demo-p-148",
    "patientName": "سلمى حسن الصاوي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "1:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-163",
    "date": "2026-07-16",
    "patientId": "demo-p-157",
    "patientName": "منى حسين عثمان",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "9:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-164",
    "date": "2026-07-16",
    "patientId": "demo-p-83",
    "patientName": "حسين عمرو زكي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "",
    "recordedAt": "2:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-165",
    "date": "2026-07-16",
    "patientId": "demo-p-185",
    "patientName": "هبة حازم البنا",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "11:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-166",
    "date": "2026-07-16",
    "patientId": "demo-p-151",
    "patientName": "سلمى هيثم عثمان",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "10:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-167",
    "date": "2026-07-16",
    "patientId": "demo-p-178",
    "patientName": "معتز إسلام الجندي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف",
      "مفصل الكوع / اليد",
      "الرقبة"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "10:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-168",
    "date": "2026-07-16",
    "patientId": "demo-p-157",
    "patientName": "منى حسين عثمان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكاحل والقدم",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "10:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-169",
    "date": "2026-07-17",
    "patientId": "demo-p-45",
    "patientName": "حسن عمر سالم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "",
    "recordedAt": "2:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-170",
    "date": "2026-07-17",
    "patientId": "demo-p-178",
    "patientName": "معتز إسلام الجندي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "7:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-171",
    "date": "2026-07-17",
    "patientId": "demo-p-166",
    "patientName": "وفاء إبراهيم سليمان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "2:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-172",
    "date": "2026-07-17",
    "patientId": "demo-p-1",
    "patientName": "دعاء شريف منصور",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "11:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-173",
    "date": "2026-07-18",
    "patientId": "demo-p-45",
    "patientName": "حسن عمر سالم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الكتف",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "6:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-174",
    "date": "2026-07-18",
    "patientId": "demo-p-42",
    "patientName": "ندى حازم قاسم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "2:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-175",
    "date": "2026-07-18",
    "patientId": "demo-p-181",
    "patientName": "إيمان معتز عفيفي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "5:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-176",
    "date": "2026-07-18",
    "patientId": "demo-p-122",
    "patientName": "أميرة محمد إبراهيم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف",
      "الفقرات القطنية / أسفل الظهر",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "11:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-177",
    "date": "2026-07-18",
    "patientId": "demo-p-43",
    "patientName": "مها هشام الحداد",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "9:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-178",
    "date": "2026-07-18",
    "patientId": "demo-p-167",
    "patientName": "ياسر عمرو الشافعي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "",
    "recordedAt": "2:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-179",
    "date": "2026-07-18",
    "patientId": "demo-p-88",
    "patientName": "سارة أيمن سالم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "5:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-180",
    "date": "2026-07-19",
    "patientId": "demo-p-63",
    "patientName": "ياسر حسن رمضان",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكاحل والقدم",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "5:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-181",
    "date": "2026-07-19",
    "patientId": "demo-p-112",
    "patientName": "معتز أيمن إبراهيم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "11:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-182",
    "date": "2026-07-19",
    "patientId": "demo-p-110",
    "patientName": "أميرة شريف البدري",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "",
    "recordedAt": "9:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-183",
    "date": "2026-07-19",
    "patientId": "demo-p-133",
    "patientName": "مروة تامر إبراهيم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 70,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "5:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-184",
    "date": "2026-07-19",
    "patientId": "demo-p-69",
    "patientName": "وائل كريم الحداد",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "1:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-185",
    "date": "2026-07-19",
    "patientId": "demo-p-129",
    "patientName": "عمر ياسر منصور",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "10:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-186",
    "date": "2026-07-19",
    "patientId": "demo-p-113",
    "patientName": "يوسف علي زهران",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "7:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-187",
    "date": "2026-07-19",
    "patientId": "demo-p-44",
    "patientName": "ياسر وليد غنيم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "10:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-188",
    "date": "2026-07-19",
    "patientId": "demo-p-67",
    "patientName": "ماجد مصطفى السيد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "6:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-189",
    "date": "2026-07-19",
    "patientId": "demo-p-138",
    "patientName": "حازم طارق حسام الدين",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "",
    "recordedAt": "9:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-190",
    "date": "2026-07-20",
    "patientId": "demo-p-53",
    "patientName": "شريف عمر عيسى",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "3:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-191",
    "date": "2026-07-20",
    "patientId": "demo-p-125",
    "patientName": "مريم محمد عثمان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "9:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-192",
    "date": "2026-07-20",
    "patientId": "demo-p-145",
    "patientName": "حسين ياسر توفيق",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "12:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-193",
    "date": "2026-07-20",
    "patientId": "demo-p-15",
    "patientName": "إبراهيم وليد الشافعي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الرقبة",
      "الكاحل والقدم",
      "الركبة"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "3:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-194",
    "date": "2026-07-20",
    "patientId": "demo-p-182",
    "patientName": "سارة ماجد العطار",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "5:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-195",
    "date": "2026-07-20",
    "patientId": "demo-p-103",
    "patientName": "دينا هيثم الجندي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "9:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-196",
    "date": "2026-07-20",
    "patientId": "demo-p-169",
    "patientName": "سلوى هيثم عيسى",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "2:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-197",
    "date": "2026-07-20",
    "patientId": "demo-p-130",
    "patientName": "شيرين إبراهيم سالم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 70,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "7:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-198",
    "date": "2026-07-20",
    "patientId": "demo-p-98",
    "patientName": "هبة كريم زهران",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "5:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-199",
    "date": "2026-07-20",
    "patientId": "demo-p-44",
    "patientName": "ياسر وليد غنيم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "7:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-200",
    "date": "2026-07-21",
    "patientId": "demo-p-78",
    "patientName": "شريف زياد السيد",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "11:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-201",
    "date": "2026-07-21",
    "patientId": "demo-p-8",
    "patientName": "منار حسن موسى",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "4:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-202",
    "date": "2026-07-21",
    "patientId": "demo-p-125",
    "patientName": "مريم محمد عثمان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "9:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-203",
    "date": "2026-07-21",
    "patientId": "demo-p-100",
    "patientName": "زياد علي الشافعي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "8:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-204",
    "date": "2026-07-21",
    "patientId": "demo-p-19",
    "patientName": "يارا ياسر عوض",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "6:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-205",
    "date": "2026-07-21",
    "patientId": "demo-p-81",
    "patientName": "منار تامر رمضان",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "",
    "recordedAt": "2:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-206",
    "date": "2026-07-21",
    "patientId": "demo-p-48",
    "patientName": "عادل عمر منصور",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "11:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-207",
    "date": "2026-07-21",
    "patientId": "demo-p-77",
    "patientName": "حسين أشرف عوض",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "7:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-208",
    "date": "2026-07-21",
    "patientId": "demo-p-101",
    "patientName": "ياسر وائل قاسم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "",
    "recordedAt": "11:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-209",
    "date": "2026-07-21",
    "patientId": "demo-p-132",
    "patientName": "وليد حازم عوض",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "11:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-210",
    "date": "2026-07-21",
    "patientId": "demo-p-82",
    "patientName": "مصطفى خالد عثمان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الكاحل والقدم",
      "الركبة"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "1:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-211",
    "date": "2026-07-22",
    "patientId": "demo-p-171",
    "patientName": "كريم تامر الشناوي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "11:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-212",
    "date": "2026-07-22",
    "patientId": "demo-p-112",
    "patientName": "معتز أيمن إبراهيم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "7:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-213",
    "date": "2026-07-22",
    "patientId": "demo-p-72",
    "patientName": "محمد سامح زهران",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "",
    "recordedAt": "8:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-214",
    "date": "2026-07-22",
    "patientId": "demo-p-17",
    "patientName": "مصطفى حسين عوض",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الرقبة",
      "الركبة",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 70,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "10:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-215",
    "date": "2026-07-22",
    "patientId": "demo-p-35",
    "patientName": "سلوى حسين رمضان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "",
    "recordedAt": "3:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-216",
    "date": "2026-07-22",
    "patientId": "demo-p-58",
    "patientName": "وفاء سامح الشناوي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف",
      "مفصل الكوع / اليد",
      "الرقبة"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "9:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-217",
    "date": "2026-07-22",
    "patientId": "demo-p-51",
    "patientName": "إسلام وليد عيسى",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "3:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-218",
    "date": "2026-07-22",
    "patientId": "demo-p-157",
    "patientName": "منى حسين عثمان",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم",
      "الركبة",
      "الكتف"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "2:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-219",
    "date": "2026-07-22",
    "patientId": "demo-p-137",
    "patientName": "منار عادل الحداد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "",
    "recordedAt": "1:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-220",
    "date": "2026-07-22",
    "patientId": "demo-p-146",
    "patientName": "عمرو أشرف موسى",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "12:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-221",
    "date": "2026-07-22",
    "patientId": "demo-p-109",
    "patientName": "سارة حسين زكي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "6:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-222",
    "date": "2026-07-22",
    "patientId": "demo-p-10",
    "patientName": "مروة زياد عبد العزيز",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الرقبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "2:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-223",
    "date": "2026-07-23",
    "patientId": "demo-p-96",
    "patientName": "حازم ياسر زكي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "12:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-224",
    "date": "2026-07-23",
    "patientId": "demo-p-129",
    "patientName": "عمر ياسر منصور",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "8:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-225",
    "date": "2026-07-23",
    "patientId": "demo-p-7",
    "patientName": "مصطفى كريم رضوان",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "مفصل الكوع / اليد",
      "الرقبة"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "2:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-226",
    "date": "2026-07-23",
    "patientId": "demo-p-133",
    "patientName": "مروة تامر إبراهيم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الفقرات القطنية / أسفل الظهر",
      "الكتف"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "7:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-227",
    "date": "2026-07-23",
    "patientId": "demo-p-136",
    "patientName": "هند حازم الحداد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "3:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-228",
    "date": "2026-07-23",
    "patientId": "demo-p-185",
    "patientName": "هبة حازم البنا",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "1:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-229",
    "date": "2026-07-23",
    "patientId": "demo-p-142",
    "patientName": "أشرف إسلام زهران",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "12:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-230",
    "date": "2026-07-23",
    "patientId": "demo-p-126",
    "patientName": "سامح علي سالم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "1:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-231",
    "date": "2026-07-23",
    "patientId": "demo-p-125",
    "patientName": "مريم محمد عثمان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "7:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-232",
    "date": "2026-07-23",
    "patientId": "demo-p-101",
    "patientName": "ياسر وائل قاسم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "2:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-233",
    "date": "2026-07-23",
    "patientId": "demo-p-139",
    "patientName": "محمود هيثم السيد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "7:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-234",
    "date": "2026-07-23",
    "patientId": "demo-p-23",
    "patientName": "زياد حازم الجمال",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "1:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-235",
    "date": "2026-07-23",
    "patientId": "demo-p-134",
    "patientName": "أحمد حسين البنا",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة",
      "الكتف",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "",
    "recordedAt": "1:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-236",
    "date": "2026-07-23",
    "patientId": "demo-p-48",
    "patientName": "عادل عمر منصور",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "9:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-237",
    "date": "2026-07-24",
    "patientId": "demo-p-53",
    "patientName": "شريف عمر عيسى",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف",
      "الفقرات القطنية / أسفل الظهر",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "",
    "recordedAt": "1:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-238",
    "date": "2026-07-24",
    "patientId": "demo-p-75",
    "patientName": "شريف أيمن حمدي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "10:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-239",
    "date": "2026-07-24",
    "patientId": "demo-p-149",
    "patientName": "زياد أشرف الحداد",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "7:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-240",
    "date": "2026-07-24",
    "patientId": "demo-p-32",
    "patientName": "سلوى أحمد الجمال",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "",
    "recordedAt": "3:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-241",
    "date": "2026-07-25",
    "patientId": "demo-p-24",
    "patientName": "وفاء معتز البنا",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "",
    "recordedAt": "11:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-242",
    "date": "2026-07-25",
    "patientId": "demo-p-67",
    "patientName": "ماجد مصطفى السيد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "",
    "recordedAt": "9:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-243",
    "date": "2026-07-25",
    "patientId": "demo-p-112",
    "patientName": "معتز أيمن إبراهيم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "5:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-244",
    "date": "2026-07-25",
    "patientId": "demo-p-47",
    "patientName": "أحمد علي خليل",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 70,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "7:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-245",
    "date": "2026-07-25",
    "patientId": "demo-p-112",
    "patientName": "معتز أيمن إبراهيم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "2:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-246",
    "date": "2026-07-25",
    "patientId": "demo-p-94",
    "patientName": "بسمة حازم زهران",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "3:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-247",
    "date": "2026-07-26",
    "patientId": "demo-p-116",
    "patientName": "سلوى وائل سالم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "7:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-248",
    "date": "2026-07-26",
    "patientId": "demo-p-121",
    "patientName": "هاجر تامر عبد العزيز",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "12:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-249",
    "date": "2026-07-26",
    "patientId": "demo-p-108",
    "patientName": "إيمان علي زهران",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "12:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-250",
    "date": "2026-07-26",
    "patientId": "demo-p-135",
    "patientName": "آية مصطفى مراد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "4:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-251",
    "date": "2026-07-26",
    "patientId": "demo-p-181",
    "patientName": "إيمان معتز عفيفي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "11:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-252",
    "date": "2026-07-26",
    "patientId": "demo-p-176",
    "patientName": "منى يوسف توفيق",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة",
      "مفصل الكوع / اليد",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "4:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-253",
    "date": "2026-07-26",
    "patientId": "demo-p-149",
    "patientName": "زياد أشرف الحداد",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "1:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-254",
    "date": "2026-07-26",
    "patientId": "demo-p-42",
    "patientName": "ندى حازم قاسم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "",
    "recordedAt": "11:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-255",
    "date": "2026-07-26",
    "patientId": "demo-p-114",
    "patientName": "مريم هيثم عفيفي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "2:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-256",
    "date": "2026-07-26",
    "patientId": "demo-p-150",
    "patientName": "رانيا ياسر سليمان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "10:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-257",
    "date": "2026-07-26",
    "patientId": "demo-p-98",
    "patientName": "هبة كريم زهران",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "2:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-258",
    "date": "2026-07-26",
    "patientId": "demo-p-22",
    "patientName": "دينا محمود عبد العزيز",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "6:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-259",
    "date": "2026-07-26",
    "patientId": "demo-p-146",
    "patientName": "عمرو أشرف موسى",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الركبة",
      "الرقبة"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "6:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-260",
    "date": "2026-07-27",
    "patientId": "demo-p-61",
    "patientName": "هشام معتز المهدي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "4:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-261",
    "date": "2026-07-27",
    "patientId": "demo-p-137",
    "patientName": "منار عادل الحداد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "9:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-262",
    "date": "2026-07-27",
    "patientId": "demo-p-110",
    "patientName": "أميرة شريف البدري",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "2:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-263",
    "date": "2026-07-27",
    "patientId": "demo-p-176",
    "patientName": "منى يوسف توفيق",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "11:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-264",
    "date": "2026-07-27",
    "patientId": "demo-p-85",
    "patientName": "سلمى مصطفى مراد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "9:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-265",
    "date": "2026-07-27",
    "patientId": "demo-p-5",
    "patientName": "سامح شريف عفيفي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الرقبة",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "11:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-266",
    "date": "2026-07-27",
    "patientId": "demo-p-37",
    "patientName": "أيمن أحمد مراد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "",
    "recordedAt": "11:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-267",
    "date": "2026-07-27",
    "patientId": "demo-p-102",
    "patientName": "محمود هشام البدري",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "2:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-268",
    "date": "2026-07-27",
    "patientId": "demo-p-94",
    "patientName": "بسمة حازم زهران",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "8:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-269",
    "date": "2026-07-27",
    "patientId": "demo-p-164",
    "patientName": "دينا أيمن إبراهيم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "4:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-270",
    "date": "2026-07-27",
    "patientId": "demo-p-29",
    "patientName": "حنان ماجد العطار",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة",
      "الكتف",
      "الرقبة"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "7:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-271",
    "date": "2026-07-28",
    "patientId": "demo-p-165",
    "patientName": "زياد ياسر سالم",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "4:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-272",
    "date": "2026-07-28",
    "patientId": "demo-p-183",
    "patientName": "سامح ياسر موسى",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "3:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-273",
    "date": "2026-07-28",
    "patientId": "demo-p-52",
    "patientName": "سارة عادل عوض",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة",
      "مفصل الكوع / اليد",
      "الكتف"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "12:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-274",
    "date": "2026-07-28",
    "patientId": "demo-p-171",
    "patientName": "كريم تامر الشناوي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "9:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-275",
    "date": "2026-07-28",
    "patientId": "demo-p-44",
    "patientName": "ياسر وليد غنيم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "12:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-276",
    "date": "2026-07-28",
    "patientId": "demo-p-65",
    "patientName": "مريم هيثم الشافعي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "4:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-277",
    "date": "2026-07-28",
    "patientId": "demo-p-181",
    "patientName": "إيمان معتز عفيفي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "4:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-278",
    "date": "2026-07-28",
    "patientId": "demo-p-12",
    "patientName": "معتز تامر عيسى",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة",
      "مفصل الكوع / اليد",
      "الرقبة"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "10:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-279",
    "date": "2026-07-28",
    "patientId": "demo-p-174",
    "patientName": "محمود عادل عبد العزيز",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "12:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-280",
    "date": "2026-07-28",
    "patientId": "demo-p-100",
    "patientName": "زياد علي الشافعي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "5:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-281",
    "date": "2026-07-28",
    "patientId": "demo-p-162",
    "patientName": "إيمان يوسف رمضان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "9:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-282",
    "date": "2026-07-28",
    "patientId": "demo-p-92",
    "patientName": "حسن أيمن زكي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "",
    "recordedAt": "5:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-283",
    "date": "2026-07-29",
    "patientId": "demo-p-100",
    "patientName": "زياد علي الشافعي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "3:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-284",
    "date": "2026-07-29",
    "patientId": "demo-p-44",
    "patientName": "ياسر وليد غنيم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "3:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-285",
    "date": "2026-07-29",
    "patientId": "demo-p-122",
    "patientName": "أميرة محمد إبراهيم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "10:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-286",
    "date": "2026-07-29",
    "patientId": "demo-p-108",
    "patientName": "إيمان علي زهران",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "6:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-287",
    "date": "2026-07-29",
    "patientId": "demo-p-25",
    "patientName": "فاطمة حسين سالم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "10:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-288",
    "date": "2026-07-29",
    "patientId": "demo-p-125",
    "patientName": "مريم محمد عثمان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "2:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-289",
    "date": "2026-07-29",
    "patientId": "demo-p-38",
    "patientName": "حازم ياسر الشافعي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "1:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-290",
    "date": "2026-07-29",
    "patientId": "demo-p-60",
    "patientName": "منار إسلام زكي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "11:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-291",
    "date": "2026-07-29",
    "patientId": "demo-p-114",
    "patientName": "مريم هيثم عفيفي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "5:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-292",
    "date": "2026-07-29",
    "patientId": "demo-p-15",
    "patientName": "إبراهيم وليد الشافعي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "2:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-293",
    "date": "2026-07-29",
    "patientId": "demo-p-28",
    "patientName": "عادل مصطفى زهران",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "2:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-294",
    "date": "2026-07-29",
    "patientId": "demo-p-97",
    "patientName": "وائل سامح عبد العزيز",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "10:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-295",
    "date": "2026-07-29",
    "patientId": "demo-p-136",
    "patientName": "هند حازم الحداد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "11:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-296",
    "date": "2026-07-29",
    "patientId": "demo-p-160",
    "patientName": "داليا عمرو النجار",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "1:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-297",
    "date": "2026-07-30",
    "patientId": "demo-p-123",
    "patientName": "مروة محمد رضوان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "11:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-298",
    "date": "2026-07-30",
    "patientId": "demo-p-6",
    "patientName": "إبراهيم حازم البنا",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "",
    "recordedAt": "8:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-299",
    "date": "2026-07-30",
    "patientId": "demo-p-160",
    "patientName": "داليا عمرو النجار",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "12:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-300",
    "date": "2026-07-30",
    "patientId": "demo-p-111",
    "patientName": "وليد سامح زكي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "",
    "recordedAt": "4:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-301",
    "date": "2026-07-30",
    "patientId": "demo-p-121",
    "patientName": "هاجر تامر عبد العزيز",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "2:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-302",
    "date": "2026-07-30",
    "patientId": "demo-p-116",
    "patientName": "سلوى وائل سالم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "8:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-303",
    "date": "2026-07-30",
    "patientId": "demo-p-181",
    "patientName": "إيمان معتز عفيفي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "",
    "recordedAt": "1:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-304",
    "date": "2026-07-30",
    "patientId": "demo-p-169",
    "patientName": "سلوى هيثم عيسى",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "12:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-305",
    "date": "2026-07-30",
    "patientId": "demo-p-7",
    "patientName": "مصطفى كريم رضوان",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الرقبة",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "7:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-306",
    "date": "2026-07-30",
    "patientId": "demo-p-45",
    "patientName": "حسن عمر سالم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "1:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-307",
    "date": "2026-07-30",
    "patientId": "demo-p-5",
    "patientName": "سامح شريف عفيفي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "7:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-308",
    "date": "2026-07-30",
    "patientId": "demo-p-82",
    "patientName": "مصطفى خالد عثمان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "5:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-309",
    "date": "2026-07-30",
    "patientId": "demo-p-121",
    "patientName": "هاجر تامر عبد العزيز",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "1:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-310",
    "date": "2026-07-30",
    "patientId": "demo-p-168",
    "patientName": "خالد إسلام توفيق",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الرقبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "6:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-311",
    "date": "2026-07-31",
    "patientId": "demo-p-169",
    "patientName": "سلوى هيثم عيسى",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الرقبة",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "",
    "recordedAt": "8:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-312",
    "date": "2026-08-01",
    "patientId": "demo-p-136",
    "patientName": "هند حازم الحداد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "8:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-313",
    "date": "2026-08-01",
    "patientId": "demo-p-92",
    "patientName": "حسن أيمن زكي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "7:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-314",
    "date": "2026-08-01",
    "patientId": "demo-p-9",
    "patientName": "شريف حسن قاسم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "6:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-315",
    "date": "2026-08-01",
    "patientId": "demo-p-29",
    "patientName": "حنان ماجد العطار",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "6:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-316",
    "date": "2026-08-01",
    "patientId": "demo-p-64",
    "patientName": "هشام أشرف السيد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "5:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-317",
    "date": "2026-08-01",
    "patientId": "demo-p-112",
    "patientName": "معتز أيمن إبراهيم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "",
    "recordedAt": "2:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-318",
    "date": "2026-08-01",
    "patientId": "demo-p-128",
    "patientName": "سلوى معتز رضوان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "10:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-319",
    "date": "2026-08-01",
    "patientId": "demo-p-92",
    "patientName": "حسن أيمن زكي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "3:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-320",
    "date": "2026-08-01",
    "patientId": "demo-p-164",
    "patientName": "دينا أيمن إبراهيم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 70,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "6:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-321",
    "date": "2026-08-01",
    "patientId": "demo-p-143",
    "patientName": "مصطفى هيثم الشافعي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "4:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-322",
    "date": "2026-08-01",
    "patientId": "demo-p-69",
    "patientName": "وائل كريم الحداد",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "5:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-323",
    "date": "2026-08-01",
    "patientId": "demo-p-30",
    "patientName": "إسلام إبراهيم السيد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "10:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-324",
    "date": "2026-08-01",
    "patientId": "demo-p-79",
    "patientName": "مصطفى إسلام عبد العزيز",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "10:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-325",
    "date": "2026-08-02",
    "patientId": "demo-p-117",
    "patientName": "إيمان أشرف البدري",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "12:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-326",
    "date": "2026-08-02",
    "patientId": "demo-p-148",
    "patientName": "سلمى حسن الصاوي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "5:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-327",
    "date": "2026-08-02",
    "patientId": "demo-p-166",
    "patientName": "وفاء إبراهيم سليمان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "8:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-328",
    "date": "2026-08-02",
    "patientId": "demo-p-25",
    "patientName": "فاطمة حسين سالم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "10:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-329",
    "date": "2026-08-02",
    "patientId": "demo-p-129",
    "patientName": "عمر ياسر منصور",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "7:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-330",
    "date": "2026-08-02",
    "patientId": "demo-p-74",
    "patientName": "طارق مصطفى المهدي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "10:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-331",
    "date": "2026-08-02",
    "patientId": "demo-p-92",
    "patientName": "حسن أيمن زكي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكاحل والقدم",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "8:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-332",
    "date": "2026-08-02",
    "patientId": "demo-p-41",
    "patientName": "أيمن وائل الجمال",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "5:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-333",
    "date": "2026-08-02",
    "patientId": "demo-p-174",
    "patientName": "محمود عادل عبد العزيز",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "11:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-334",
    "date": "2026-08-02",
    "patientId": "demo-p-182",
    "patientName": "سارة ماجد العطار",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "6:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-335",
    "date": "2026-08-03",
    "patientId": "demo-p-165",
    "patientName": "زياد ياسر سالم",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "2:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-336",
    "date": "2026-08-03",
    "patientId": "demo-p-80",
    "patientName": "مروة هيثم عثمان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف",
      "مفصل الكوع / اليد",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "3:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-337",
    "date": "2026-08-03",
    "patientId": "demo-p-38",
    "patientName": "حازم ياسر الشافعي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "1:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-338",
    "date": "2026-08-03",
    "patientId": "demo-p-89",
    "patientName": "آية علي العطار",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "8:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-339",
    "date": "2026-08-03",
    "patientId": "demo-p-40",
    "patientName": "هاجر طارق جاد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "",
    "recordedAt": "10:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-340",
    "date": "2026-08-03",
    "patientId": "demo-p-108",
    "patientName": "إيمان علي زهران",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "",
    "recordedAt": "5:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-341",
    "date": "2026-08-03",
    "patientId": "demo-p-175",
    "patientName": "طارق كريم الصاوي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "10:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-342",
    "date": "2026-08-03",
    "patientId": "demo-p-4",
    "patientName": "شيرين معتز موسى",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "",
    "recordedAt": "7:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-343",
    "date": "2026-08-03",
    "patientId": "demo-p-141",
    "patientName": "عمر عمرو الجمال",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "9:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-344",
    "date": "2026-08-03",
    "patientId": "demo-p-147",
    "patientName": "مصطفى هيثم النجار",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "1:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-345",
    "date": "2026-08-03",
    "patientId": "demo-p-82",
    "patientName": "مصطفى خالد عثمان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "2:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-346",
    "date": "2026-08-03",
    "patientId": "demo-p-31",
    "patientName": "بسمة خالد مراد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "4:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-347",
    "date": "2026-08-04",
    "patientId": "demo-p-180",
    "patientName": "منى حسين عفيفي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "9:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-348",
    "date": "2026-08-04",
    "patientId": "demo-p-22",
    "patientName": "دينا محمود عبد العزيز",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "10:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-349",
    "date": "2026-08-04",
    "patientId": "demo-p-53",
    "patientName": "شريف عمر عيسى",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "2:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-350",
    "date": "2026-08-04",
    "patientId": "demo-p-97",
    "patientName": "وائل سامح عبد العزيز",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "8:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-351",
    "date": "2026-08-04",
    "patientId": "demo-p-90",
    "patientName": "فاطمة وليد الجندي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "11:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-352",
    "date": "2026-08-04",
    "patientId": "demo-p-37",
    "patientName": "أيمن أحمد مراد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "7:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-353",
    "date": "2026-08-04",
    "patientId": "demo-p-163",
    "patientName": "مروة إسلام المهدي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 70,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "8:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-354",
    "date": "2026-08-04",
    "patientId": "demo-p-40",
    "patientName": "هاجر طارق جاد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم",
      "مفصل الكوع / اليد",
      "الركبة"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "5:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-355",
    "date": "2026-08-04",
    "patientId": "demo-p-44",
    "patientName": "ياسر وليد غنيم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "",
    "recordedAt": "1:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-356",
    "date": "2026-08-05",
    "patientId": "demo-p-8",
    "patientName": "منار حسن موسى",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 70,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "9:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-357",
    "date": "2026-08-05",
    "patientId": "demo-p-69",
    "patientName": "وائل كريم الحداد",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "4:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-358",
    "date": "2026-08-05",
    "patientId": "demo-p-3",
    "patientName": "محمود هيثم سالم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "8:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-359",
    "date": "2026-08-05",
    "patientId": "demo-p-23",
    "patientName": "زياد حازم الجمال",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "6:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-360",
    "date": "2026-08-05",
    "patientId": "demo-p-43",
    "patientName": "مها هشام الحداد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "9:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-361",
    "date": "2026-08-05",
    "patientId": "demo-p-124",
    "patientName": "تامر مصطفى الشافعي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "9:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-362",
    "date": "2026-08-05",
    "patientId": "demo-p-153",
    "patientName": "وائل سامح البدري",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "2:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-363",
    "date": "2026-08-05",
    "patientId": "demo-p-17",
    "patientName": "مصطفى حسين عوض",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "7:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-364",
    "date": "2026-08-05",
    "patientId": "demo-p-37",
    "patientName": "أيمن أحمد مراد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "7:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-365",
    "date": "2026-08-05",
    "patientId": "demo-p-176",
    "patientName": "منى يوسف توفيق",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف",
      "مفصل الكوع / اليد",
      "الرقبة"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "1:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-366",
    "date": "2026-08-05",
    "patientId": "demo-p-93",
    "patientName": "طارق كريم عثمان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "1:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-367",
    "date": "2026-08-05",
    "patientId": "demo-p-174",
    "patientName": "محمود عادل عبد العزيز",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "3:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-368",
    "date": "2026-08-05",
    "patientId": "demo-p-178",
    "patientName": "معتز إسلام الجندي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "",
    "recordedAt": "4:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-369",
    "date": "2026-08-05",
    "patientId": "demo-p-101",
    "patientName": "ياسر وائل قاسم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم",
      "الفقرات القطنية / أسفل الظهر",
      "الرقبة"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "",
    "recordedAt": "6:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-370",
    "date": "2026-08-06",
    "patientId": "demo-p-14",
    "patientName": "هبة زياد البنا",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "",
    "recordedAt": "8:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-371",
    "date": "2026-08-06",
    "patientId": "demo-p-173",
    "patientName": "إبراهيم تامر إبراهيم",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم",
      "الركبة",
      "الكتف"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "11:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-372",
    "date": "2026-08-06",
    "patientId": "demo-p-181",
    "patientName": "إيمان معتز عفيفي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف",
      "الركبة",
      "الرقبة"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "2:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-373",
    "date": "2026-08-06",
    "patientId": "demo-p-32",
    "patientName": "سلوى أحمد الجمال",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "7:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-374",
    "date": "2026-08-06",
    "patientId": "demo-p-150",
    "patientName": "رانيا ياسر سليمان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "2:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-375",
    "date": "2026-08-06",
    "patientId": "demo-p-92",
    "patientName": "حسن أيمن زكي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "12:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-376",
    "date": "2026-08-06",
    "patientId": "demo-p-67",
    "patientName": "ماجد مصطفى السيد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "12:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-377",
    "date": "2026-08-06",
    "patientId": "demo-p-42",
    "patientName": "ندى حازم قاسم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الركبة",
      "الرقبة"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "4:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-378",
    "date": "2026-08-06",
    "patientId": "demo-p-113",
    "patientName": "يوسف علي زهران",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "12:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-379",
    "date": "2026-08-06",
    "patientId": "demo-p-44",
    "patientName": "ياسر وليد غنيم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "",
    "recordedAt": "4:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-380",
    "date": "2026-08-06",
    "patientId": "demo-p-4",
    "patientName": "شيرين معتز موسى",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "10:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-381",
    "date": "2026-08-06",
    "patientId": "demo-p-48",
    "patientName": "عادل عمر منصور",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "2:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-382",
    "date": "2026-08-07",
    "patientId": "demo-p-131",
    "patientName": "عمر حسن البنا",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "",
    "recordedAt": "9:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-383",
    "date": "2026-08-07",
    "patientId": "demo-p-94",
    "patientName": "بسمة حازم زهران",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "",
    "recordedAt": "7:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-384",
    "date": "2026-08-07",
    "patientId": "demo-p-6",
    "patientName": "إبراهيم حازم البنا",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "3:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-385",
    "date": "2026-08-08",
    "patientId": "demo-p-62",
    "patientName": "زياد تامر جاد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "3:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-386",
    "date": "2026-08-08",
    "patientId": "demo-p-177",
    "patientName": "معتز زياد عبد العزيز",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 70,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "2:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-387",
    "date": "2026-08-08",
    "patientId": "demo-p-131",
    "patientName": "عمر حسن البنا",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "10:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-388",
    "date": "2026-08-08",
    "patientId": "demo-p-89",
    "patientName": "آية علي العطار",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "10:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-389",
    "date": "2026-08-08",
    "patientId": "demo-p-79",
    "patientName": "مصطفى إسلام عبد العزيز",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "",
    "recordedAt": "10:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-390",
    "date": "2026-08-08",
    "patientId": "demo-p-177",
    "patientName": "معتز زياد عبد العزيز",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "2:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-391",
    "date": "2026-08-08",
    "patientId": "demo-p-56",
    "patientName": "أحمد حسين الصاوي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة",
      "مفصل الكوع / اليد",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 70,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "5:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-392",
    "date": "2026-08-08",
    "patientId": "demo-p-117",
    "patientName": "إيمان أشرف البدري",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "5:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-393",
    "date": "2026-08-09",
    "patientId": "demo-p-23",
    "patientName": "زياد حازم الجمال",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "",
    "recordedAt": "3:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-394",
    "date": "2026-08-09",
    "patientId": "demo-p-82",
    "patientName": "مصطفى خالد عثمان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "",
    "recordedAt": "1:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-395",
    "date": "2026-08-09",
    "patientId": "demo-p-36",
    "patientName": "كريم يوسف غنيم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الرقبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "5:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-396",
    "date": "2026-08-09",
    "patientId": "demo-p-96",
    "patientName": "حازم ياسر زكي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "12:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-397",
    "date": "2026-08-09",
    "patientId": "demo-p-41",
    "patientName": "أيمن وائل الجمال",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "",
    "recordedAt": "4:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-398",
    "date": "2026-08-09",
    "patientId": "demo-p-119",
    "patientName": "هبة وائل جاد",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "",
    "recordedAt": "6:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-399",
    "date": "2026-08-09",
    "patientId": "demo-p-167",
    "patientName": "ياسر عمرو الشافعي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "3:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-400",
    "date": "2026-08-09",
    "patientId": "demo-p-45",
    "patientName": "حسن عمر سالم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "9:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-401",
    "date": "2026-08-10",
    "patientId": "demo-p-61",
    "patientName": "هشام معتز المهدي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكاحل والقدم",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "1:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-402",
    "date": "2026-08-10",
    "patientId": "demo-p-81",
    "patientName": "منار تامر رمضان",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "4:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-403",
    "date": "2026-08-10",
    "patientId": "demo-p-128",
    "patientName": "سلوى معتز رضوان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "مفصل الكوع / اليد",
      "الرقبة"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "12:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-404",
    "date": "2026-08-10",
    "patientId": "demo-p-113",
    "patientName": "يوسف علي زهران",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "5:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-405",
    "date": "2026-08-10",
    "patientId": "demo-p-15",
    "patientName": "إبراهيم وليد الشافعي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "5:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-406",
    "date": "2026-08-10",
    "patientId": "demo-p-38",
    "patientName": "حازم ياسر الشافعي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكاحل والقدم",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "11:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-407",
    "date": "2026-08-11",
    "patientId": "demo-p-56",
    "patientName": "أحمد حسين الصاوي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "9:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-408",
    "date": "2026-08-11",
    "patientId": "demo-p-114",
    "patientName": "مريم هيثم عفيفي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "",
    "recordedAt": "3:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-409",
    "date": "2026-08-11",
    "patientId": "demo-p-111",
    "patientName": "وليد سامح زكي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "8:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-410",
    "date": "2026-08-11",
    "patientId": "demo-p-175",
    "patientName": "طارق كريم الصاوي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 70,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "4:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-411",
    "date": "2026-08-11",
    "patientId": "demo-p-151",
    "patientName": "سلمى هيثم عثمان",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "",
    "recordedAt": "4:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-412",
    "date": "2026-08-11",
    "patientId": "demo-p-9",
    "patientName": "شريف حسن قاسم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكاحل والقدم",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "12:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-413",
    "date": "2026-08-12",
    "patientId": "demo-p-58",
    "patientName": "وفاء سامح الشناوي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "4:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-414",
    "date": "2026-08-12",
    "patientId": "demo-p-102",
    "patientName": "محمود هشام البدري",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "5:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-415",
    "date": "2026-08-12",
    "patientId": "demo-p-18",
    "patientName": "علي شريف عفيفي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة",
      "الكتف",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "10:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-416",
    "date": "2026-08-12",
    "patientId": "demo-p-63",
    "patientName": "ياسر حسن رمضان",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "10:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-417",
    "date": "2026-08-12",
    "patientId": "demo-p-30",
    "patientName": "إسلام إبراهيم السيد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة",
      "مفصل الكوع / اليد",
      "الكتف"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "3:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-418",
    "date": "2026-08-12",
    "patientId": "demo-p-151",
    "patientName": "سلمى هيثم عثمان",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "12:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-419",
    "date": "2026-08-12",
    "patientId": "demo-p-9",
    "patientName": "شريف حسن قاسم",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "9:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-420",
    "date": "2026-08-12",
    "patientId": "demo-p-74",
    "patientName": "طارق مصطفى المهدي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الكاحل والقدم",
      "الركبة"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "2:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-421",
    "date": "2026-08-12",
    "patientId": "demo-p-33",
    "patientName": "معتز أحمد غنيم",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "3:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-422",
    "date": "2026-08-12",
    "patientId": "demo-p-170",
    "patientName": "هيثم وائل سليمان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "12:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-423",
    "date": "2026-08-12",
    "patientId": "demo-p-135",
    "patientName": "آية مصطفى مراد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم",
      "الرقبة",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 70,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "3:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-424",
    "date": "2026-08-13",
    "patientId": "demo-p-99",
    "patientName": "بسمة أشرف غنيم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "",
    "recordedAt": "9:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-425",
    "date": "2026-08-13",
    "patientId": "demo-p-121",
    "patientName": "هاجر تامر عبد العزيز",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "",
    "recordedAt": "2:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-426",
    "date": "2026-08-13",
    "patientId": "demo-p-30",
    "patientName": "إسلام إبراهيم السيد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "3:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-427",
    "date": "2026-08-13",
    "patientId": "demo-p-178",
    "patientName": "معتز إسلام الجندي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "8:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-428",
    "date": "2026-08-13",
    "patientId": "demo-p-77",
    "patientName": "حسين أشرف عوض",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "6:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-429",
    "date": "2026-08-13",
    "patientId": "demo-p-91",
    "patientName": "سلمى إسلام الشافعي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "",
    "recordedAt": "11:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-430",
    "date": "2026-08-13",
    "patientId": "demo-p-71",
    "patientName": "زياد محمد رضوان",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "10:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-431",
    "date": "2026-08-13",
    "patientId": "demo-p-48",
    "patientName": "عادل عمر منصور",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "9:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-432",
    "date": "2026-08-13",
    "patientId": "demo-p-153",
    "patientName": "وائل سامح البدري",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "11:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-433",
    "date": "2026-08-13",
    "patientId": "demo-p-180",
    "patientName": "منى حسين عفيفي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "5:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-434",
    "date": "2026-08-14",
    "patientId": "demo-p-29",
    "patientName": "حنان ماجد العطار",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "12:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-435",
    "date": "2026-08-14",
    "patientId": "demo-p-121",
    "patientName": "هاجر تامر عبد العزيز",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف",
      "الرقبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "1:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-436",
    "date": "2026-08-14",
    "patientId": "demo-p-60",
    "patientName": "منار إسلام زكي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "9:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-437",
    "date": "2026-08-15",
    "patientId": "demo-p-13",
    "patientName": "خالد مصطفى عبد العزيز",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "10:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-438",
    "date": "2026-08-15",
    "patientId": "demo-p-126",
    "patientName": "سامح علي سالم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "11:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-439",
    "date": "2026-08-15",
    "patientId": "demo-p-103",
    "patientName": "دينا هيثم الجندي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف",
      "الفقرات القطنية / أسفل الظهر",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "",
    "recordedAt": "2:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-440",
    "date": "2026-08-15",
    "patientId": "demo-p-136",
    "patientName": "هند حازم الحداد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "9:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-441",
    "date": "2026-08-15",
    "patientId": "demo-p-51",
    "patientName": "إسلام وليد عيسى",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "5:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-442",
    "date": "2026-08-15",
    "patientId": "demo-p-54",
    "patientName": "عمر أشرف خليل",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "4:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-443",
    "date": "2026-08-15",
    "patientId": "demo-p-123",
    "patientName": "مروة محمد رضوان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "4:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-444",
    "date": "2026-08-15",
    "patientId": "demo-p-91",
    "patientName": "سلمى إسلام الشافعي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "2:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-445",
    "date": "2026-08-15",
    "patientId": "demo-p-139",
    "patientName": "محمود هيثم السيد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "6:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-446",
    "date": "2026-08-15",
    "patientId": "demo-p-43",
    "patientName": "مها هشام الحداد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "2:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-447",
    "date": "2026-08-15",
    "patientId": "demo-p-155",
    "patientName": "حسن حازم المهدي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الرقبة",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "8:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-448",
    "date": "2026-08-15",
    "patientId": "demo-p-111",
    "patientName": "وليد سامح زكي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "5:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-449",
    "date": "2026-08-15",
    "patientId": "demo-p-144",
    "patientName": "وائل شريف توفيق",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "",
    "recordedAt": "1:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-450",
    "date": "2026-08-16",
    "patientId": "demo-p-116",
    "patientName": "سلوى وائل سالم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "2:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-451",
    "date": "2026-08-16",
    "patientId": "demo-p-172",
    "patientName": "مها تامر رمضان",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "3:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-452",
    "date": "2026-08-16",
    "patientId": "demo-p-132",
    "patientName": "وليد حازم عوض",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "12:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-453",
    "date": "2026-08-16",
    "patientId": "demo-p-86",
    "patientName": "داليا مصطفى السيد",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "",
    "recordedAt": "4:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-454",
    "date": "2026-08-16",
    "patientId": "demo-p-33",
    "patientName": "معتز أحمد غنيم",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف",
      "مفصل الكوع / اليد",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "5:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-455",
    "date": "2026-08-16",
    "patientId": "demo-p-97",
    "patientName": "وائل سامح عبد العزيز",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "4:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-456",
    "date": "2026-08-16",
    "patientId": "demo-p-17",
    "patientName": "مصطفى حسين عوض",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 70,
    "notes": "",
    "recordedAt": "11:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-457",
    "date": "2026-08-16",
    "patientId": "demo-p-148",
    "patientName": "سلمى حسن الصاوي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الرقبة",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "7:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-458",
    "date": "2026-08-16",
    "patientId": "demo-p-163",
    "patientName": "مروة إسلام المهدي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "3:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-459",
    "date": "2026-08-16",
    "patientId": "demo-p-131",
    "patientName": "عمر حسن البنا",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "2:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-460",
    "date": "2026-08-16",
    "patientId": "demo-p-103",
    "patientName": "دينا هيثم الجندي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "11:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-461",
    "date": "2026-08-16",
    "patientId": "demo-p-21",
    "patientName": "وفاء محمد الجمال",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "12:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-462",
    "date": "2026-08-16",
    "patientId": "demo-p-170",
    "patientName": "هيثم وائل سليمان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "3:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-463",
    "date": "2026-08-16",
    "patientId": "demo-p-50",
    "patientName": "منى هشام رضوان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الركبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "",
    "recordedAt": "12:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-464",
    "date": "2026-08-17",
    "patientId": "demo-p-37",
    "patientName": "أيمن أحمد مراد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "12:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-465",
    "date": "2026-08-17",
    "patientId": "demo-p-33",
    "patientName": "معتز أحمد غنيم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "2:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-466",
    "date": "2026-08-17",
    "patientId": "demo-p-45",
    "patientName": "حسن عمر سالم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكاحل والقدم",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "",
    "recordedAt": "12:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-467",
    "date": "2026-08-17",
    "patientId": "demo-p-7",
    "patientName": "مصطفى كريم رضوان",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "9:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-468",
    "date": "2026-08-17",
    "patientId": "demo-p-157",
    "patientName": "منى حسين عثمان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "",
    "recordedAt": "3:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-469",
    "date": "2026-08-17",
    "patientId": "demo-p-20",
    "patientName": "خالد ماجد رمضان",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكاحل والقدم",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "6:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-470",
    "date": "2026-08-17",
    "patientId": "demo-p-25",
    "patientName": "فاطمة حسين سالم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "5:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-471",
    "date": "2026-08-17",
    "patientId": "demo-p-24",
    "patientName": "وفاء معتز البنا",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "4:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-472",
    "date": "2026-08-17",
    "patientId": "demo-p-146",
    "patientName": "عمرو أشرف موسى",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "10:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-473",
    "date": "2026-08-17",
    "patientId": "demo-p-141",
    "patientName": "عمر عمرو الجمال",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "7:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-474",
    "date": "2026-08-17",
    "patientId": "demo-p-45",
    "patientName": "حسن عمر سالم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "",
    "recordedAt": "2:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-475",
    "date": "2026-08-17",
    "patientId": "demo-p-130",
    "patientName": "شيرين إبراهيم سالم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "4:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-476",
    "date": "2026-08-17",
    "patientId": "demo-p-63",
    "patientName": "ياسر حسن رمضان",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "12:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-477",
    "date": "2026-08-18",
    "patientId": "demo-p-79",
    "patientName": "مصطفى إسلام عبد العزيز",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "",
    "recordedAt": "5:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-478",
    "date": "2026-08-18",
    "patientId": "demo-p-99",
    "patientName": "بسمة أشرف غنيم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "3:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-479",
    "date": "2026-08-18",
    "patientId": "demo-p-32",
    "patientName": "سلوى أحمد الجمال",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "",
    "recordedAt": "1:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-480",
    "date": "2026-08-18",
    "patientId": "demo-p-89",
    "patientName": "آية علي العطار",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 70,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "6:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-481",
    "date": "2026-08-18",
    "patientId": "demo-p-51",
    "patientName": "إسلام وليد عيسى",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "",
    "recordedAt": "3:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-482",
    "date": "2026-08-18",
    "patientId": "demo-p-28",
    "patientName": "عادل مصطفى زهران",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "4:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-483",
    "date": "2026-08-18",
    "patientId": "demo-p-138",
    "patientName": "حازم طارق حسام الدين",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "6:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-484",
    "date": "2026-08-18",
    "patientId": "demo-p-80",
    "patientName": "مروة هيثم عثمان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "12:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-485",
    "date": "2026-08-18",
    "patientId": "demo-p-103",
    "patientName": "دينا هيثم الجندي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الرقبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "3:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-486",
    "date": "2026-08-18",
    "patientId": "demo-p-173",
    "patientName": "إبراهيم تامر إبراهيم",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "",
    "recordedAt": "6:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-487",
    "date": "2026-08-18",
    "patientId": "demo-p-8",
    "patientName": "منار حسن موسى",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الرقبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "10:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-488",
    "date": "2026-08-18",
    "patientId": "demo-p-68",
    "patientName": "منى كريم إبراهيم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكاحل والقدم",
      "الفقرات القطنية / أسفل الظهر",
      "الركبة"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "12:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-489",
    "date": "2026-08-18",
    "patientId": "demo-p-131",
    "patientName": "عمر حسن البنا",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "6:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-490",
    "date": "2026-08-19",
    "patientId": "demo-p-119",
    "patientName": "هبة وائل جاد",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "8:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-491",
    "date": "2026-08-19",
    "patientId": "demo-p-14",
    "patientName": "هبة زياد البنا",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "3:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-492",
    "date": "2026-08-19",
    "patientId": "demo-p-89",
    "patientName": "آية علي العطار",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "12:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-493",
    "date": "2026-08-19",
    "patientId": "demo-p-25",
    "patientName": "فاطمة حسين سالم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "2:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-494",
    "date": "2026-08-19",
    "patientId": "demo-p-28",
    "patientName": "عادل مصطفى زهران",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "10:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-495",
    "date": "2026-08-19",
    "patientId": "demo-p-136",
    "patientName": "هند حازم الحداد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 70,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "11:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-496",
    "date": "2026-08-19",
    "patientId": "demo-p-69",
    "patientName": "وائل كريم الحداد",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "",
    "recordedAt": "7:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-497",
    "date": "2026-08-19",
    "patientId": "demo-p-107",
    "patientName": "محمد عادل الجمال",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "6:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-498",
    "date": "2026-08-19",
    "patientId": "demo-p-89",
    "patientName": "آية علي العطار",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "",
    "recordedAt": "11:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-499",
    "date": "2026-08-19",
    "patientId": "demo-p-64",
    "patientName": "هشام أشرف السيد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الرقبة",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "",
    "recordedAt": "10:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-500",
    "date": "2026-08-19",
    "patientId": "demo-p-139",
    "patientName": "محمود هيثم السيد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "7:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-501",
    "date": "2026-08-19",
    "patientId": "demo-p-164",
    "patientName": "دينا أيمن إبراهيم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 70,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "3:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-502",
    "date": "2026-08-19",
    "patientId": "demo-p-99",
    "patientName": "بسمة أشرف غنيم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "",
    "recordedAt": "12:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-503",
    "date": "2026-08-20",
    "patientId": "demo-p-164",
    "patientName": "دينا أيمن إبراهيم",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "8:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-504",
    "date": "2026-08-20",
    "patientId": "demo-p-59",
    "patientName": "هشام زياد السيد",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "",
    "recordedAt": "4:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-505",
    "date": "2026-08-20",
    "patientId": "demo-p-165",
    "patientName": "زياد ياسر سالم",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "10:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-506",
    "date": "2026-08-20",
    "patientId": "demo-p-1",
    "patientName": "دعاء شريف منصور",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "12:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-507",
    "date": "2026-08-20",
    "patientId": "demo-p-90",
    "patientName": "فاطمة وليد الجندي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "2:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-508",
    "date": "2026-08-20",
    "patientId": "demo-p-55",
    "patientName": "دينا عادل الجمال",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "12:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-509",
    "date": "2026-08-20",
    "patientId": "demo-p-76",
    "patientName": "هند سامح البدري",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "مفصل الكوع / اليد",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "4:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-510",
    "date": "2026-08-20",
    "patientId": "demo-p-116",
    "patientName": "سلوى وائل سالم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "11:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-511",
    "date": "2026-08-20",
    "patientId": "demo-p-12",
    "patientName": "معتز تامر عيسى",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "11:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-512",
    "date": "2026-08-20",
    "patientId": "demo-p-31",
    "patientName": "بسمة خالد مراد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "10:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-513",
    "date": "2026-08-21",
    "patientId": "demo-p-155",
    "patientName": "حسن حازم المهدي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "5:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-514",
    "date": "2026-08-21",
    "patientId": "demo-p-171",
    "patientName": "كريم تامر الشناوي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "6:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-515",
    "date": "2026-08-22",
    "patientId": "demo-p-141",
    "patientName": "عمر عمرو الجمال",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الركبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "",
    "recordedAt": "7:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-516",
    "date": "2026-08-22",
    "patientId": "demo-p-21",
    "patientName": "وفاء محمد الجمال",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "11:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-517",
    "date": "2026-08-22",
    "patientId": "demo-p-150",
    "patientName": "رانيا ياسر سليمان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "4:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-518",
    "date": "2026-08-22",
    "patientId": "demo-p-126",
    "patientName": "سامح علي سالم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "4:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-519",
    "date": "2026-08-22",
    "patientId": "demo-p-137",
    "patientName": "منار عادل الحداد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "12:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-520",
    "date": "2026-08-22",
    "patientId": "demo-p-155",
    "patientName": "حسن حازم المهدي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "11:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-521",
    "date": "2026-08-22",
    "patientId": "demo-p-44",
    "patientName": "ياسر وليد غنيم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "5:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-522",
    "date": "2026-08-22",
    "patientId": "demo-p-18",
    "patientName": "علي شريف عفيفي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "2:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-523",
    "date": "2026-08-23",
    "patientId": "demo-p-99",
    "patientName": "بسمة أشرف غنيم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "",
    "recordedAt": "10:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-524",
    "date": "2026-08-23",
    "patientId": "demo-p-66",
    "patientName": "مصطفى إبراهيم عيسى",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "12:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-525",
    "date": "2026-08-23",
    "patientId": "demo-p-67",
    "patientName": "ماجد مصطفى السيد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "8:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-526",
    "date": "2026-08-23",
    "patientId": "demo-p-38",
    "patientName": "حازم ياسر الشافعي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "7:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-527",
    "date": "2026-08-23",
    "patientId": "demo-p-9",
    "patientName": "شريف حسن قاسم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "10:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-528",
    "date": "2026-08-23",
    "patientId": "demo-p-131",
    "patientName": "عمر حسن البنا",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الكتف",
      "الركبة"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "11:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-529",
    "date": "2026-08-23",
    "patientId": "demo-p-99",
    "patientName": "بسمة أشرف غنيم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "1:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-530",
    "date": "2026-08-23",
    "patientId": "demo-p-88",
    "patientName": "سارة أيمن سالم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "11:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-531",
    "date": "2026-08-23",
    "patientId": "demo-p-161",
    "patientName": "مصطفى خالد رمضان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "6:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-532",
    "date": "2026-08-23",
    "patientId": "demo-p-11",
    "patientName": "حسن وليد الجمال",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "3:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-533",
    "date": "2026-08-23",
    "patientId": "demo-p-37",
    "patientName": "أيمن أحمد مراد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "4:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-534",
    "date": "2026-08-23",
    "patientId": "demo-p-120",
    "patientName": "دعاء أيمن الشافعي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "12:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-535",
    "date": "2026-08-24",
    "patientId": "demo-p-57",
    "patientName": "فاطمة محمد منصور",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "9:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-536",
    "date": "2026-08-24",
    "patientId": "demo-p-102",
    "patientName": "محمود هشام البدري",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "5:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-537",
    "date": "2026-08-24",
    "patientId": "demo-p-24",
    "patientName": "وفاء معتز البنا",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "12:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-538",
    "date": "2026-08-24",
    "patientId": "demo-p-35",
    "patientName": "سلوى حسين رمضان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "9:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-539",
    "date": "2026-08-24",
    "patientId": "demo-p-42",
    "patientName": "ندى حازم قاسم",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "6:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-540",
    "date": "2026-08-24",
    "patientId": "demo-p-107",
    "patientName": "محمد عادل الجمال",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "",
    "recordedAt": "4:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-541",
    "date": "2026-08-24",
    "patientId": "demo-p-166",
    "patientName": "وفاء إبراهيم سليمان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة",
      "الفقرات القطنية / أسفل الظهر",
      "الكتف"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "11:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-542",
    "date": "2026-08-24",
    "patientId": "demo-p-52",
    "patientName": "سارة عادل عوض",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "1:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-543",
    "date": "2026-08-24",
    "patientId": "demo-p-38",
    "patientName": "حازم ياسر الشافعي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "9:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-544",
    "date": "2026-08-24",
    "patientId": "demo-p-84",
    "patientName": "عادل حسين البدري",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "10:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-545",
    "date": "2026-08-25",
    "patientId": "demo-p-76",
    "patientName": "هند سامح البدري",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "11:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-546",
    "date": "2026-08-25",
    "patientId": "demo-p-184",
    "patientName": "زياد أشرف الشناوي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "4:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-547",
    "date": "2026-08-25",
    "patientId": "demo-p-151",
    "patientName": "سلمى هيثم عثمان",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "5:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-548",
    "date": "2026-08-25",
    "patientId": "demo-p-10",
    "patientName": "مروة زياد عبد العزيز",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "2:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-549",
    "date": "2026-08-25",
    "patientId": "demo-p-89",
    "patientName": "آية علي العطار",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "1:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-550",
    "date": "2026-08-25",
    "patientId": "demo-p-85",
    "patientName": "سلمى مصطفى مراد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "7:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-551",
    "date": "2026-08-25",
    "patientId": "demo-p-103",
    "patientName": "دينا هيثم الجندي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "11:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-552",
    "date": "2026-08-25",
    "patientId": "demo-p-109",
    "patientName": "سارة حسين زكي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف",
      "الكاحل والقدم",
      "الرقبة"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "3:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-553",
    "date": "2026-08-25",
    "patientId": "demo-p-64",
    "patientName": "هشام أشرف السيد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الرقبة",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "4:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-554",
    "date": "2026-08-25",
    "patientId": "demo-p-115",
    "patientName": "ندى كريم زكي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "",
    "recordedAt": "2:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-555",
    "date": "2026-08-25",
    "patientId": "demo-p-139",
    "patientName": "محمود هيثم السيد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "9:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-556",
    "date": "2026-08-25",
    "patientId": "demo-p-124",
    "patientName": "تامر مصطفى الشافعي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "",
    "recordedAt": "11:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-557",
    "date": "2026-08-25",
    "patientId": "demo-p-174",
    "patientName": "محمود عادل عبد العزيز",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "4:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-558",
    "date": "2026-08-25",
    "patientId": "demo-p-168",
    "patientName": "خالد إسلام توفيق",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "",
    "recordedAt": "9:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-559",
    "date": "2026-08-26",
    "patientId": "demo-p-163",
    "patientName": "مروة إسلام المهدي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "",
    "recordedAt": "1:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-560",
    "date": "2026-08-26",
    "patientId": "demo-p-152",
    "patientName": "حنان عادل قاسم",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "4:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-561",
    "date": "2026-08-26",
    "patientId": "demo-p-38",
    "patientName": "حازم ياسر الشافعي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الرقبة",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "4:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-562",
    "date": "2026-08-26",
    "patientId": "demo-p-151",
    "patientName": "سلمى هيثم عثمان",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "1:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-563",
    "date": "2026-08-26",
    "patientId": "demo-p-76",
    "patientName": "هند سامح البدري",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "6:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-564",
    "date": "2026-08-26",
    "patientId": "demo-p-76",
    "patientName": "هند سامح البدري",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الفقرات القطنية / أسفل الظهر",
      "الركبة"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "2:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-565",
    "date": "2026-08-26",
    "patientId": "demo-p-51",
    "patientName": "إسلام وليد عيسى",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "8:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-566",
    "date": "2026-08-26",
    "patientId": "demo-p-81",
    "patientName": "منار تامر رمضان",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الرقبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "3:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-567",
    "date": "2026-08-26",
    "patientId": "demo-p-164",
    "patientName": "دينا أيمن إبراهيم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "6:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-568",
    "date": "2026-08-26",
    "patientId": "demo-p-59",
    "patientName": "هشام زياد السيد",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة",
      "الفقرات القطنية / أسفل الظهر",
      "الكتف"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "4:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-569",
    "date": "2026-08-27",
    "patientId": "demo-p-96",
    "patientName": "حازم ياسر زكي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "2:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-570",
    "date": "2026-08-27",
    "patientId": "demo-p-43",
    "patientName": "مها هشام الحداد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم",
      "الرقبة",
      "الركبة"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "7:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-571",
    "date": "2026-08-27",
    "patientId": "demo-p-87",
    "patientName": "شيرين علي الجندي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "6:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-572",
    "date": "2026-08-27",
    "patientId": "demo-p-5",
    "patientName": "سامح شريف عفيفي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "2:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-573",
    "date": "2026-08-27",
    "patientId": "demo-p-73",
    "patientName": "إبراهيم محمد عبد العزيز",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "",
    "recordedAt": "7:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-574",
    "date": "2026-08-27",
    "patientId": "demo-p-7",
    "patientName": "مصطفى كريم رضوان",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "9:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-575",
    "date": "2026-08-27",
    "patientId": "demo-p-152",
    "patientName": "حنان عادل قاسم",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "10:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-576",
    "date": "2026-08-28",
    "patientId": "demo-p-73",
    "patientName": "إبراهيم محمد عبد العزيز",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "12:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-577",
    "date": "2026-08-28",
    "patientId": "demo-p-67",
    "patientName": "ماجد مصطفى السيد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "8:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-578",
    "date": "2026-08-28",
    "patientId": "demo-p-179",
    "patientName": "مصطفى أيمن البنا",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "8:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-579",
    "date": "2026-08-29",
    "patientId": "demo-p-12",
    "patientName": "معتز تامر عيسى",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "1:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-580",
    "date": "2026-08-29",
    "patientId": "demo-p-165",
    "patientName": "زياد ياسر سالم",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "12:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-581",
    "date": "2026-08-29",
    "patientId": "demo-p-96",
    "patientName": "حازم ياسر زكي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "4:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-582",
    "date": "2026-08-29",
    "patientId": "demo-p-20",
    "patientName": "خالد ماجد رمضان",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الرقبة",
      "الركبة",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "12:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-583",
    "date": "2026-08-29",
    "patientId": "demo-p-6",
    "patientName": "إبراهيم حازم البنا",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 50,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "12:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-584",
    "date": "2026-08-29",
    "patientId": "demo-p-98",
    "patientName": "هبة كريم زهران",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "7:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-585",
    "date": "2026-08-29",
    "patientId": "demo-p-26",
    "patientName": "علي عمرو البنا",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "3:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-586",
    "date": "2026-08-29",
    "patientId": "demo-p-139",
    "patientName": "محمود هيثم السيد",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "5:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-587",
    "date": "2026-08-30",
    "patientId": "demo-p-42",
    "patientName": "ندى حازم قاسم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "",
    "recordedAt": "7:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-588",
    "date": "2026-08-30",
    "patientId": "demo-p-143",
    "patientName": "مصطفى هيثم الشافعي",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "11:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-589",
    "date": "2026-08-30",
    "patientId": "demo-p-119",
    "patientName": "هبة وائل جاد",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "7:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-590",
    "date": "2026-08-30",
    "patientId": "demo-p-95",
    "patientName": "طارق تامر جاد",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "1:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-591",
    "date": "2026-08-30",
    "patientId": "demo-p-173",
    "patientName": "إبراهيم تامر إبراهيم",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم",
      "الكتف"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "3:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-592",
    "date": "2026-08-30",
    "patientId": "demo-p-132",
    "patientName": "وليد حازم عوض",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "",
    "recordedAt": "1:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-593",
    "date": "2026-08-30",
    "patientId": "demo-p-42",
    "patientName": "ندى حازم قاسم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "11:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-594",
    "date": "2026-08-30",
    "patientId": "demo-p-131",
    "patientName": "عمر حسن البنا",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "1:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-595",
    "date": "2026-08-30",
    "patientId": "demo-p-32",
    "patientName": "سلوى أحمد الجمال",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "4:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-596",
    "date": "2026-08-30",
    "patientId": "demo-p-44",
    "patientName": "ياسر وليد غنيم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "5:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-597",
    "date": "2026-08-30",
    "patientId": "demo-p-27",
    "patientName": "شيرين مصطفى حمدي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "12:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-598",
    "date": "2026-08-30",
    "patientId": "demo-p-51",
    "patientName": "إسلام وليد عيسى",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكاحل والقدم",
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "10:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-599",
    "date": "2026-08-30",
    "patientId": "demo-p-72",
    "patientName": "محمد سامح زهران",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 100,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "4:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-600",
    "date": "2026-08-31",
    "patientId": "demo-p-101",
    "patientName": "ياسر وائل قاسم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "2:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-601",
    "date": "2026-08-31",
    "patientId": "demo-p-173",
    "patientName": "إبراهيم تامر إبراهيم",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "",
    "recordedAt": "1:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-602",
    "date": "2026-08-31",
    "patientId": "demo-p-17",
    "patientName": "مصطفى حسين عوض",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة",
      "الكتف",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "7:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-603",
    "date": "2026-08-31",
    "patientId": "demo-p-178",
    "patientName": "معتز إسلام الجندي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 350,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "5:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-604",
    "date": "2026-08-31",
    "patientId": "demo-p-66",
    "patientName": "مصطفى إبراهيم عيسى",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف",
      "الكاحل والقدم",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 3,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "4:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-605",
    "date": "2026-08-31",
    "patientId": "demo-p-147",
    "patientName": "مصطفى هيثم النجار",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "8:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-606",
    "date": "2026-08-31",
    "patientId": "demo-p-94",
    "patientName": "بسمة حازم زهران",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "",
    "recordedAt": "7:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-607",
    "date": "2026-08-31",
    "patientId": "demo-p-44",
    "patientName": "ياسر وليد غنيم",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "10:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-608",
    "date": "2026-08-31",
    "patientId": "demo-p-5",
    "patientName": "سامح شريف عفيفي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الرقبة",
      "الكاحل والقدم",
      "الركبة"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "1:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-609",
    "date": "2026-08-31",
    "patientId": "demo-p-162",
    "patientName": "إيمان يوسف رمضان",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف",
      "الركبة",
      "الرقبة"
    ],
    "bodyPartsCount": 3,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "3:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-610",
    "date": "2026-08-31",
    "patientId": "demo-p-128",
    "patientName": "سلوى معتز رضوان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 70,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "7:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-611",
    "date": "2026-08-31",
    "patientId": "demo-p-60",
    "patientName": "منار إسلام زكي",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "",
    "recordedAt": "12:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-612",
    "date": "2026-08-31",
    "patientId": "demo-p-174",
    "patientName": "محمود عادل عبد العزيز",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "مفصل الكوع / اليد",
      "الرقبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "",
    "recordedAt": "9:15 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-613",
    "date": "2026-08-31",
    "patientId": "demo-p-177",
    "patientName": "معتز زياد عبد العزيز",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "3:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-614",
    "date": "2026-09-01",
    "patientId": "demo-p-122",
    "patientName": "أميرة محمد إبراهيم",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 0,
    "notes": "",
    "recordedAt": "9:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-615",
    "date": "2026-09-01",
    "patientId": "demo-p-57",
    "patientName": "فاطمة محمد منصور",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف",
      "الركبة"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 0,
    "notes": "",
    "recordedAt": "5:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-616",
    "date": "2026-09-01",
    "patientId": "demo-p-155",
    "patientName": "حسن حازم المهدي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "مفصل الكوع / اليد"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "8:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-617",
    "date": "2026-09-01",
    "patientId": "demo-p-26",
    "patientName": "علي عمرو البنا",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الكتف",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "",
    "recordedAt": "6:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-618",
    "date": "2026-09-01",
    "patientId": "demo-p-158",
    "patientName": "خالد عمرو الشافعي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "11:00 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-619",
    "date": "2026-09-01",
    "patientId": "demo-p-128",
    "patientName": "سلوى معتز رضوان",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "نكست كير (NextCare)",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "2:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-620",
    "date": "2026-09-01",
    "patientId": "demo-p-165",
    "patientName": "زياد ياسر سالم",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 200,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "8:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-621",
    "date": "2026-09-01",
    "patientId": "demo-p-112",
    "patientName": "معتز أيمن إبراهيم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "عناية الرعاية الصحية (Enaya)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "4:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-622",
    "date": "2026-09-01",
    "patientId": "demo-p-4",
    "patientName": "شيرين معتز موسى",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 250,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "4:00 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-623",
    "date": "2026-09-01",
    "patientId": "demo-p-177",
    "patientName": "معتز زياد عبد العزيز",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 30,
    "notes": "جلسة علاج طبيعي منتظمة",
    "recordedAt": "10:45 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-624",
    "date": "2026-09-01",
    "patientId": "demo-p-55",
    "patientName": "دينا عادل الجمال",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أليانز (Allianz)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "8:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-625",
    "date": "2026-09-01",
    "patientId": "demo-p-2",
    "patientName": "ندى علي قاسم",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 400,
    "notes": "",
    "recordedAt": "10:30 ص",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-626",
    "date": "2026-09-01",
    "patientId": "demo-p-149",
    "patientName": "زياد أشرف الحداد",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "2:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-627",
    "date": "2026-09-01",
    "patientId": "demo-p-20",
    "patientName": "خالد ماجد رمضان",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "1:45 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-628",
    "date": "2026-09-02",
    "patientId": "demo-p-100",
    "patientName": "زياد علي الشافعي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الكتف",
      "الكاحل والقدم"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "أكسا (AXA)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "تحسن ملحوظ في المدى الحركي",
    "recordedAt": "4:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-629",
    "date": "2026-09-02",
    "patientId": "demo-p-181",
    "patientName": "إيمان معتز عفيفي",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "5:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-630",
    "date": "2026-09-02",
    "patientId": "demo-p-19",
    "patientName": "يارا ياسر عوض",
    "doctor": "د. سارة عادل",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "cash",
    "insuranceName": "",
    "contractType": "",
    "amountPaid": 300,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "6:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-631",
    "date": "2026-09-02",
    "patientId": "demo-p-118",
    "patientName": "معتز شريف عيسى",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "بوبا (Bupa)",
    "contractType": "direct",
    "amountPaid": 30,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "12:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-632",
    "date": "2026-09-02",
    "patientId": "demo-p-164",
    "patientName": "دينا أيمن إبراهيم",
    "doctor": "د. مصطفى محمود",
    "bodyParts": [
      "الرقبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "المهندس للتأمين",
    "contractType": "indirect",
    "amountPaid": 100,
    "notes": "",
    "recordedAt": "3:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-633",
    "date": "2026-09-02",
    "patientId": "demo-p-58",
    "patientName": "وفاء سامح الشناوي",
    "doctor": "د. كريم إبراهيم",
    "bodyParts": [
      "الركبة"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 50,
    "notes": "",
    "recordedAt": "4:15 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-634",
    "date": "2026-09-02",
    "patientId": "demo-p-169",
    "patientName": "سلوى هيثم عيسى",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الرقبة",
      "الفقرات القطنية / أسفل الظهر"
    ],
    "bodyPartsCount": 2,
    "payType": "insurance",
    "insuranceName": "مصر للتأمين",
    "contractType": "indirect",
    "amountPaid": 70,
    "notes": "استجابة ممتازة للعلاج اليدوي",
    "recordedAt": "6:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  },
  {
    "id": "demo-sess-635",
    "date": "2026-09-02",
    "patientId": "demo-p-81",
    "patientName": "منار تامر رمضان",
    "doctor": "د. أحمد خليل",
    "bodyParts": [
      "الكتف"
    ],
    "bodyPartsCount": 1,
    "payType": "insurance",
    "insuranceName": "ميتلايف (MetLife)",
    "contractType": "direct",
    "amountPaid": 70,
    "notes": "تكرار برنامج التمارين",
    "recordedAt": "7:30 م",
    "recordedBy": "أ. منار خالد (استقبال)"
  }
];

export const DEMO_EXPENSES = [

  {
    "id": "demo-exp-today-1",
    "date": "2026-09-03",
    "title": "شراء عبوات جل التراساوند وأشرطة لاصقة",
    "amount": 350,
    "recordedBy": "أ. منار خالد (استقبال)",
    "time": "10:30 ص"
  },
  {
    "id": "demo-exp-today-2",
    "date": "2026-09-03",
    "title": "ضيافة وعصائر ومياه للعيادة",
    "amount": 120,
    "recordedBy": "د. مصطفى محمود",
    "time": "01:00 م"
  }
,
  {
    "id": "demo-exp-1",
    "date": "2026-07-02",
    "title": "ضيافة ومشروبات للمرضى والأطباء",
    "amount": 180,
    "recordedBy": "د. مصطفى محمود (مدير المركز)",
    "time": "12:00 م"
  },
  {
    "id": "demo-exp-2",
    "date": "2026-07-04",
    "title": "فواتير كهرباء وإنترنت ومياه العيادة",
    "amount": 1200,
    "recordedBy": "أ. منار خالد (استقبال)",
    "time": "10:00 م"
  },
  {
    "id": "demo-exp-3",
    "date": "2026-07-09",
    "title": "ضيافة ومشروبات للمرضى والأطباء",
    "amount": 80,
    "recordedBy": "د. مصطفى محمود (مدير المركز)",
    "time": "16:00 م"
  },
  {
    "id": "demo-exp-4",
    "date": "2026-07-11",
    "title": "شراء جل التراساوند ومستلزمات علاج طبيعي",
    "amount": 250,
    "recordedBy": "أ. منار خالد (استقبال)",
    "time": "12:00 م"
  },
  {
    "id": "demo-exp-5",
    "date": "2026-07-12",
    "title": "أشرطة لاصقة Kinesio Tape وأقطاب كهرباء TENS",
    "amount": 300,
    "recordedBy": "د. مصطفى محمود (مدير المركز)",
    "time": "15:00 م"
  },
  {
    "id": "demo-exp-6",
    "date": "2026-07-15",
    "title": "شراء جل التراساوند ومستلزمات علاج طبيعي",
    "amount": 450,
    "recordedBy": "أ. منار خالد (استقبال)",
    "time": "16:00 م"
  },
  {
    "id": "demo-exp-7",
    "date": "2026-07-20",
    "title": "ضيافة ومشروبات للمرضى والأطباء",
    "amount": 80,
    "recordedBy": "أ. منار خالد (استقبال)",
    "time": "13:00 م"
  },
  {
    "id": "demo-exp-8",
    "date": "2026-07-22",
    "title": "أشرطة لاصقة Kinesio Tape وأقطاب كهرباء TENS",
    "amount": 500,
    "recordedBy": "أ. منار خالد (استقبال)",
    "time": "11:00 م"
  },
  {
    "id": "demo-exp-9",
    "date": "2026-07-27",
    "title": "أدوات نظافة ومطهرات وكحول طبي للعيادة",
    "amount": 250,
    "recordedBy": "أ. منار خالد (استقبال)",
    "time": "11:00 م"
  },
  {
    "id": "demo-exp-10",
    "date": "2026-07-29",
    "title": "شراء جل التراساوند ومستلزمات علاج طبيعي",
    "amount": 250,
    "recordedBy": "د. مصطفى محمود (مدير المركز)",
    "time": "14:00 م"
  },
  {
    "id": "demo-exp-11",
    "date": "2026-07-30",
    "title": "مفارش طبية للاستخدام مرة واحدة (Disposable)",
    "amount": 200,
    "recordedBy": "أ. منار خالد (استقبال)",
    "time": "12:00 م"
  },
  {
    "id": "demo-exp-12",
    "date": "2026-07-31",
    "title": "ضيافة ومشروبات للمرضى والأطباء",
    "amount": 180,
    "recordedBy": "أ. منار خالد (استقبال)",
    "time": "13:00 م"
  },
  {
    "id": "demo-exp-13",
    "date": "2026-08-02",
    "title": "شراء جل التراساوند ومستلزمات علاج طبيعي",
    "amount": 450,
    "recordedBy": "أ. منار خالد (استقبال)",
    "time": "13:00 م"
  },
  {
    "id": "demo-exp-14",
    "date": "2026-08-03",
    "title": "مفارش طبية للاستخدام مرة واحدة (Disposable)",
    "amount": 400,
    "recordedBy": "أ. منار خالد (استقبال)",
    "time": "10:00 م"
  },
  {
    "id": "demo-exp-15",
    "date": "2026-08-04",
    "title": "فواتير كهرباء وإنترنت ومياه العيادة",
    "amount": 1600,
    "recordedBy": "أ. منار خالد (استقبال)",
    "time": "10:00 م"
  },
  {
    "id": "demo-exp-16",
    "date": "2026-08-05",
    "title": "صيانة جهاز الشد الكهربائي والأجهزة",
    "amount": 900,
    "recordedBy": "د. مصطفى محمود (مدير المركز)",
    "time": "15:00 م"
  },
  {
    "id": "demo-exp-17",
    "date": "2026-08-06",
    "title": "ضيافة ومشروبات للمرضى والأطباء",
    "amount": 80,
    "recordedBy": "أ. منار خالد (استقبال)",
    "time": "10:00 م"
  },
  {
    "id": "demo-exp-18",
    "date": "2026-08-08",
    "title": "أشرطة لاصقة Kinesio Tape وأقطاب كهرباء TENS",
    "amount": 500,
    "recordedBy": "د. مصطفى محمود (مدير المركز)",
    "time": "10:00 م"
  },
  {
    "id": "demo-exp-19",
    "date": "2026-08-09",
    "title": "ضيافة ومشروبات للمرضى والأطباء",
    "amount": 120,
    "recordedBy": "د. مصطفى محمود (مدير المركز)",
    "time": "15:00 م"
  },
  {
    "id": "demo-exp-20",
    "date": "2026-08-11",
    "title": "صيانة جهاز الشد الكهربائي والأجهزة",
    "amount": 350,
    "recordedBy": "د. مصطفى محمود (مدير المركز)",
    "time": "15:00 م"
  },
  {
    "id": "demo-exp-21",
    "date": "2026-08-12",
    "title": "فواتير كهرباء وإنترنت ومياه العيادة",
    "amount": 1600,
    "recordedBy": "د. مصطفى محمود (مدير المركز)",
    "time": "14:00 م"
  },
  {
    "id": "demo-exp-22",
    "date": "2026-08-13",
    "title": "أشرطة لاصقة Kinesio Tape وأقطاب كهرباء TENS",
    "amount": 300,
    "recordedBy": "أ. منار خالد (استقبال)",
    "time": "11:00 م"
  },
  {
    "id": "demo-exp-23",
    "date": "2026-08-16",
    "title": "مفارش طبية للاستخدام مرة واحدة (Disposable)",
    "amount": 400,
    "recordedBy": "أ. منار خالد (استقبال)",
    "time": "17:00 م"
  },
  {
    "id": "demo-exp-24",
    "date": "2026-08-20",
    "title": "فواتير كهرباء وإنترنت ومياه العيادة",
    "amount": 1200,
    "recordedBy": "أ. منار خالد (استقبال)",
    "time": "12:00 م"
  },
  {
    "id": "demo-exp-25",
    "date": "2026-08-21",
    "title": "ضيافة ومشروبات للمرضى والأطباء",
    "amount": 180,
    "recordedBy": "أ. منار خالد (استقبال)",
    "time": "11:00 م"
  },
  {
    "id": "demo-exp-26",
    "date": "2026-08-22",
    "title": "فواتير كهرباء وإنترنت ومياه العيادة",
    "amount": 1600,
    "recordedBy": "د. مصطفى محمود (مدير المركز)",
    "time": "11:00 م"
  },
  {
    "id": "demo-exp-27",
    "date": "2026-08-25",
    "title": "ضيافة ومشروبات للمرضى والأطباء",
    "amount": 80,
    "recordedBy": "أ. منار خالد (استقبال)",
    "time": "10:00 م"
  },
  {
    "id": "demo-exp-28",
    "date": "2026-08-28",
    "title": "ضيافة ومشروبات للمرضى والأطباء",
    "amount": 80,
    "recordedBy": "د. مصطفى محمود (مدير المركز)",
    "time": "17:00 م"
  },
  {
    "id": "demo-exp-29",
    "date": "2026-08-30",
    "title": "مفارش طبية للاستخدام مرة واحدة (Disposable)",
    "amount": 200,
    "recordedBy": "أ. منار خالد (استقبال)",
    "time": "16:00 م"
  },
  {
    "id": "demo-exp-30",
    "date": "2026-08-31",
    "title": "فواتير كهرباء وإنترنت ومياه العيادة",
    "amount": 1200,
    "recordedBy": "د. مصطفى محمود (مدير المركز)",
    "time": "14:00 م"
  }
];

export const DEMO_USERS = [
  { id: 'u-demo-admin', name: 'د. مصطفى محمود', email: 'admin@physiocare.demo', role: 'admin' },
  { id: 'u-demo-doc1', name: 'د. أحمد خليل', email: 'ahmed@physiocare.demo', role: 'doctor' },
  { id: 'u-demo-doc2', name: 'د. سارة عادل', email: 'sara@physiocare.demo', role: 'doctor' },
  { id: 'u-demo-doc3', name: 'د. كريم إبراهيم', email: 'karim@physiocare.demo', role: 'doctor' },
  { id: 'u-demo-rec', name: 'أ. منار خالد', email: 'rec@physiocare.demo', role: 'receptionist' }
];
