cmd_Release/plugin-native.node := ln -f "Release/obj.target/plugin-native.node" "Release/plugin-native.node" 2>/dev/null || (rm -rf "Release/plugin-native.node" && cp -af "Release/obj.target/plugin-native.node" "Release/plugin-native.node")
