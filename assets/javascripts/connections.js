jQuery(document).ready(function() {
  jQuery("#printer").connections({ to: "#logo-1", "class": "connection-red" });
  jQuery("#printer").connections({ to: "#logo-2", "class": "connection-orange" });
  jQuery("#printer").connections({ to: "#logo-3", "class": "connection-yellow" });
  jQuery("#printer").connections({ to: "#logo-4", "class": "connection-green" });
  jQuery("#printer").connections({ to: "#logo-5", "class": "connection-blue" });
  jQuery("#printer").connections({ to: "#logo-6", "class": "connection-purple" });

  jQuery(".row.printer").css("padding-top", "2rem");
});