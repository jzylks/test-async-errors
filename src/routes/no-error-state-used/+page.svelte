<script lang="ts">
    import { test_error } from "$lib/remote/error.remote";

    await test_error();

    let title = $state("Error Test Page");
</script>

<h1>{title}</h1>
<p>Refresh this page and SvelteKit will crash</p>
