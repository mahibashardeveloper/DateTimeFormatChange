(function($) {

    $.fn.formatDate = function(format) {

        const date = new Date();

        if (format === "YYYY-MM-DD") {

            return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getHours() % 12 + ":" + date.getMinutes();

        } else if (format === "MM-DD-YYYY") {

            return (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear() + "-" + date.getHours() % 12 + ":" + date.getMinutes();

        } else if (format === "DD-MM-YYYY") {

            return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + "-" + date.getHours() % 12 + ":" + date.getMinutes();

        } else {

            throw new Error("Invalid date format");

        }

    };

})(jQuery);
