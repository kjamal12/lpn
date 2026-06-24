console.log("JS LOADED");
/* =========================
   ✅ EMAILJS INITIALIZATION
========================= */
(function () {
  emailjs.init("3kWy16lx589aoox8p");
})();


/* =========================
   ✅ FORM SUBMISSION HANDLER
========================= */
function sendEmail(form, e) {
  e.preventDefault();

  emailjs.sendForm("service_lnm58ed", "template_q935p51", form)
    .then(function () {
      alert("✅ Successfully submitted!");
      form.reset();
    })
    .catch(function (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Submission failed. Please try again.");
    });
}


/* =========================
   ✅ VOLUNTEER ROLE DROPDOWN
========================= */
function updateRoles() {
  const type = document.getElementById("type");
  const role = document.getElementById("role");

  if (!type || !role) return;

  const selected = type.value;

  role.innerHTML = '<option value="">Select Role</option>';

  let options = [];

  if (selected === "Media") {
    options = [
      "Social Media Host",
      "Podcast Host",
      "Social Media Editor",
      "Camera Person",
      "Podcast Producer",
      "Podcast Editor"
    ];
  }

  if (selected === "Campus") {
    options = [
      "Campus Lead",
      "Campus Member"
    ];
  }

  options.forEach(item => {
    const opt = document.createElement("option");
    opt.value = item;
    opt.textContent = item;
    role.appendChild(opt);
  });
}


/* =========================
   ✅ AUTO INIT
========================= */
document.addEventListener("DOMContentLoaded", function () {
  updateRoles();
});


/* =========================
   ✅ EVENT FILTER SYSTEM
========================= */
function filterEvents(campus, el) {
  const cards = document.querySelectorAll(".event-card");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => btn.classList.remove("active"));
  if (el) el.classList.add("active");

  cards.forEach(card => {
    if (campus === "all" || card.dataset.campus === campus) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}


/* =========================
   ✅ EVENT DATA
========================= */
const events = {
  roundtable: {
    title: "Youth Roundtable - UofT",
    desc: "A deep-dive discussion event focused on major issues affecting students and young professionals."
  },
  networking: {
    title: "Networking Night - Laurier",
    desc: "Build connections with peers and professionals in a structured networking session."
  },
  workshop: {
    title: "Career Skills Workshop - Waterloo",
    desc: "Hands-on training session covering resume writing, job applications, and interviews."
  },
  speaker: {
    title: "Speaker Series",
    desc: "Hear from leaders in industry and public life about career paths and opportunities."
  }
};


/* =========================
   ✅ MODAL CONTROLS
========================= */
function openEvent(eventId) {
  const modal = document.getElementById("eventModal");

  if (events[eventId] && modal) {
    document.getElementById("modalTitle").innerText = events[eventId].title;
    document.getElementById("modalDesc").innerText = events[eventId].desc;
    modal.style.display = "flex";
  }
}

function closeEvent() {
  const modal = document.getElementById("eventModal");
  if (modal) modal.style.display = "none";
}
function showTeam(type, el) {
  // hide both sections
  document.getElementById("campus-team").classList.remove("active");
  document.getElementById("media-team").classList.remove("active");

  // remove active from all buttons
  document.querySelectorAll(".toggle-btn").forEach(btn =>
    btn.classList.remove("active")
  );

  // show selected section
  if (type === "campus") {
    document.getElementById("campus-team").classList.add("active");
  } else {
    document.getElementById("media-team").classList.add("active");
  }

  // highlight clicked button
  el.classList.add("active");
}
function showMember(name, el) {

  const data = {
    danica: {
      name: "Danica Ras",
      role: "Chief Programs and Partnerships Officer (CPPO)",
      bio: "Danica Ras is a founder of LaunchPoint Network, where she contributes to organizational development and youth engagement initiatives that support the organization’s growth and impact. She is a Political Science student entering her second year at Wilfrid Laurier University and is actively involved in campus life through a range of student organizations and leadership activities. Through her work with young people, Danica has developed a strong understanding of the challenges facing youth employment. She is committed to expanding access to opportunity, strengthening networks, and helping students navigate clear and practical pathways to career success.",
      email: "mailto:danica@launchpointnet.ca"
    },

    khalil: {
      name: "Khalil Jamal",
      role: "Chief Operations Officer (COO)",
      bio: "Khalil Jamal is a founder of LaunchPoint Network, where he leads organizational development, corporate governance, and execution to support the organization’s long-term growth and institutional impact. He brings experience across government and stakeholder engagement, with a focus on data-driven campaigns and city-wide grassroots mobilization. Khalil has a track record of building high-performing teams, strengthening governance structures, and advancing youth leadership through scalable, student-driven initiatives. He is currently entering his second year of law school at the University of Windsor. .",
      email: "mailto:khalil@launchpointnet.ca"
    },

    conner: {
      name: "Conner Andrews",
      role: "Chief Executive Officer (CEO)",
      bio: "Conner Andrews is a founder of LaunchPoint Network, where he leads institutional strategy, external positioning, and partnership development to drive long-term growth and impact. He brings experience in public affairs, strategic communications, and stakeholder engagement, including work at the ministerial level within the Ontario government. Conner has led high-impact initiatives across communications, organizing, and youth engagement, with a focus on building scalable platforms that connect young people to opportunity. He is a graduate of the University of Toronto and is focused on advancing innovative, youth-driven solutions in workforce development and civic engagement. ",
      email: "mailto:conner@launchpointnet.ca"
    }
  };

  document.getElementById("name").innerText = data[name].name;
  document.getElementById("role").innerText = data[name].role;
  document.getElementById("bio").innerText = data[name].bio;
 
const emailEl = document.getElementById("email");
  emailEl.href = data[name].email;

  // ✅ SHOW EMAIL when a founder is clicked
  emailEl.style.display = "inline-flex";

  // Active highlight
  document.querySelectorAll(".team-card").forEach(c =>
    c.classList.remove("active")
  );


  el.classList.add("active");
}

function showPath(type, el) {

  const data = {
    pre: {
      title: "Pre-University",
      text: "Early exposure helps students build direction before entering higher education.",
      programs: [
        "High school outreach",
        "Intro leadership workshops",
        "Career awareness sessions"
      ]
    },

    uni: {
      title: "University",
      text: "Students gain real experience through leadership roles, media, and campus organizing.",
      programs: [
        "Campus leadership roles",
        "Media team involvement",
        "Networking events"
      ]
    },

    post: {
      title: "Post-University",
      text: "We help graduates transition into careers through mentorship, opportunities, and connections.",
      programs: [
        "Career placement support",
        "Mentorship programs",
        "Alumni network access"
      ]
    }
  };

  // update text
  document.getElementById("path-title").innerText = data[type].title;
  document.getElementById("path-text").innerText = data[type].text;

  // update list
  const list = document.getElementById("path-programs");
  list.innerHTML = "";

  data[type].programs.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });

  // highlight active box
  document.querySelectorAll(".path-box").forEach(box =>
    box.classList.remove("active")
  );

  el.classList.add("active");
}
function showForm(type) {

  // hide all forms
  document.querySelectorAll(".join-step").forEach(el => {
    el.classList.remove("active");
  });

  // show selected form
  document.getElementById(type + "-form").classList.add("active");
}
function updateVolunteerRoles() {

  const roles = {
    media: [
      "Podcast Host",
      "Podcast Editor",
      "Podcast Producer",
      "Social Media Editor",
      "Social Media Host",
      "Camera Person"
    ],
    campus: [
      "Regional Leader",
      "Campus Leader",
      "Event Coordinator",
      "Recruitment Coordinator",
      "Finance Coordinator"
    ]
  };

  const area = document.getElementById("volunteer-area").value;
  const roleSelect = document.getElementById("volunteer-role");

  roleSelect.innerHTML = "";

  roles[area]?.forEach(r => {
    const option = document.createElement("option");
    option.textContent = r;
    option.value = r;
    roleSelect.appendChild(option);
  });
}

function toggleDrawer(name) {
  const drawer = document.getElementById(name + "-drawer");

  if (!drawer) {
    console.error("Drawer not found:", name + "-drawer");
    return;
  }

  const isOpen = drawer.classList.contains("open");

  // CLOSE if already open
  if (isOpen) {
    drawer.classList.remove("open");
    return;
  }

  // CLOSE all other drawers (accordion behavior)
  document.querySelectorAll(".drawer").forEach(d => {
    d.classList.remove("open");
  });

  // OPEN selected drawer
  drawer.classList.add("open");

  // Smooth scroll into view (safe + subtle positioning)
  setTimeout(() => {
    drawer.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, 50);
}

document.addEventListener("DOMContentLoaded", () => {

  const button = document.querySelector(".footer-btn");
  const input = document.querySelector(".footer-input");

  if (!button || !input) return;

  button.addEventListener("click", () => {

    const email = input.value.trim();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    emailjs.send(
      "service_lnm58ed",
      "template_oaeyjvl",
      {
        email: email
      }
    )
    .then(() => {
      alert("✅ Thank you for subscribing!");
      input.value = "";
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("❌ Subscription failed. Please try again.");
    });

  });

});
/* ==========================================
   EMAILJS INITIALIZATION
========================================== */

(function () {
    emailjs.init({
        publicKey: "3kWy16lx589aoox8p"
    });
})();

/* ==========================================
   JOIN FORM SUBMISSION
========================================== */

function sendEmail(form, event) {

    event.preventDefault();

    const submitButton = form.querySelector("button[type='submit']");
    const originalText = submitButton.innerHTML;

    submitButton.disabled = true;
    submitButton.innerHTML = "Submitting...";

    emailjs.sendForm(
        "service_lnm58ed",
        "template_q935p51",
        form
    )
    .then(function () {

        alert("✅ Thank you for joining LaunchPoint Network! We will be in touch soon.");

        form.reset();

        submitButton.disabled = false;
        submitButton.innerHTML = originalText;

    })
    .catch(function (error) {

        console.error("EmailJS Error:", error);

        alert("This form is not working. Please email us at info@launchpointnet.ca");

        submitButton.disabled = false;
        submitButton.innerHTML = originalText;

    });

}