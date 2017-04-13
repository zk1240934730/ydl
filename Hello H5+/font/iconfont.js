;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-tongzhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M631.265826 913.343761 231.884766 683.292248 113.698017 683.292248c-19.436678 0-35.247782-15.826454-35.247782-35.263132L78.450235 375.318014c0-19.451004 15.812127-35.269271 35.247782-35.269271l118.185726 0 399.382083-230.087329L631.265826 913.343761zM113.698017 373.046275c-1.240247 0-2.25639 1.023306-2.25639 2.270716l0 272.712125c0 1.213641 1.029446 2.257413 2.25639 2.257413l127.015835 0 357.547279 205.960839 0-689.196725L240.713852 373.046275 113.698017 373.046275z"  ></path>' +
    '' +
    '<path d="M219.810776 356.543416l32.991392 0 0 310.24495-32.991392 0 0-310.24495Z"  ></path>' +
    '' +
    '<path d="M746.193345 631.80869l-14.373359-29.704532c37.842887-18.280342 61.34209-55.601342 61.34209-97.430006 0-41.834804-23.499204-79.171154-61.313437-97.43717l14.33038-29.711695c48.577369 23.441898 79.988776 73.352635 79.988776 127.148865C826.167794 559.281863 795.517727 607.999424 746.193345 631.80869z"  ></path>' +
    '' +
    '<path d="M802.020838 761.884211l-13.696953-30.02892c88.776929-40.481993 146.141428-129.652895 146.141428-227.167836 0-95.421256-55.616692-183.773514-141.6573-225.101781l14.274098-29.740348c97.43717 46.772256 160.374594 146.804531 160.374594 254.842129C967.457728 615.09503 902.532019 716.043163 802.020838 761.884211z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-baojifuben2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M812.415591 413.047957"  ></path>' +
    '' +
    '<path d="M394.723237 438.486781c-0.008429 0.038533-0.018062 0.074657-0.026491 0.11319 0.009633 0.580399 0.026491 1.15839 0.026491 1.741198L394.723237 438.486781z"  ></path>' +
    '' +
    '<path d="M898.726491 217.159613c-6.395229-1.282417-12.842235-1.969986-19.27118-1.969986L693.375955 215.189627l0-49.71926c0-45.379511-36.79153-82.18549-82.218002-82.18549L412.83121 83.284877c-45.412023 0-82.207165 36.805979-82.207165 82.18549l0 49.71926-186.281653 0c-6.428945 0-12.875952 0.687568-19.27118 1.969986-55.997686 11.234698-107.928965 68.915783-107.928965 125.218118l0 75.646968c2.647921 13.37206 11.105854 17.174759 31.230775 17.174759l137.442625 0c23.949294-0.006021 29.489578-2.582897 29.489578-25.751903l0-5.770276c0-23.107595 18.508955-42.010306 41.145728-42.010306l69.032585 0c22.629548 0 41.145728 18.903915 41.145728 42.010306l0 6.085763c0 23.046183 5.700435 25.390659 27.902511 25.424375l0 4.120594c0.056595-0.233605 0.11319-0.467209 0.164968-0.706835-0.018062-1.141532-0.069841-2.277043-0.116802-3.412555 0.150518 0 0.293812 0.001204 0.445535 0.001204l238.479049 0c20.956987 0 23.044979-2.891159 23.044979-22.220138l0-9.297225c0-23.106391 18.508955-42.019939 41.144524-42.019939l68.136699 0c22.629548 0 41.145728 18.907528 41.145728 42.019939l0 7.35373c0 20.743853 6.893746 24.157612 27.030708 24.157612L980.164206 435.183804c16.255994 0 23.677157-3.417371 26.310628-14.230618l0-5.514997c0.090311 1.595496 0.139681 3.198216 0.164968 4.806958 0.008429-0.038533 0.018062-0.074657 0.026491-0.11319l0-77.754227C1006.665089 286.075396 954.725381 228.394311 898.726491 217.159613zM393.690078 179.061583c0-18.026091 14.678561-32.710673 32.738368-32.710673l171.133475 0c18.057399 0 32.760043 14.679765 32.760043 32.710673l0 36.128044L393.690078 215.189627 393.690078 179.061583z"  ></path>' +
    '' +
    '<path d="M982.323243 522.305096 835.078855 522.305096c-22.140664-0.006021-28.120462 3.811128-28.120462 22.591015l0 8.920326c0 23.112411-18.508955 42.021143-41.145728 42.021143l-68.134291 0c-22.629548 0-41.145728-18.907528-41.145728-42.021143l0-8.371235c0-18.148915-5.080299-23.140107-23.405019-23.140107L396.097169 522.305096c-23.392978 0-29.479945 5.17061-29.479945 26.104719l0 5.412644c0 23.112411-18.513771 42.019939-41.143319 42.019939l-69.034993 0c-22.635569 0-41.145728-18.907528-41.145728-42.019939l0-3.363185c0-24.579063-6.023147-28.154178-28.396212-28.154178L47.637288 522.305096c-19.702265 0-27.89649 3.901439-30.493837 17.846673l0 273.348758c0 62.734892 64.467661 127.214595 127.198941 127.214595l734.92146 0c62.73128 0 127.209778-64.478498 127.209778-127.214595l0-276.65294C1003.707703 526.169206 995.927704 522.305096 982.323243 522.305096z"  ></path>' +
    '' +
    '<path d="M320.960759 518.437374l0-74.677629c0-22.624732-13.827228-29.092209-30.725033-29.092209-16.886968 0-30.720217 6.467477-30.720217 29.092209l0 74.677629c0 22.624732 13.833249 29.092209 30.720217 29.092209C307.138348 547.530787 320.960759 541.062105 320.960759 518.437374z"  ></path>' +
    '' +
    '<path d="M762.947998 518.437374l0-74.677629c0-22.624732-13.821208-29.092209-30.720217-29.092209-16.892988 0-30.720217 6.467477-30.720217 29.092209l0 74.677629c0 22.624732 13.827228 29.092209 30.720217 29.092209C749.132811 547.530787 762.947998 541.062105 762.947998 518.437374z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jinlingyingcaiwangtubiao95" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M541.9264 122.9824c-6.7584-3.1232-14.7456-2.0736-20.4544 2.688l-249.216 209.7152L73.9328 335.3856c-10.5984 0-19.2 8.6016-19.2 19.2l0 329.0624c0 10.5984 8.6016 19.2 19.2 19.2l198.3232 0 249.216 209.7152c3.5328 2.944 7.936 4.5056 12.3648 4.5056 2.7392 0 5.504-0.5888 8.0896-1.792 6.784-3.1488 11.1104-9.9328 11.1104-17.408L553.0368 140.3904C553.0368 132.9152 548.7104 126.1312 541.9264 122.9824z"  ></path>' +
    '' +
    '<path d="M677.5296 743.808c-5.2992 0-10.5472-2.176-14.3616-6.4256-7.04-7.936-6.3488-20.0448 1.5616-27.1104 54.4768-48.5376 85.7344-118.1952 85.7344-191.1296 0-75.6224-33.2032-146.9952-91.0848-195.7888-8.1152-6.8352-9.1392-18.944-2.304-27.0592 6.8096-8.064 18.9696-9.1392 27.0592-2.304 66.56 56.0896 104.7296 138.1632 104.7296 225.152 0 83.84-35.9168 163.968-98.5856 219.776C686.6432 742.2208 682.0864 743.808 677.5296 743.808z"  ></path>' +
    '' +
    '<path d="M783.3344 834.1504c-6.528 0-12.928-3.3536-16.512-9.3696-5.4272-9.1136-2.432-20.8896 6.6816-26.3168 98.048-58.3168 158.9504-165.3504 158.9504-279.296 0-114.5856-61.3888-221.9008-160.256-280.064-9.1392-5.376-12.1856-17.152-6.8096-26.2912 5.4016-9.1136 17.152-12.16 26.2912-6.8096 110.5152 65.0496 179.1744 185.0624 179.1744 313.1648 0 127.4112-68.096 247.0656-177.7152 312.2944C790.0416 833.28 786.688 834.1504 783.3344 834.1504z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chengzhang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M861.106 253.494l-183.861 183.861v518.855q0 28.951-20.77 49.755t-49.755 20.77-49.755-20.77-20.77-49.755v-241.797h-40.305v241.797q0 28.951-20.77 49.755t-49.755 20.77-49.755-20.77-20.77-49.755v-518.855l-183.861-183.861q-17.632-17.632-17.632-42.809t17.632-42.809 42.809-17.632 42.809 17.632l143.554 143.554h231.711l143.554-143.554q17.632-17.632 42.809-17.632t42.809 17.632 17.632 42.809-17.632 42.809zM657.111 150.209q0 58.571-41.257 99.794t-99.794 41.257-99.794-41.257-41.257-99.794 41.257-99.794 99.794-41.257 99.794 41.257 41.257 99.794z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dianhua-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M65.771 502.182c0 246.632 199.937 446.566 446.57 446.565 246.613 0 446.549-199.934 446.551-446.565 0-246.633-199.936-446.549-446.55-446.55-246.635 0.001-446.57 199.917-446.571 446.55zM717.656 328.412c31.489 31.473 1.642 148.828-114.292 264.773-115.968 115.946-233.304 145.744-264.775 114.307-27.278-27.315-74.96-60.574-12.892-110.423 62.087-49.886 79.429-25.343 107.582 2.772 19.674 19.711 69.436-21.368 112.394-64.328 42.94-42.996 83.986-92.719 64.368-112.43-28.155-28.153-52.679-45.511-2.792-107.562 49.904-62.049 83.125-14.405 110.406 12.891z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-guanxiqunshixin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M728.879 568.206l-8.926-2.442c73.336-24.909 129.405-109.254 129.405-194.077 0-105.386-84.97-195.187-185.837-195.187-2.299 0-4.547 0.264-6.83 0.35 14.278 34.266 22.242 71.731 22.242 110.717 0 78.938-33.382 156.845-85.835 212.586 28.306 20.622 55.106 45.941 79.354 74.205 11.378-0.547 22.685-1.79 33.488-4.478l21.928 6.12c-6.422 6.344-19.978 16.325-33.309 26.046 56.445 75.381 94.144 166.514 94.144 248.24 0 44.624-14.459 81.746-37.038 110.214L854.53 960.5c43.438 0 90.882-33.795 90.882-96.438C945.412 749.028 833.48 596.825 728.879 568.206zM476.951 512.162l-10.2-2.789-26.682-0.152C545.52 491.039 625.745 399.144 625.745 288.5c0-123.712-100.288-224-224-224s-224 100.288-224 224c0 109.754 78.939 201.061 183.136 220.269l-25.277-0.144-12.941 3.538C198.725 546.076 81.556 710.724 81.556 850.95c0 71.16 51.648 109.55 100.253 109.55l438.746 0c49.643 0 103.864-38.624 103.864-110.216C724.418 718.817 596.496 544.87 476.951 512.162zM400.892 579.132c-13.07-12.192-62.043-43.96-77.723-58.688l23.267-8.342c33.122 9.581 70.699 10.336 104.298 1.974l25.062 6.994C460.999 535.687 413.096 567.18 400.892 579.132z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconcle07" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M897.899512 153.015999c-0.370437-7.363711-3.382027-14.618952-9.024537-20.225647-5.644557-5.604648-12.918217-8.566096-20.284999-8.888438-3.75451-0.164752-7.531534 0.364297-11.129478 1.570775l-201.732537 28.478612c-1.354857 0.100284-2.703575 0.288572-4.03592 0.569982-5.666046 1.189082-11.059893 3.985778-15.445784 8.400321-11.948123 12.028964-11.882632 31.466666 0.146333 43.414789l62.632479 62.212924-93.796246 93.601818c-54.025451-44.87607-121.373325-69.310575-192.484919-69.310575-80.634482 0-156.442028 31.401174-213.458603 88.417749-57.016575 57.016575-88.416725 132.824121-88.416725 213.458603 0 80.633459 31.401174 156.441005 88.416725 213.458603 57.017598 57.016575 132.825145 88.416725 213.458603 88.416725s156.441005-31.401174 213.458603-88.416725c57.016575-57.017598 88.416725-132.825145 88.416725-213.458603 0-62.49331-18.87386-122.081453-53.904701-172.276668l96.385211-96.203062 60.069097 59.666938c12.029988 11.948123 31.468712 11.883655 43.416835-0.146333 3.961218-3.987824 6.593162-8.792247 7.916297-13.865799 0.629333-2.422166 0.960885-4.904707 0.991584-7.390317l26.909883-200.344934C897.585357 160.550603 898.09087 156.77051 897.899512 153.015999zM580.038094 764.583692c-45.420469 45.420469-105.808838 70.434166-170.042791 70.434166s-124.622322-25.013697-170.042791-70.434166c-45.420469-45.419446-70.434166-105.807814-70.434166-170.042791 0-64.233953 25.013697-124.622322 70.434166-170.042791s105.808838-70.434166 170.042791-70.434166 124.622322 25.013697 170.042791 70.434166 70.434166 105.808838 70.434166 170.042791C650.47226 658.775878 625.458563 719.164247 580.038094 764.583692z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-quanbu" viewBox="0 0 1047 1024">' +
    '' +
    '<path d="M470.094439 387.327159C470.094439 432.848944 432.848944 470.094439 387.327159 470.094439L91.526803 470.094439C46.005018 470.094439 8.759524 432.848944 8.759524 387.327159L8.759524 91.526803C8.759524 46.005018 46.005018 8.759524 91.526803 8.759524l295.800356 0C432.848944 8.759524 470.094439 46.005018 470.094439 91.526803L470.094439 387.327159z"  ></path>' +
    '' +
    '<path d="M470.094439 931.877549C470.094439 977.399334 432.848944 1014.644829 387.327159 1014.644829L91.526803 1014.644829C46.005018 1014.644829 8.759524 977.399334 8.759524 931.877549L8.759524 636.077193C8.759524 590.555409 46.005018 553.309914 91.526803 553.309914l295.800356 0C432.848944 553.309914 470.094439 590.555409 470.094439 636.077193L470.094439 931.877549z"  ></path>' +
    '' +
    '<path d="M1038.080934 387.327159c0 45.521785-37.245495 82.76728-82.76728 82.76728L659.513299 470.094439c-45.523245 0-82.76728-37.245495-82.76728-82.76728L576.746019 91.526803C576.746019 46.005018 613.990054 8.759524 659.513299 8.759524l295.798896 0c45.523245 0 82.76728 37.245495 82.76728 82.76728L1038.079474 387.327159z"  ></path>' +
    '' +
    '<path d="M1038.080934 931.877549c0 45.523245-37.245495 82.76728-82.76728 82.76728L659.513299 1014.644829c-45.523245 0-82.76728-37.245495-82.76728-82.76728L576.746019 636.077193c0-45.523245 37.245495-82.76728 82.76728-82.76728l295.798896 0c45.523245 0 82.76728 37.245495 82.76728 82.76728L1038.079474 931.877549z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-duanxin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M323.25632 449.560576m-40.96 0a10 10 0 1 0 81.92 0 10 10 0 1 0-81.92 0ZM510.40256 449.560576m-40.96 0a10 10 0 1 0 81.92 0 10 10 0 1 0-81.92 0ZM697.544704 449.560576m-40.96 0a10 10 0 1 0 81.92 0 10 10 0 1 0-81.92 0ZM842.620928 782.721024l-332.238848 0c-11.313152 0-20.48-9.166848-20.48-20.48s9.166848-20.48 20.48-20.48l332.238848 0c53.362688 0 96.776192-43.413504 96.776192-96.776192L939.39712 254.132224c0-53.362688-43.413504-96.776192-96.776192-96.776192L178.176 157.356032c-53.358592 0-96.772096 43.413504-96.772096 96.776192l0 390.848512c0 53.362688 43.413504 96.776192 96.772096 96.776192l42.418176 0c11.313152 0 20.48 9.166848 20.48 20.48s-9.166848 20.48-20.48 20.48L178.176 782.716928c-75.943936 0-137.732096-61.78816-137.732096-137.736192L40.443904 254.132224c0-75.948032 61.78816-137.736192 137.732096-137.736192l664.449024 0c75.948032 0 137.736192 61.78816 137.736192 137.736192l0 390.848512C980.35712 720.932864 918.56896 782.721024 842.620928 782.721024zM255.807488 941.379584c-30.72 0-55.717888-25.083904-55.717888-55.9104l0-123.22816c0-11.313152 9.166848-20.48 20.48-20.48s20.48 9.166848 20.48 20.48l0 123.22816c0 11.104256 12.156928 19.542016 23.36768 12.034048l234.827776-152.440832c9.478144-6.156288 22.171648-3.457024 28.332032 6.029312 6.156288 9.486336 3.46112 22.171648-6.029312 28.332032l-234.57792 152.272896C277.6064 937.971712 266.743808 941.379584 255.807488 941.379584z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-geren" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M692.963556 166.286222c8.647111 34.787556 9.500444 37.688889 8.704 73.415111-0.312889 13.767111-8.220444 77.454222-6.087111 96.995556 1.763556 16.099556 5.774222 17.379556 12.145778 30.663111 11.036444 23.096889 7.338667 54.954667 3.100444 78.250667-2.332444 12.743111-7.224889 30.890667-14.705778 41.301333-8.220444 11.491556-24.689778 11.548444-31.943111 24.945778-10.496 19.256889-4.579556 46.307556-11.178667 67.128889-7.509333 23.580444-26.652444 25.230222-28.074667 56.120889 9.358222 1.308444 18.716444 2.673778 28.074667 3.982222 9.386667 19.939556 26.567111 60.074667 44.117333 72.163556 14.705778 4.010667 29.383111 8.049778 44.088889 12.032 51.541333 21.134222 108.771556 46.392889 160.369778 68.152889 47.018667 19.825778 103.281778 26.908444 120.291556 76.202667 0 33.450667 3.157333 112.497778 2.304 156.359111l-1024 0c-0.881778-43.861333 2.275556-122.908444 2.275556-156.359111 16.981333-49.294222 73.272889-56.348444 120.291556-76.202667 51.626667-21.76 108.885333-47.018667 160.369778-68.152889 14.705778-3.982222 29.411556-8.021333 44.117333-12.032 17.550222-12.088889 34.730667-52.224 44.088889-72.163556l20.878222-5.063111c-4.721778-26.368-21.048889-28.416-27.847111-47.047111-2.673778-28.074667-5.319111-56.149333-7.992889-84.195556 0.113778 1.336889-19.2-3.527111-21.76-5.091556-27.221333-17.066667-27.761778-86.357333-30.378667-115.171556-1.194667-13.169778 17.095111-23.978667 12.032-48.128-29.866667-141.425778 12.913778-207.587556 80.469333-229.546667 46.904889-19.000889 134.513778-54.243556 216.234667-3.982222l20.252444 18.773333 32.824889 5.660444C682.467556 134.798222 692.963556 166.286222 692.963556 166.286222z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-geren1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M383.4112 584.80128s-47.6672-37.51936-66.18112-80.64c0 0-37.0176-14.56128-43.4688-48.16384-6.4512-33.60256-6.4512-68.59776-5.04832-80.64 1.40288-12.04224 5.89312-36.67968 28.60544-49.5616 0 0-1.12128-82.60096 0-97.72032s6.7328-80.3584 51.04128-115.08224c30.28992-24.63744 77.39904-23.29088 83.85024-22.00576 0 0 20.46976-15.232 41.78432-13.83424l60.57472-13.1584s16.54784 0 26.08128 4.1984c9.53856 4.1984 24.96512 14.27968 47.67232 38.92224 0 0 50.7648-5.03808 77.12768 12.60032 26.35776 17.6384 38.42048 47.88224 40.94464 94.3616s3.35872 72.2432 2.52416 89.8816c-0.8448 17.6384-1.6896 22.95808-1.6896 22.95808s14.0288 7.83872 21.31456 24.08448c7.29088 16.24064 11.21792 49.5616 8.98048 73.07776-2.24256 23.52128-0.2816 45.92128-54.97344 76.4416 0 0-19.34848 47.88224-59.44832 84.28032 0 0-1.4336 27.71968-1.152 36.67456 0.2816 8.95488-3.34336 18.2016 0.8704 26.04544 4.20864 7.8336 11.4944 21.84192 36.736 29.12256 25.2416 7.28064 155.36128 22.4 205.84448 67.75808 50.47296 45.35296 62.2592 51.52256 74.5984 161.83808h-54.41024s-3.35872-54.32832-19.06176-86.79936c-9.05728-15.6928-32.5376-39.76704-80.77312-57.11872 0 0-26.36288-12.31872-64.49664-18.47808-38.13888-6.16448-115.54816-15.68768-140.22144-61.04576-23.56224-49.27488-11.78624-57.6768-11.78624-82.31424l0.5632-41.44128s28.42112-20.90496 44.49792-45.92128c17.9456-25.0112 23.74144-48.90624 23.74144-48.90624l42.43968-26.3168s3.17952-2.80576 3.17952-19.23072c0-16.42496 0.55296-26.88-3.17952-41.6256 0 0-21.31456-3.16928-27.66848-25.0112 0 0-2.42688-11.01312-0.37376-19.97312 2.06336-8.96 3.36384-32.6656 2.99008-41.99936-0.37376-9.33376-1.6896-68.87936-4.85888-89.78944-3.17952-20.90496-7.07584-33.64864-19.28192-37.7088 0 0-10.93632-2.24256-16.33792-2.51904-5.39648-0.2816-12.40576-0.2816-18.1504 0.49152s-12.20608 0.49152-23.56224-1.3312c-6.86592-1.3312-14.72512-6.8608-18.22208-9.728 0 0-14.16704-13.02016-20.6848-20.22912-6.528-7.20896-12.97408-10.42944-15.15008-11.20256l-59.38176 12.60032s-8.69376-0.20992-11.008 0.70144c0 0-1.82272 1.25952-4.00384 3.00544-2.16576 1.75104-8.40704 7.424-18.78528 9.94304s-19.91168 2.02752-25.58976 0c0 0-18.92864 2.6624-24.88832 3.98848-5.95968 1.3312-13.88544 5.66784-21.4528 14.14144-7.57248 8.46848-20.54144 31.91808-21.94432 62.1568-1.408 30.24384-1.408 84.28032-1.26976 89.04192 0.14848 4.7616 0.14848 10.7776 0.56832 13.02016s2.80576 15.95904-1.96096 26.17856c-4.77184 10.22464-9.68192 17.08032-25.94304 22.81984 0 0-2.80576 16.79872-1.40288 34.86208 1.40288 18.05824 3.92704 35.70176 4.62336 37.23776 0 0 8.27392 5.88288 17.67424 9.5232 9.3952 3.6352 14.86336 5.87776 14.86336 5.87776s4.91008 19.03616 19.62496 40.0384c14.73024 21.00224 31.69792 37.376 58.61888 50.67776l1.2544 73.35936s4.91008 38.77888-17.80736 61.46048c-22.71744 22.67648-56.64256 42.28096-102.07744 48.15872-45.42976 5.87264-100.67456 19.88096-124.2368 32.47616-23.55712 12.60544-51.04128 33.32608-61.97248 49.84832 0 0-7.296 15.68256-10.09664 43.96032-2.80576 28.27776-2.80576 43.12064-2.80576 43.12064H65.39264s4.20864-68.03968 9.81504-85.12c5.6064-17.08032 10.37824-34.44224 40.66304-61.88032 30.28992-27.43808 56.36608-40.32 83.01056-50.40128s57.76896-15.68256 82.72896-19.59936c24.96-3.92704 64.78848-10.92096 83.85024-23.52128 19.072-12.60032 19.91168-17.36192 19.34848-32.75776-0.55808-15.40096-1.39776-48.15872-1.39776-48.15872zM64 902.87616h896V960h-896v-57.12384z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-kaixin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1024 512c0 282.7776-229.2352 512-512 512S0 794.7776 0 512C0 229.248 229.2352 0 512 0s512 229.2352 512 512zM268.992 269.6576a82.2016 82.2016 0 1 0 0 164.4032 82.2016 82.2016 0 0 0 0-164.4032z m486.016 0a82.2016 82.2016 0 1 0 0 164.416 82.2016 82.2016 0 0 0 0-164.416zM732.928 629.952C712 725.4784 614.3104 820.48 512.4992 820.48c-101.8112 0-205.5296-95.0144-226.4448-190.5408 0 0-6.72-28.3008-32.9216-28.3008-22.0928 0-21.9136 28.288-21.9136 28.288 21.8752 135.6544 139.4688 239.2448 281.28 239.2448s259.4048-103.5904 281.28-239.232c0 0 6.3104-28.3008-19.968-28.3008-31.1552 0-40.896 28.288-40.896 28.288z" fill="#4A4A4A" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-duanxin1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M850.9184 117.02272H173.07648c-72.59136 0-107.90912 35.89632-107.90912 107.71968v430.88896c0 71.81824 33.13152 105.75872 103.91552 105.75872H272.9984l-12.78976 109.68064a35.71712 35.71712 0 0 0 18.9952 31.5904 35.6864 35.6864 0 0 0 36.89472-1.72032l206.29504-139.55072h332.5184c71.936 0 103.91552-33.9456 103.91552-105.75872V224.7424c0-71.81824-35.968-107.71968-107.90912-107.71968zM304.38912 491.32544c-28.60032 0-51.85024-23.32672-51.85024-51.92704s23.24992-52.02944 51.85024-52.02944 51.85024 23.32672 51.85024 52.02944c0.00512 28.6976-23.34208 51.92704-51.85024 51.92704z m207.49824 0c-28.7488 0-52.11648-23.32672-52.11648-51.92704s23.36768-52.02944 52.11648-52.02944c28.74368 0 52.11648 23.32672 52.11648 52.02944-0.00512 28.6976-23.47008 51.92704-52.11648 51.92704z m207.80544 0c-28.7488 0-52.02944-23.32672-52.02944-51.92704s23.28064-52.02944 52.02944-52.02944 52.11648 23.32672 52.11648 52.02944c0 28.6976-23.36256 51.92704-52.11648 51.92704z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouyeshouye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M949.082218 519.343245 508.704442 107.590414 68.326667 518.133697c-8.615215 8.03193-9.096169 21.538549-1.043772 30.144554 8.043187 8.599865 21.566178 9.085936 30.175253 1.035586l411.214573-383.337665 411.232992 384.505257c4.125971 3.854794 9.363252 5.760191 14.5903 5.760191 5.690606 0 11.384281-2.260483 15.58393-6.757914C958.138478 540.883841 957.695387 527.388479 949.082218 519.343245L949.082218 519.343245zM949.082218 519.343245M814.699602 527.800871c-11.787464 0-21.349237 9.555633-21.349237 21.327748l0 327.037405L622.552373 876.166023 622.552373 648.662543 394.824789 648.662543l0 227.503481L224.032938 876.166023 224.032938 549.128619c0-11.772115-9.55154-21.327748-21.348214-21.327748-11.802814 0-21.35333 9.555633-21.35333 21.327748l0 369.691877 256.19494 0L437.526333 691.318038l142.329613 0 0 227.502457 256.1888 0L836.044746 549.128619C836.045769 537.356504 826.481949 527.800871 814.699602 527.800871L814.699602 527.800871zM814.699602 527.800871M665.254941 222.095307l128.095423 0 0 113.74867c0 11.789511 9.562796 21.332864 21.349237 21.332864 11.783371 0 21.346167-9.543354 21.346167-21.332864L836.045769 179.439812 665.254941 179.439812c-11.789511 0-21.35333 9.538237-21.35333 21.327748C643.900587 212.554 653.464407 222.095307 665.254941 222.095307L665.254941 222.095307zM665.254941 222.095307" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouye_shouye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M967.976345 519.115334L511.986797 92.316902 55.99725 517.899038c-8.878964 8.392446-9.365483 22.379855-1.094667 31.258819 8.270816 8.878964 22.379855 9.365483 31.258819 1.094667l425.825395-397.364057 425.825395 398.580354c3.892149 3.648889 9.243853 5.959853 15.082076 5.959852 6.324742 0 12.041335-2.675852 16.055114-6.93289 8.392446-9.000594 8.027557-22.988003-0.973037-31.380449z" fill="" ></path>' +
    '' +
    '<path d="M828.832028 527.872669c-12.162965 0-22.136596 9.852001-22.136596 22.136596v338.981827H629.845925V653.151206H394.127669v235.839886H217.156532V550.009265c0-12.162965-9.852001-22.136596-22.136596-22.136596-12.162965 0-22.136596 9.852001-22.136595 22.136596v383.255018H438.157601V697.424397h147.415133v235.839886h265.27426V550.009265c0.12163-12.284594-9.730372-22.136596-22.014966-22.136596z" fill="" ></path>' +
    '' +
    '<path d="M202.804234 897.748426h203.972918V672.003801h197.769807v225.744625h219.906402V548.06319h121.872906L511.986797 136.225205 62.078732 542.224967l138.779427 5.838223 1.946075 349.685236z" fill="" ></path>' +
    '' +
    '<path d="M590.924438 165.902839h-32.961634v211.635586h257.733222v-0.486519zM815.696026 357.834422V165.902839h-204.337807z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qinggan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M476.7 493.6c27.2-77.9 100.6-130.1 183.3-130.1 21.2 0 42.1 3.5 62.3 10.3 34.8 11.8 64.6 32.6 87 59.6 14-3.2 28.4-4.8 43.1-4.8 2.2 0 4.3 0 6.5 0.1C870.2 319.8 837 249.8 837 249.8 790.3 139.7 663.1 88.3 552.9 134.9 475.5 167.6 427.1 240 421.2 318.3 360.8 268 275 252.4 197.7 285.1 87.5 331.8 36 458.8 82.7 568.9c0 0 49.5 140.3 231.4 211.3 111.4 43.5 208.2 65.2 269.6 75.8-23.2-29.4-55.8-75.4-86.2-135-57.5-113-28.4-207-20.8-227.4z m412.2 20.9c-41.9-14.2-86.3-2.7-116 26.1-6.1-40.9-34.4-77-76.3-91.2-59.6-20.1-124.4 11.8-144.6 71.4 0 0-29.7 72.5 16.9 164 33.4 65.5 69.3 112.3 88.9 135.5 9 10.6 23.1 15.1 36.6 11.8 31.4-7.7 92.4-25.1 153.1-55.2C939.1 731.3 960.4 659 960.4 659c20.2-59.6-11.8-124.3-71.5-144.5z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)