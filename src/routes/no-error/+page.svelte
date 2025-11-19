<script lang="ts">
    import { test_error } from "$lib/remote/error.remote";

    let title = $state("Error Test Page");

    await test_error();
</script>

<p>Refresh this page and it will show an error but not crash.</p>
